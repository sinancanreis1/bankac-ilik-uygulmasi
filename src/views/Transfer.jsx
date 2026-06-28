import React, { useState } from 'react';
import { ChevronLeft, SendHorizontal } from 'lucide-react';
import './Transfer.css';

const recentContacts = [
  { id: 1, name: 'Ayşe Y.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, name: 'Mehmet K.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, name: 'Zeynep A.', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
  { id: 4, name: 'Burak T.', avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
];

export default function Transfer({ onBack }) {
  const [amount, setAmount] = useState('');
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
        <h2>Transfer Başarılı!</h2>
        <p>${amount} gönderildi.</p>
      </div>
    );
  }

  return (
    <div className="view-container">
      <header className="page-header">
        <button className="icon-btn glass-panel" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h2 className="page-title">Para Gönder</h2>
        <div style={{ width: 44 }}></div> {/* Spacer for alignment */}
      </header>

      {/* Recent Contacts */}
      <div className="contacts-section">
        <h3 className="section-title">Hızlı Gönder</h3>
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
        <div className="amount-container">
          <span className="currency">$</span>
          <input 
            type="number" 
            className="amount-input" 
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            autoFocus
          />
        </div>

        <div className="input-group">
          <label className="input-label">Alıcı IBAN veya İsim</label>
          <input type="text" className="premium-input" placeholder="TR00 0000..." />
        </div>

        <div className="input-group">
          <label className="input-label">Açıklama (İsteğe Bağlı)</label>
          <input type="text" className="premium-input" placeholder="Kira ödemesi vb." />
        </div>

        <button type="submit" className="primary-btn">
          <span>Gönder</span>
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}
