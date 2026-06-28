import React, { useState } from 'react';
import { ArrowLeft, Search, SendHorizontal } from 'lucide-react';
import './Transfer.css';
import { useLanguage } from '../LanguageContext';

const recentContacts = [
  { id: 1, name: 'Ayşe Y.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, name: 'Mehmet K.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, name: 'Zeynep A.', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
  { id: 4, name: 'Burak T.', avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
];

export default function Transfer({ onBack }) {
  const { t, formatCurrency, currency } = useLanguage();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [desc, setDesc] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!amount) return;
    
    // Simulate API call
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onBack();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="view-container success-view">
        <div className="success-icon">✓</div>
        <h2>{t('transfer.success')}</h2>
        <p>{formatCurrency(amount)} {t('transfer.sent')}</p>
      </div>
    );
  }

  return (
    <div className="view-container transfer-view">
      <header className="page-header transfer-header">
        <button type="button" className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="page-title">{t('transfer.title')}</h2>
        <div style={{ width: 24 }}></div>
      </header>

      {/* Recent Contacts */}
      <div className="contacts-section">
        <h3 className="section-title">{t('transfer.quick')}</h3>
        <div className="contacts-list">
          <div className="contact-item add-new glass-panel">
            <span>+</span>
          </div>
          {recentContacts.map(contact => (
            <div key={contact.id} className="contact-item">
              <img src={contact.avatar} alt={contact.name} className="avatar" />
              <span className="contact-name">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transfer Form */}
      <form onSubmit={handleTransfer} className="transfer-form glass-panel">
        <div className="form-group">
          <label>{t('transfer.to')}</label>
          <div className="input-with-icon">
            <Search size={20} className="input-icon" />
            <input 
              type="text" 
              className="transfer-input"
              placeholder={t('transfer.recipient')}
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>{t('transfer.amount')}</label>
          <div className="amount-container">
            <span className="currency">{currency === 'USD ($)' ? '$' : currency === 'EUR (€)' ? '€' : '₺'}</span>
            <input 
              type="number" 
              className="amount-input"
              placeholder="0.00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>{t('transfer.desc')}</label>
          <input 
            type="text" 
            className="transfer-input"
            placeholder={t('transfer.descPlaceholder')}
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          <span>{t('transfer.sendBtn')}</span>
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}
