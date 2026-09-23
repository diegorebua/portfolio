import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './composables/useTheme';
import { startLoading } from './composables/usePageLoader';
import InteractiveBackground from './components/InteractiveBackground';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import SkillsView from './views/SkillsView';
import ProjectsView from './views/ProjectsView';
import ExperienceView from './views/ExperienceView';
import ContactView from './views/ContactView';

const titles: Record<string, string> = {
  '/': 'Diego Rebuá | Início',
  '/sobre': 'Diego Rebuá | Sobre Mim',
  '/stack': 'Diego Rebuá | Arsenal Tecnológico',
  '/projetos': 'Diego Rebuá | Projetos em Destaque',
  '/trajetoria': 'Diego Rebuá | Minha Trajetória',
  '/contato': 'Diego Rebuá | Contato',
};

function Site() {
  const location = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    document.title = titles[location.pathname] ?? 'Diego Rebuá';
    if (previousPath.current !== null && previousPath.current !== location.pathname) {
      startLoading(location.pathname);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    previousPath.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-between" style={{ color: 'var(--color-text)' }}>
      <CustomCursor />
      <InteractiveBackground />
      <PageLoader />
      <Navbar />
      <main className="flex-grow">
        <div key={location.pathname} className="page-enter">
          <Routes location={location}>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <ThemeProvider><Site /></ThemeProvider>;
}
