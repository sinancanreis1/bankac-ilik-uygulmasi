import { useState, useEffect } from 'react';
import { Home, Send, History, User } from 'lucide-react';
import './App.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Transfer from './views/Transfer';
import TransactionsHistory from './views/History';
import Profile from './views/Profile';
import { useLanguage } from './LanguageContext';

function App() {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('bankAppLoggedIn') === 'true';
  });
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem('bankAppCurrentView') || 'dashboard';
  });
  
  useEffect(() => {
    localStorage.setItem('bankAppCurrentView', currentView);
  }, [currentView]);
  
  const handleLoginSuccess = () => {
    localStorage.setItem('bankAppLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('bankAppLoggedIn');
    localStorage.removeItem('bankAppCurrentView');
    setIsLoggedIn(false);
    setCurrentView('dashboard');
  };
  
  if (!isLoggedIn) {
    return <Login onLogin={handleLoginSuccess} />;
  }

  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard onViewChange={setCurrentView} />;
      case 'transfer':
        return <Transfer onBack={() => setCurrentView('dashboard')} />;
      case 'history':
        return <TransactionsHistory onBack={() => setCurrentView('dashboard')} />;
      case 'profile':
        return <Profile onLogout={handleLogout} />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {renderView()}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav glass-panel">
        <button 
          type="button"
          className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentView('dashboard')}
        >
          <Home size={24} />
          <span>{t('nav.home')}</span>
        </button>
        <button 
          type="button"
          className={`nav-item ${currentView === 'transfer' ? 'active' : ''}`}
          onClick={() => setCurrentView('transfer')}
        >
          <Send size={24} />
          <span>{t('nav.transfer')}</span>
        </button>
        <button 
          type="button"
          className={`nav-item ${currentView === 'history' ? 'active' : ''}`}
          onClick={() => setCurrentView('history')}
        >
          <History size={24} />
          <span>{t('nav.history')}</span>
        </button>
        <button 
          type="button"
          className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
          onClick={() => setCurrentView('profile')}
        >
          <User size={24} />
          <span>{t('nav.profile')}</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
