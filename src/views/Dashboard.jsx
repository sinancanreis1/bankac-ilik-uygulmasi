import React from 'react';
import { ArrowUpRight, ArrowDownLeft, QrCode, CreditCard, Bell, ChevronRight } from 'lucide-react';
import './Dashboard.css';
import { useLanguage } from '../LanguageContext';

const transactions = [
  { id: 1, title: 'Netflix Aboneliği', amountTRY: -450, date: 'Bugün, 14:30', type: 'expense', icon: '🎬' },
  { id: 2, title: 'Maaş Ödemesi', amountTRY: 32500, date: 'Dün, 09:00', type: 'income', icon: '💼' },
  { id: 3, title: 'Starbucks', amountTRY: -150, date: '26 Haz, 08:15', type: 'expense', icon: '☕' },
];

export default function Dashboard({ onViewChange }) {
  const { t, formatCurrency } = useLanguage();
  return (
    <div className="view-container dashboard">
      <header className="page-header">
        <div>
          <p className="greeting">{t('dash.greeting')},</p>
          <h1 className="user-name">Sinan 👋</h1>
        </div>
        <button className="icon-btn glass-panel">
          <Bell size={20} />
          <span className="badge"></span>
        </button>
      </header>

      {/* Balance Card */}
      <div className="balance-card glass-panel">
          <div className="balance-info">
            <span className="balance-label">{t('dash.totalAssets')}</span>
            <h2 className="balance-amount">{formatCurrency(124500)}</h2>
            <div className="balance-accounts">
              <div className="account-pill">
                <span className="acc-type">{t('dash.checkingAcc')}: </span>
                <span className="acc-amt">{formatCurrency(24500)}</span>
              </div>
              <div className="account-pill">
                <span className="acc-type">{t('dash.investAcc')}: </span>
                <span className="acc-amt">{formatCurrency(100000)}</span>
              </div>
            </div>
          </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-btn" onClick={() => onViewChange('transfer')}>
          <div className="icon-wrapper send">
            <ArrowUpRight size={24} />
          </div>
          <span>{t('dash.send')}</span>
        </button>
        <button className="action-btn">
          <div className="icon-wrapper receive">
            <ArrowDownLeft size={24} />
          </div>
          <span>{t('dash.request')}</span>
        </button>
        <button className="action-btn">
          <div className="icon-wrapper scan">
            <QrCode size={24} />
          </div>
          <span>{t('dash.qr')}</span>
        </button>
        <button className="action-btn">
          <div className="icon-wrapper cards">
            <CreditCard size={24} />
          </div>
          <span>{t('dash.cards')}</span>
        </button>
      </div>

      {/* My Cards */}
      <section className="dashboard-section">
        <div className="section-header">
          <h3 className="section-title">{t('dash.cards')}</h3>
          <button type="button" className="view-all-btn">{t('dash.all')} <ChevronRight size={16}/></button>
        </div>
        <div className="card-item glass-panel">
          <div className="card-icon-wrapper">
            <CreditCard size={24} className="text-primary" />
          </div>
          <div className="card-info">
            <h4>{t('dash.creditCard')}</h4>
            <p>**** 4231</p>
          </div>
          <div className="card-balance">
            <span className="limit-label">{t('dash.limit')} </span>
            <span className="limit-amount">{formatCurrency(50000)}</span>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <div className="transactions-section">
        <div className="section-header">
          <h3>{t('dash.recentTransactions')}</h3>
          <button className="see-all text-gradient" onClick={() => onViewChange('history')}>{t('dash.all')}</button>
        </div>
        
        <div className="transactions-list">
          {transactions.map(tx => (
            <div key={tx.id} className="transaction-item glass-panel">
              <div className="tx-icon-bg">{tx.icon}</div>
              <div className="tx-details">
                <h4>{tx.title}</h4>
                <p>{tx.date}</p>
              </div>
              <div className={`tx-amount ${tx.type}`}>
                {tx.amountTRY > 0 ? '+' : ''}{formatCurrency(tx.amountTRY)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
