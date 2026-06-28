import { useState } from 'react';
import { Home, Send, History, User } from 'lucide-react';
import './App.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Transfer from './views/Transfer';
import TransactionsHistory from './views/History';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('bankAppLoggedIn') === 'true';
  });
  const [currentView, setCurrentView] = useState('dashboard');
  
  const handleLoginSuccess = () => {
    localStorage.setItem('bankAppLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('bankAppLoggedIn');
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
          className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentView('dashboard')}
        >
          <Home size={24} />
          <span>Ana Sayfa</span>
        </button>
        <button 
          className={`nav-item ${currentView === 'transfer' ? 'active' : ''}`}
          onClick={() => setCurrentView('transfer')}
        >
          <Send size={24} />
          <span>Transfer</span>
        </button>
        <button 
          className={`nav-item ${currentView === 'history' ? 'active' : ''}`}
          onClick={() => setCurrentView('history')}
        >
          <History size={24} />
          <span>Geçmiş</span>
        </button>
        <button 
          className="nav-item"
          onClick={handleLogout}
        >
          <User size={24} />
          <span>Çıkış Yap</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
