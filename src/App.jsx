import { useState } from 'react';
import { Home, Send, History, User } from 'lucide-react';
import './App.css';
import Dashboard from './views/Dashboard';
import Transfer from './views/Transfer';
import TransactionsHistory from './views/History';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  
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
        <button className="nav-item">
          <User size={24} />
          <span>Profil</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
