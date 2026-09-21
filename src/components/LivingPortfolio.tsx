import { useState, useEffect, useCallback } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

interface FloatingPiece {
  project: Project;
  x: number;
  y: number;
  width: number;
  height: number;
  delay: number;
  floatClass: string;
  mediaItems: string[];
  rotate: number;
}

interface LivingPortfolioProps { onSelectProject: (project: Project) => void; }

export default function LivingPortfolio({ onSelectProject }: LivingPortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mediaIndices, setMediaIndices] = useState<Record<number, number>>({});
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      setViewport(width < 640 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop');
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const layouts = {
    mobile: [
      { x: 1, y: 51, width: 128, height: 88, rotate: -4 },
      { x: 65, y: 48, width: 126, height: 86, rotate: 4 },
      { x: 2, y: 72, width: 116, height: 80, rotate: 3 },
      { x: 66, y: 70, width: 122, height: 84, rotate: -3 },
      { x: 27, y: 43, width: 104, height: 72, rotate: 2 },
    ],
    tablet: [
      { x: -1, y: 43, width: 188, height: 128, rotate: -5 },
      { x: 70, y: 39, width: 180, height: 124, rotate: 5 },
      { x: 0, y: 67, width: 170, height: 116, rotate: 4 },
      { x: 72, y: 63, width: 184, height: 126, rotate: -4 },
      { x: 34, y: 23, width: 150, height: 102, rotate: 3 },
    ],
    desktop: [
      { x: 0, y: 18, width: 300, height: 194, rotate: -6 },
      { x: 74, y: 13, width: 285, height: 184, rotate: 5 },
      { x: 1, y: 57, width: 265, height: 172, rotate: 4 },
      { x: 76, y: 53, width: 280, height: 182, rotate: -5 },
      { x: 38, y: 8, width: 220, height: 142, rotate: 3 },
    ],
  };

  const layout = layouts[viewport];
  const pieces: FloatingPiece[] = projects.slice(0, 5).map((project, i) => {
    const item = layout[i];
    return {
      project,
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      rotate: item.rotate,
      delay: i * 0.9,
      floatClass: ['animate-float-slow', 'animate-float-medium', 'animate-drift', 'animate-float-slow', 'animate-float-medium'][i],
      mediaItems: [project.cover, ...project.gallery.filter((g) => g.type === 'image').map((g) => g.src)].filter(Boolean).slice(0, 4),
    };
  });

  const cycleActive = useCallback(() => setActiveIndex((prev) => (prev + 1) % pieces.length), [pieces.length]);

  useEffect(() => {
    const interval = setInterval(cycleActive, 4000);
    return () => clearInterval(interval);
  }, [cycleActive]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMediaIndices((prev) => {
        const next = { ...prev };
        pieces.forEach((piece, i) => {
          if (piece.mediaItems.length > 1) next[i] = ((prev[i] ?? 0) + 1) % piece.mediaItems.length;
        });
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [viewport]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden" aria-hidden="false">
      {pieces.map((piece, i) => {
        const isActive = activeIndex === i;
        const isHovered = hoveredId === piece.project.id;
        return (
          <div
            key={piece.project.id}
            className="pointer-events-auto absolute"
            style={{ left: piece.x + '%', top: piece.y + '%', width: piece.width, height: piece.height, zIndex: isActive ? 8 : 3 }}
          >
            <button
              type="button"
              className={piece.floatClass + ' group relative block h-full w-full cursor-pointer border-0 bg-transparent p-0 text-left'}
              style={{ animationDelay: piece.delay + 's' }}
              onMouseEnter={() => setHoveredId(piece.project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject(piece.project)}
              aria-label={'Ver proyecto ' + piece.project.title}
            >
              <div
                className="absolute -inset-5 rounded-[28px] blur-2xl"
                style={{ background: 'radial-gradient(ellipse, rgba(229,37,33,0.48) 0%, transparent 70%)', opacity: isActive || isHovered ? 0.9 : 0.5 }}
              />
              <div
                className="relative h-full w-full overflow-hidden rounded-[18px] border border-white/20 bg-black/70 shadow-[0_25px_80px_-25px_rgba(0,0,0,0.95)] transition-all duration-700"
                style={{
                  transform: 'rotate(' + piece.rotate + 'deg) scale(' + (isActive || isHovered ? 1.035 : 1) + ')',
                  opacity: isActive || isHovered ? 1 : 0.82,
                }}
              >
                {piece.mediaItems.map((src, mi) => (
                  <img
                    key={src + mi}
                    src={src}
                    alt=""
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: (mediaIndices[i] ?? 0) === mi ? 1 : 0,
                      transition: 'opacity 1.4s ease, transform 5s ease',
                      transform: (mediaIndices[i] ?? 0) === mi ? 'scale(1)' : 'scale(1.04)',
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-red-500/10" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                  {piece.project.title}
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
