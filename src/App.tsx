import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { type ReactNode } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { SolutionsPage } from './pages/Solutions';
import { RobotsPage } from './pages/Robots';
import { PartnershipsPage } from './pages/Partnerships';
import { NewsPage } from './pages/News';
import { ContactPage } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-deep-bg selection:bg-cyan selection:text-black">
      <div className="scanline z-50 pointer-events-none" />
      <Navbar />
      <main>{children}</main>
      <Footer />

      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-[0.03]" />
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-cyan/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-cyan/5 rounded-full blur-[120px] animate-pulse" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/robots" element={<RobotsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
