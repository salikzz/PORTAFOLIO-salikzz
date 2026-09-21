import { useState, useCallback } from 'react';
import { LangProvider } from '@/context/LangContext';
import Background from '@/components/Background';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectDetail from '@/components/ProjectDetail';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Project } from '@/data/projects';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <Background />
      <Header />

      <main>
        <Hero onSelectProject={handleSelectProject} />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <PortfolioApp />
    </LangProvider>
  );
}
