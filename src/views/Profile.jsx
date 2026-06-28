import React, { useState, useRef, useEffect } from 'react';
import { User, Shield, Bell, Settings, LogOut, ChevronRight, HelpCircle, Edit2, Camera, ArrowLeft } from 'lucide-react';
import './Profile.css';

export default function Profile({ onLogout }) {
  const [activeSection, setActiveSection] = useState('main');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('bankAppUserInfo');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      name: 'SİNAN CAN REİS',
      email: 'ilkdeneme@banka.com',
      phone: '0555 123 45 67',
      avatar: 'https://i.pravatar.cc/150?u=sinancanreis'
    };
  });

  useEffect(() => {
    localStorage.setItem('bankAppUserInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const fileInputRef = useRef(null);

  const handleSave = (e) => {
    if (e) e.preventDefault();
    setIsEditing(false);
    // Gerçek bir senaryoda bu veriler veritabanına veya localStorage'a kaydedilir.
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({ ...userInfo, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (e) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const renderMainProfile = () => (
    <>
      <header className="page-header profile-header">
        <h2 className="page-title">Profilim</h2>
      </header>

      <div className="profile-user-card glass-panel">
        <div className="profile-avatar-wrapper">
          <img src={userInfo.avatar} alt="Profile" className="profile-avatar-img" />
          {isEditing && (
            <>
              <button type="button" className="edit-avatar-btn" onClick={triggerFileInput}>
                <Camera size={14} color="white" />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </>
          )}
        </div>
        
        <div className="profile-details">
          {isEditing ? (
            <div className="edit-form">
              <label>Ad Soyad</label>
              <input 
                type="text" 
                value={userInfo.name} 
                onChange={e => setUserInfo({...userInfo, name: e.target.value})}
                className="profile-input"
              />
              <label>Telefon Numarası</label>
              <input 
                type="tel" 
                value={userInfo.phone} 
                onChange={e => setUserInfo({...userInfo, phone: e.target.value})}
                className="profile-input"
              />
              <label>E-Posta Adresi</label>
              <input 
                type="email" 
                value={userInfo.email} 
                onChange={e => setUserInfo({...userInfo, email: e.target.value})}
                className="profile-input"
              />
              <button type="button" onClick={handleSave} className="save-btn">Bilgileri Kaydet</button>
            </div>
          ) : (
            <>
              <h3>{userInfo.name}</h3>
              <p>{userInfo.phone}</p>
              <p className="email-text">{userInfo.email}</p>
              <span className="badge-premium">Bireysel Müşteri</span>
            </>
          )}
        </div>

        {!isEditing && (
          <button type="button" className="edit-profile-btn" onClick={() => setIsEditing(true)}>
            <Edit2 size={18} />
          </button>
        )}
      </div>

      <div className="profile-menu">
        <div className="menu-group-title">Hesap Yönetimi</div>
        <div className="menu-list glass-panel">
          <button type="button" className="menu-item" onClick={() => setIsEditing(true)}>
            <div className="menu-icon-wrapper"><User size={20} /></div>
            <span>Kişisel Bilgilerim</span>
            <ChevronRight size={20} className="menu-chevron" />
          </button>
          <button type="button" className="menu-item" onClick={() => setActiveSection('security')}>
            <div className="menu-icon-wrapper"><Shield size={20} /></div>
            <span>Güvenlik ve Şifre</span>
            <ChevronRight size={20} className="menu-chevron" />
          </button>
          <button type="button" className="menu-item" onClick={() => setActiveSection('notifications')}>
            <div className="menu-icon-wrapper"><Bell size={20} /></div>
            <span>Bildirim Ayarları</span>
            <ChevronRight size={20} className="menu-chevron" />
          </button>
        </div>

        <div className="menu-group-title">Diğer</div>
        <div className="menu-list glass-panel">
          <button type="button" className="menu-item" onClick={() => setActiveSection('settings')}>
            <div className="menu-icon-wrapper"><Settings size={20} /></div>
            <span>Uygulama Ayarları</span>
            <ChevronRight size={20} className="menu-chevron" />
          </button>
          <button type="button" className="menu-item" onClick={() => setActiveSection('help')}>
            <div className="menu-icon-wrapper"><HelpCircle size={20} /></div>
            <span>Yardım ve Destek</span>
            <ChevronRight size={20} className="menu-chevron" />
          </button>
        </div>
      </div>

      <button type="button" className="logout-btn glass-panel" onClick={onLogout}>
        <LogOut size={20} />
        <span>Güvenli Çıkış Yap</span>
      </button>

      <div className="app-version">
        <p>SİNAN CAN REİS Mobil App v1.0.0</p>
      </div>
    </>
  );

  const renderSecurity = () => (
    <div className="sub-section-container">
      <header className="page-header">
        <button type="button" className="back-btn" onClick={() => setActiveSection('main')}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="page-title">Güvenlik ve Şifre</h2>
        <div style={{width: 24}}></div>
      </header>
      <div className="glass-panel p-4">
        <h3 className="mb-3 text-lg font-semibold">Şifre Değiştirme</h3>
        <div className="edit-form mt-4">
          <label>Mevcut Şifre</label>
          <input type="password" placeholder="Mevcut Şifrenizi Giriniz" className="profile-input" />
          <label className="mt-2">Yeni Şifre</label>
          <input type="password" placeholder="Yeni Şifrenizi Giriniz" className="profile-input" />
          <label className="mt-2">Yeni Şifre (Tekrar)</label>
          <input type="password" placeholder="Yeni Şifrenizi Tekrar Giriniz" className="profile-input" />
          <button type="button" className="save-btn mt-4" onClick={() => alert('Şifreniz güncellendi!')}>Şifreyi Güncelle</button>
        </div>
      </div>
      <div className="glass-panel p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">İki Aşamalı Doğrulama</h3>
        <p className="text-sm text-gray-500 mb-4">Hesabınıza giriş yaparken telefonunuza SMS gönderilerek doğrulama yapılır.</p>
        <button type="button" className="save-btn" style={{background: '#007940'}}>Aktif (Kapatmak İçin Tıklayın)</button>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="sub-section-container">
      <header className="page-header">
        <button type="button" className="back-btn" onClick={() => setActiveSection('main')}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="page-title">Bildirim Ayarları</h2>
        <div style={{width: 24}}></div>
      </header>
      <div className="glass-panel p-4">
        <div className="menu-item" style={{border: 'none'}}>
          <span>SMS Bildirimleri</span>
          <input type="checkbox" defaultChecked className="toggle-switch" />
        </div>
        <hr className="my-2" style={{borderColor: '#eee'}} />
        <div className="menu-item" style={{border: 'none'}}>
          <span>E-Posta Bildirimleri</span>
          <input type="checkbox" defaultChecked className="toggle-switch" />
        </div>
        <hr className="my-2" style={{borderColor: '#eee'}} />
        <div className="menu-item" style={{border: 'none'}}>
          <span>Push (Uygulama) Bildirimleri</span>
          <input type="checkbox" defaultChecked className="toggle-switch" />
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="sub-section-container">
      <header className="page-header">
        <button type="button" className="back-btn" onClick={() => setActiveSection('main')}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="page-title">Uygulama Ayarları</h2>
        <div style={{width: 24}}></div>
      </header>
      <div className="glass-panel p-4">
        <div className="edit-form">
          <label>Dil Seçimi</label>
          <select className="profile-input">
            <option>Türkçe</option>
            <option>English</option>
          </select>
          <label className="mt-4">Para Birimi Gösterimi</label>
          <select className="profile-input">
            <option>TRY (₺)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderHelp = () => (
    <div className="sub-section-container pb-8">
      <header className="page-header">
        <button type="button" className="back-btn" onClick={() => setActiveSection('main')}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="page-title">Yardım ve Destek</h2>
        <div style={{width: 24}}></div>
      </header>
      <div className="glass-panel p-4 mb-4 text-center">
        <Shield size={40} color="#007940" style={{margin: '0 auto 10px'}} />
        <h3 className="text-lg font-bold">Müşteri İletişim Merkezi</h3>
        <a href="tel:08502220724" className="text-xl font-bold mt-2 text-primary" style={{display: 'block', textDecoration: 'none'}}>0850 222 0 724</a>
        <p className="text-sm text-gray-500 mt-2">7/24 kesintisiz hizmet vermekteyiz. Aramak için numaraya tıklayabilirsiniz.</p>
      </div>
      <div className="glass-panel p-4">
        <h4 className="font-semibold mb-3">Sıkça Sorulan Sorular</h4>
        
        <details className="faq-item">
          <summary className="faq-question">Şifremi nasıl yenileyebilirim?</summary>
          <div className="faq-answer">
            Şifrenizi yenilemek için giriş ekranındaki "Şifre Al" butonuna tıklayabilir veya "Güvenlik ve Şifre" menüsünden mevcut şifrenizle yeni bir şifre belirleyebilirsiniz.
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">EFT ve Havale saatleri nelerdir?</summary>
          <div className="faq-answer">
            Havale işlemleri 7/24 kesintisiz olarak, EFT işlemleri ise iş günleri 09:00 - 17:00 saatleri arasında gerçekleştirilmektedir. FAST ile 7/24 para transferi yapabilirsiniz.
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">Karekod ile nasıl para çekebilirim?</summary>
          <div className="faq-answer">
            ATM'lerimizin giriş ekranında bulunan Karekod seçeneğini tuşladıktan sonra, mobil uygulamamızın "Karekod İşlemleri" menüsünden QR kodu okutarak kartsız para çekebilirsiniz.
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">Uygulama dilini nasıl değiştirebilirim?</summary>
          <div className="faq-answer">
            "Uygulama Ayarları" menüsüne girerek Dil Seçimi listesinden dilediğiniz dili ayarlayabilirsiniz.
          </div>
        </details>
      </div>
    </div>
  );

  return (
    <div className="view-container">
      {activeSection === 'main' && renderMainProfile()}
      {activeSection === 'security' && renderSecurity()}
      {activeSection === 'notifications' && renderNotifications()}
      {activeSection === 'settings' && renderSettings()}
      {activeSection === 'help' && renderHelp()}
    </div>
  );
}
