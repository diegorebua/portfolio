import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import SkillsView from './views/SkillsView';
import ProjectsView from './views/ProjectsView';
import ExperienceView from './views/ExperienceView';
import ContactView from './views/ContactView';

const titles: Record<string, string> = {
  '/': 'Diego Rebuá — Desenvolvedor Full Stack',
  '/sobre': 'Sobre — Diego Rebuá',
  '/stack': 'Stack — Diego Rebuá',
  '/projetos': 'Projetos — Diego Rebuá',
  '/trajetoria': 'Trajetória — Diego Rebuá',
  '/contato': 'Contato — Diego Rebuá',
};

function Site() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? 'Diego Rebuá';
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-shell">
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/sobre" element={<AboutView />} />
          <Route path="/stack" element={<SkillsView />} />
          <Route path="/projetos" element={<ProjectsView />} />
          <Route path="/trajetoria" element={<ExperienceView />} />
          <Route path="/contato" element={<ContactView />} />
          <Route path="/about" element={<Navigate to="/sobre" replace />} />
          <Route path="/skills" element={<Navigate to="/stack" replace />} />
          <Route path="/projects" element={<Navigate to="/projetos" replace />} />
          <Route path="/experience" element={<Navigate to="/trajetoria" replace />} />
          <Route path="/contact" element={<Navigate to="/contato" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <Site />;
}
