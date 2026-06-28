import React, { useState } from 'react';
import { ChevronLeft, Filter, Search } from 'lucide-react';
import './History.css';
import { useLanguage } from '../LanguageContext';

const allTransactions = [
  { id: 1, title: 'Netflix Aboneliği', amountTRY: -450, date: 'Bugün, 14:30', type: 'expense', category: 'Eğlence', icon: '🎬' },
  { id: 2, title: 'Maaş Ödemesi', amountTRY: 32500, date: 'Dün, 09:00', type: 'income', category: 'Maaş', icon: '💼' },
  { id: 3, title: 'Starbucks', amountTRY: -150, date: '26 Haz, 08:15', type: 'expense', category: 'Yeme İçme', icon: '☕' },
  { id: 4, title: 'Amazon', amountTRY: -1250, date: '25 Haz, 16:45', type: 'expense', category: 'Alışveriş', icon: '🛒' },
  { id: 5, title: 'Kira Ödemesi', amountTRY: -15000, date: '20 Haz, 10:00', type: 'expense', category: 'Ev', icon: '🏠' },
];

export default function History({ onBack }) {
  const { t, formatCurrency } = useLanguage();
  const [filter, setFilter] = useState('all');

  return (
    <div className="view-container">
      <header className="page-header history-header">
        <button className="icon-btn glass-panel" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h2 className="page-title">{t('history.title')}</h2>
        <button className="icon-btn glass-panel">
          <Filter size={20} />
        </button>
      </header>

      {/* Search Bar */}
      <div className="search-container glass-panel">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder={t('history.searchPlaceholder')} className="search-input" />
      </div>

      {/* Filters */}
      <div className="history-filters glass-panel">
        <button 
          type="button"
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {t('history.all')}
        </button>
        <button 
          type="button"
          className={`filter-btn ${filter === 'income' ? 'active' : ''}`}
          onClick={() => setFilter('income')}
        >
          {t('history.incoming')}
        </button>
        <button 
          type="button"
          className={`filter-btn ${filter === 'expense' ? 'active' : ''}`}
          onClick={() => setFilter('expense')}
        >
          {t('history.outgoing')}
        </button>
      </div>

      {/* Monthly Summary */}
      <div className="history-summary glass-panel">
        <div className="summary-item">
          <span className="summary-label">{t('history.incoming')}</span>
          <span className="summary-amount success">+{formatCurrency(32500)}</span>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-item">
          <span className="summary-label">{t('history.outgoing')}</span>
          <span className="summary-amount danger">{formatCurrency(-16850)}</span>
        </div>
      </div>

      {/* Transactions List */}
      <div className="history-list">
        <h3 className="month-divider">{t('history.june2026')}</h3>
        
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
              {tx.amountTRY > 0 ? '+' : ''}{formatCurrency(tx.amountTRY)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
