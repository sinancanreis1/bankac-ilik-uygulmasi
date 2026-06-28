import React, { useState, useEffect } from 'react';
import './Login.css';
import { RefreshCcw, Volume2, Shield, QrCode } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const generateCaptcha = () => Math.random().toString(36).substring(2, 7).toUpperCase();

export default function Login({ onLogin }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('bireysel');
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [showQr, setShowQr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCaptchaValue(generateCaptcha());
  }, []);

  const handleCaptchaRefresh = () => {
    setCaptchaValue(generateCaptcha());
  };

  const handleCaptchaAudio = () => {
    const utterance = new SpeechSynthesisUtterance(captchaValue.split('').join(' '));
    utterance.lang = 'tr-TR';
    window.speechSynthesis.speak(utterance);
  };

  const handleQrClick = () => {
    setShowQr(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!customerId || !password || !captchaInput) {
      setError(t('login.fillAllFields'));
      return;
    }

    if (captchaInput.toUpperCase() !== captchaValue) {
      setError(t('login.captchaError'));
      setCaptchaValue(generateCaptcha());
      setCaptchaInput('');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
      const savedUserInfo = localStorage.getItem('bankAppUserInfo');
      const validEmail = savedUserInfo ? JSON.parse(savedUserInfo).email : 'ilkdeneme@banka.com';
      const validPassword = localStorage.getItem('bankAppPassword') || 'admin123';

      if (customerId.trim().toLowerCase() === validEmail.trim().toLowerCase() && password === validPassword) {
        onLogin();
      } else {
        setError(t('login.invalidCredentials'));
      }
    }, 1500);
  };

  return (
    <div className="vb-login-wrapper">
      <div className="vb-login-container">
        
        <div className="vb-header">
          <h2>{t('login.welcome')}</h2>
        </div>

        <div className="vb-main-content">
          <div className="vb-form-card">
            <div className="vb-tabs">
              <button 
                type="button"
                className={`vb-tab ${activeTab === 'bireysel' ? 'active' : ''}`}
                onClick={() => setActiveTab('bireysel')}
              >
                {t('login.individual')}
              </button>
              <button 
                type="button"
                className={`vb-tab ${activeTab === 'ticari' ? 'active' : ''}`}
                onClick={() => setActiveTab('ticari')}
              >
                {t('login.corporate')}
              </button>
            </div>

            <form onSubmit={handleLogin} className="vb-form">
              {error && <div className="vb-error">{error}</div>}
              
              <div className="vb-input-group">
                <label>{t('login.customerId')}</label>
                <input 
                  type="text" 
                  placeholder={t('login.customerId')}
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </div>

              <div className="vb-input-group">
                <label>{t('login.password')}</label>
                <input 
                  type="password" 
                  placeholder={t('login.password')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="vb-forgot-password">
                <a href="#">Şifre Al</a>
              </div>

              <div className="vb-captcha-section">
                <div className="vb-input-group captcha-input">
                  <label>{t('login.captcha')}</label>
                  <input 
                    type="text" 
                    placeholder={t('login.captcha')}
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                  />
                </div>
                <div className="vb-captcha-display">
                  <div className="captcha-image">
                    <span style={{ fontSize: '24px', letterSpacing: '4px', fontWeight: 'bold', fontStyle: 'italic', color: '#333' }}>
                      {captchaValue}
                    </span>
                  </div>
                  <div className="captcha-actions">
                    <button type="button" onClick={handleCaptchaRefresh} title="Yenile">
                      <RefreshCcw size={16} color="#FCB000" />
                    </button>
                    <button type="button" onClick={handleCaptchaAudio} title="Sesli Oku">
                      <Volume2 size={16} color="#FCB000" />
                    </button>
                  </div>
                </div>
              </div>

              <button type="submit" className="vb-submit-btn" disabled={isLoading}>
                {isLoading ? <div className="loader"></div> : t('login.loginBtn')}
              </button>
            </form>
          </div>

          <div className="vb-qr-card">
            <h3>{t('login.qrTitle')}</h3>
            <div className="qr-content">
              <p>{t('login.qrDesc')}</p>
              <div 
                className="qr-image-placeholder" 
                onClick={handleQrClick}
                style={{ border: showQr ? 'none' : '1px dashed #ccc' }}
              >
                {showQr ? (
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VakifbankApp-${Math.random()}`} 
                    alt="Karekod" 
                    style={{ width: 150, height: 150, borderRadius: 8 }} 
                  />
                ) : (
                  <>
                    <QrCode size={100} color="#ccc" />
                    <span className="qr-overlay-text">{t('login.qrClick')}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="vb-security-banner">
          <div className="security-header">
            <Shield size={40} color="#FCB000" className="shield-icon" />
            <div className="ssl-badge">
              <span>SSL Secure</span>
            </div>
          </div>
          <div className="security-content">
            <h4>{t('security.title')}</h4>
            <ul>
              <li>{t('security.warning1')}</li>
              <li>{t('security.warning2')}</li>
              <li>{t('security.warning3')}</li>
            </ul>
          </div>
        </div>

        <div className="vb-footer">
          <p>© 2026 SİNAN CAN REİS</p>
          <div className="footer-links">
            <a href="#">{t('footer.processList')}</a>
            <a href="#">{t('footer.announcements')}</a>
            <a href="#">{t('footer.security')}</a>
            <a href="#">{t('footer.contracts')}</a>
          </div>
        </div>

      </div>
    </div>
  );
}
