import React, { useState, useEffect } from 'react';
import './Login.css';
import { RefreshCcw, Volume2, Shield, QrCode } from 'lucide-react';

const generateCaptcha = () => Math.random().toString(36).substring(2, 7).toUpperCase();

export default function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState('bireysel');
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [currentCaptcha, setCurrentCaptcha] = useState('');
  const [isQrGenerated, setIsQrGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCurrentCaptcha(generateCaptcha());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!customerId || !password || !captcha) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    if (captcha.toUpperCase() !== currentCaptcha) {
      setError('Onay kodu hatalı.');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      // İlk deneme için belirtilen bilgiler: ilkdeneme@banka.com / admin123
      if (customerId === 'ilkdeneme@banka.com' && password === 'admin123') {
        onLogin();
      } else {
        setError('Hatalı müşteri numarası veya şifre.');
      }
    }, 1500);
  };

  return (
    <div className="vb-login-wrapper">
      <div className="vb-login-container">
        
        <div className="vb-header">
          <h2>Hoş Geldiniz</h2>
        </div>

        <div className="vb-main-content">
          {/* Sol Form Alanı */}
          <div className="vb-form-card">
            <div className="vb-tabs">
              <button 
                className={`vb-tab ${activeTab === 'bireysel' ? 'active' : ''}`}
                onClick={() => setActiveTab('bireysel')}
                type="button"
              >
                Bireysel
              </button>
              <button 
                className={`vb-tab ${activeTab === 'ticari' ? 'active' : ''}`}
                onClick={() => setActiveTab('ticari')}
                type="button"
              >
                Ticari
              </button>
            </div>

            <form onSubmit={handleLogin} className="vb-form">
              {error && <div className="vb-error">{error}</div>}
              
              <div className="vb-input-group">
                <label>Müşteri / T.C. Kimlik Numarası</label>
                <input 
                  type="text" 
                  placeholder="Müşteri / T.C. Kimlik Numaranızı Giriniz"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </div>

              <div className="vb-input-group">
                <label>Şifreniz</label>
                <input 
                  type="password" 
                  placeholder="Şifrenizi Giriniz"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="vb-forgot-password">
                <a href="#">Şifre Al</a>
              </div>

              <div className="vb-captcha-section">
                <div className="vb-input-group captcha-input">
                  <label>Onay Kodu</label>
                  <input 
                    type="text" 
                    placeholder="Onay Kodu"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                  />
                </div>
                <div className="vb-captcha-display">
                  <div className="captcha-image">
                    <span style={{ fontSize: '24px', letterSpacing: '4px', fontWeight: 'bold', fontStyle: 'italic', color: '#333' }}>
                      {currentCaptcha}
                    </span>
                  </div>
                  <div className="captcha-actions">
                    <button type="button" onClick={() => setCurrentCaptcha(generateCaptcha())} title="Yenile">
                      <RefreshCcw size={16} color="#FCB000" />
                    </button>
                    <button type="button" onClick={() => {
                      const utterance = new SpeechSynthesisUtterance(currentCaptcha.split('').join(' '));
                      utterance.lang = 'tr-TR';
                      window.speechSynthesis.speak(utterance);
                    }} title="Sesli Oku">
                      <Volume2 size={16} color="#FCB000" />
                    </button>
                  </div>
                </div>
              </div>

              <button type="submit" className="vb-submit-btn" disabled={isLoading}>
                {isLoading ? <div className="loader"></div> : 'GİRİŞ YAP'}
              </button>
            </form>
          </div>

          {/* Sağ Karekod Alanı */}
          <div className="vb-qr-card">
            <h3>Karekod İle Giriş</h3>
            <div className="qr-content">
              <p>SİNAN CAN REİS Mobil'in giriş sayfasındaki "Karekod İşlemleri"nden işleminizi gerçekleştirebilirsiniz.</p>
              <div 
                className="qr-image-placeholder" 
                onClick={() => setIsQrGenerated(true)}
                style={{ border: isQrGenerated ? 'none' : '1px dashed #ccc' }}
              >
                {isQrGenerated ? (
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SinanCanReisLoginToken123" 
                    alt="Karekod" 
                    style={{ width: 150, height: 150, borderRadius: 8 }} 
                  />
                ) : (
                  <>
                    <QrCode size={100} color="#ccc" />
                    <span className="qr-overlay-text">Karekod üretmek için tıklayınız</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Güvenlik Uyarıları */}
        <div className="vb-security-banner">
          <div className="security-header">
            <Shield size={40} color="#FCB000" className="shield-icon" />
            <div className="ssl-badge">
              <span>SSL Secure</span>
            </div>
          </div>
          <div className="security-content">
            <h4>Güvenlik Uyarıları</h4>
            <ul>
              <li>SİNAN CAN REİS hiçbir zaman İnternet Şubesi girişinde müşterilerinin cep telefonu numarası, markası, modeli gibi bilgileri istememektedir. Bu tür şüpheli ekranlar ile karşılaştığınızda işleminizi durdurarak hemen 0850 222 0 724 Müşteri İletişim Merkezini arayınız ya da şubenize başvurunuz. Güvenlik uyarılarını okumak için lütfen <strong>tıklayınız.</strong></li>
              <li>Dijital Kanallarda güvenliğiniz için güncel bir antivirüs programı kullanınız.</li>
              <li>Bir sonraki sayfada Ad Soyad bilgilerinizi göreceksiniz. Bilgilerinizi göremezseniz tek kullanımlık şifrenizi girmeyiniz ve hemen 0850 222 0 724 Müşteri İletişim Merkezini arayınız ya da şubenize başvurunuz.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="vb-footer">
          <p>© 2026 SİNAN CAN REİS</p>
          <div className="footer-links">
            <a href="#">İşlem Listesi</a>
            <a href="#">Planlı Kesinti ve Duyurular</a>
            <a href="#">İletişim</a>
          </div>
        </div>

      </div>
    </div>
  );
}
