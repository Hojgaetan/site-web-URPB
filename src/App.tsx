import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Accueil } from './components/pages/Accueil';
import { Village } from './components/pages/Village';
import { Projets } from './components/pages/Projets';
import { Soutenir } from './components/pages/Soutenir';
import { Actualites } from './components/pages/Actualites';
import { Contact } from './components/pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={handleNavigate} />;
      case 'village':
        return <Village />;
      case 'projets':
        return <Projets onNavigate={handleNavigate} />;
      case 'soutenir':
        return <Soutenir onNavigate={handleNavigate} />;
      case 'actualites':
        return <Actualites />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}