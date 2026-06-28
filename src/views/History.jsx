import React from 'react';
import { ChevronLeft, Filter, Search } from 'lucide-react';
import './History.css';

const allTransactions = [
  { id: 1, title: 'Netflix Aboneliği', amount: '-$14.99', date: 'Bugün, 14:30', type: 'expense', category: 'Eğlence', icon: '🎬' },
  { id: 2, title: 'Maaş Ödemesi', amount: '+$3,250.00', date: 'Dün, 09:00', type: 'income', category: 'Maaş', icon: '💼' },
  { id: 3, title: 'Starbucks', amount: '-$4.50', date: '26 Haz, 08:15', type: 'expense', category: 'Gıda', icon: '☕' },
  { id: 4, title: 'Kira Ödemesi', amount: '-$850.00', date: '25 Haz, 10:00', type: 'expense', category: 'Konut', icon: '🏠' },
  { id: 5, title: 'Serbest Çalışma', amount: '+$450.00', date: '22 Haz, 16:45', type: 'income', category: 'Ek Gelir', icon: '💻' },
  { id: 6, title: 'Market Alışverişi', amount: '-$85.20', date: '20 Haz, 19:20', type: 'expense', category: 'Market', icon: '🛒' },
  { id: 7, title: 'Spotify', amount: '-$9.99', date: '18 Haz, 11:11', type: 'expense', category: 'Eğlence', icon: '🎵' },
];

export default function History({ onBack }) {
  return (
    <div className="view-container">
      <header className="page-header history-header">
        <button className="icon-btn glass-panel" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h2 className="page-title">İşlem Geçmişi</h2>
        <button className="icon-btn glass-panel">
          <Filter size={20} />
        </button>
      </header>

      {/* Search Bar */}
      <div className="search-container glass-panel">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="İşlem ara..." className="search-input" />
      </div>

      {/* Monthly Summary */}
      <div className="monthly-summary">
        <div className="summary-item">
          <span className="summary-label">Gelen</span>
          <span className="summary-amount success">+$3,700.00</span>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-item">
          <span className="summary-label">Giden</span>
          <span className="summary-amount danger">-$964.68</span>
        </div>
      </div>

      {/* Transactions List */}
      <div className="history-list">
        <h3 className="month-divider">Haziran 2026</h3>
        
        {allTransactions.map(tx => (
          <div key={tx.id} className="history-item glass-panel">
            <div className="tx-icon-bg">{tx.icon}</div>
            <div className="tx-info">
              <h4>{tx.title}</h4>
              <p className="tx-meta">
                <span>{tx.date}</span>
                <span className="dot">•</span>
                <span>{tx.category}</span>
              </p>
            </div>
            <div className={`tx-amount ${tx.type}`}>
              {tx.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
