import React, { useState, useEffect } from 'react';
import { GlobalHeader } from './components/GlobalHeader';
import { HomePage } from './components/HomePage';
import { IntelligentSystemsPage } from './components/IntelligentSystemsPage';
import { EnterpriseLabPage } from './components/EnterpriseLabPage';
import { AIProductStudioPage } from './components/AIProductStudioPage';
import { InnovationLabPage } from './components/InnovationLabPage';
import { AutomationPage } from './components/AutomationPage';
import { AdvisoryPage } from './components/AdvisoryPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      case 'intelligent-systems':
        return <IntelligentSystemsPage onNavigate={handleNavigate} />;
      
      case 'enterprise-lab':
        return <EnterpriseLabPage onNavigate={handleNavigate} />;
      
      case 'ai-product-studio':
        return <AIProductStudioPage onNavigate={handleNavigate} />;
      
      case 'innovation-lab':
        return <InnovationLabPage onNavigate={handleNavigate} />;
      
      case 'automation':
        return <AutomationPage onNavigate={handleNavigate} />;
      
      case 'advisory':
        return <AdvisoryPage onNavigate={handleNavigate} />;
      
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F5F7FA] flex flex-col items-center">
      <GlobalHeader activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1 w-full">
        <div className="w-full max-w-[1400px] mx-auto">
          {renderPage()}
          <Footer onNavigate={handleNavigate} />
        </div>
      </main>
    </div>
  );
}
