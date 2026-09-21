import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  depth: number;
  color: string;
}

const PARTICLE_COUNT = 50;
const COLORS = ['#E52521', '#FF5A1F', '#F5F2EE', '#C4BFB8'];

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const depth = Math.random() * 0.8 + 0.2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15 * depth,
        vy: (Math.random() - 0.5) * 0.15 * depth,
        size: (Math.random() * 1.8 + 0.4) * depth,
        opacity: (Math.random() * 0.3 + 0.08) * depth,
        depth,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    });

    if (prefersReduced) {
      // Render a single static frame
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particlesRef.current) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      };
      render();
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Subtle mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;
        if (dist < maxDist && dist > 0) {
          const force = ((maxDist - dist) / maxDist) * 0.5 * p.depth;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* Nebula blobs - ember */}
      <div
        className="absolute top-[10%] left-[5%] h-[500px] w-[500px] rounded-full opacity-30 blur-[120px] animate-nebula"
        style={{ background: 'radial-gradient(circle, #E52521 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[50%] right-[8%] h-[600px] w-[600px] rounded-full opacity-20 blur-[140px] animate-nebula"
        style={{ background: 'radial-gradient(circle, #FF5A1F 0%, transparent 70%)', animationDelay: '5s' }}
      />
      <div
        className="absolute bottom-[15%] left-[30%] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px] animate-nebula"
        style={{ background: 'radial-gradient(circle, #650909 0%, transparent 70%)', animationDelay: '10s' }}
      />

      {/* Lava-lamp organic blobs */}
      <div
        className="absolute top-[25%] left-[60%] h-[300px] w-[300px] opacity-10 blur-[80px] animate-blob"
        style={{ background: 'radial-gradient(circle, #FF5A1F 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[70%] left-[15%] h-[250px] w-[250px] opacity-10 blur-[70px] animate-blob"
        style={{ background: 'radial-gradient(circle, #E52521 0%, transparent 70%)', animationDelay: '6s' }}
      />

      {/* Canvas particle system */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.8) 100%)' }}
      />
    </div>
  );
}
