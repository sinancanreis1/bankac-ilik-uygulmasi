import React from 'react';
import { ArrowUpRight, ArrowDownLeft, QrCode, CreditCard, Bell } from 'lucide-react';
import './Dashboard.css';

const transactions = [
  { id: 1, title: 'Netflix Aboneliği', amount: '-$14.99', date: 'Bugün, 14:30', type: 'expense', icon: '🎬' },
  { id: 2, title: 'Maaş Ödemesi', amount: '+$3,250.00', date: 'Dün, 09:00', type: 'income', icon: '💼' },
  { id: 3, title: 'Starbucks', amount: '-$4.50', date: '26 Haz, 08:15', type: 'expense', icon: '☕' },
];

export default function Dashboard({ onViewChange }) {
  return (
    <div className="view-container dashboard">
      <header className="page-header">
        <div>
          <p className="greeting">Günaydın,</p>
          <h1 className="user-name">Sinan 👋</h1>
        </div>
        <button className="icon-btn glass-panel">
          <Bell size={20} />
          <span className="badge"></span>
        </button>
      </header>

      {/* Balance Card */}
      <div className="balance-card glass-panel">
        <p className="balance-label">Toplam Bakiye</p>
        <h2 className="balance-amount">$12,450.<span className="cents">75</span></h2>
        
        <div className="card-footer">
          <p className="card-number">**** **** **** 1234</p>
          <div className="card-logo">VISA</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-btn" onClick={() => onViewChange('transfer')}>
          <div className="icon-wrapper send">
            <ArrowUpRight size={24} />
          </div>
          <span>Gönder</span>
        </button>
        <button className="action-btn">
          <div className="icon-wrapper receive">
            <ArrowDownLeft size={24} />
          </div>
          <span>İste</span>
        </button>
        <button className="action-btn">
          <div className="icon-wrapper scan">
            <QrCode size={24} />
          </div>
          <span>Karekod</span>
        </button>
        <button className="action-btn">
          <div className="icon-wrapper cards">
            <CreditCard size={24} />
          </div>
          <span>Kartlar</span>
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="transactions-section">
        <div className="section-header">
          <h3>Son İşlemler</h3>
          <button className="see-all text-gradient" onClick={() => onViewChange('history')}>Tümü</button>
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
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
