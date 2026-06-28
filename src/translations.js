export const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.transfer': 'Transfer',
    'nav.history': 'Geçmiş',
    'nav.profile': 'Profil',
    
    // Login
    'login.individual': 'Bireysel',
    'login.corporate': 'Ticari',
    'login.customerId': 'Müşteri / T.C. Kimlik No',
    'login.password': 'Şifre',
    'login.captcha': 'Onay Kodu',
    'login.loginBtn': 'GİRİŞ YAP',
    'login.qrTitle': 'Karekod ile Giriş',
    'login.qrDesc': 'SİNAN CAN REİS Mobil\'in giriş sayfasındaki "Karekod İşlemleri"nden işleminizi gerçekleştirebilirsiniz.',
    'login.qrClick': '(Karekod üretmek için tıklayınız)',
    'login.captchaError': 'Onay kodu hatalı!',
    'login.fillAllFields': 'Lütfen tüm alanları doldurun.',
    'login.invalidCredentials': 'Hatalı müşteri numarası veya şifre.',
    'login.welcome': 'Hoş Geldiniz',
    
    // Security Banner
    'security.title': 'Güvenlik Uyarıları',
    'security.warning1': 'SİNAN CAN REİS hiçbir zaman İnternet Şubesi girişinde müşterilerinin cep telefonu numarası, markası, modeli gibi bilgileri istememektedir. Bu tür şüpheli ekranlar ile karşılaştığınızda işleminizi durdurarak hemen 0850 222 0 724 Müşteri İletişim Merkezini arayınız ya da şubenize başvurunuz.',
    'security.warning2': 'Dijital Kanallarda güvenliğiniz için güncel bir antivirüs programı kullanınız.',
    'security.warning3': 'Bir sonraki sayfada Ad Soyad bilgilerinizi göreceksiniz. Bilgilerinizi göremezseniz tek kullanımlık şifrenizi girmeyiniz ve hemen 0850 222 0 724 Müşteri İletişim Merkezini arayınız ya da şubenize başvurunuz.',
    
    // Footer
    'footer.processList': 'İşlem Listesi',
    'footer.announcements': 'Planlı Kesinti ve Duyurular',
    'footer.security': 'Güvenlik',
    'footer.contracts': 'Sözleşmeler',
    
    // Dashboard
    'dash.greeting': 'Günaydın',
    'dash.totalAssets': 'Toplam Varlıklarım',
    'dash.checkingAcc': 'Vadesiz Hesap',
    'dash.investAcc': 'Yatırım Hesabı',
    'dash.quickActions': 'Hızlı İşlemler',
    'dash.newTransfer': 'Yeni Transfer',
    'dash.payBill': 'Fatura Öde',
    'dash.payQR': 'QR ile Öde',
    'dash.send': 'Gönder',
    'dash.request': 'İste',
    'dash.qr': 'Karekod',
    'dash.all': 'Tümü',
    'dash.cards': 'Kartlarım',
    'dash.creditCard': 'Kredi Kartı',
    'dash.limit': 'Limit',
    'dash.recentTransactions': 'Son İşlemler',
    
    // Transfer
    'transfer.title': 'Para Transferi',
    'transfer.to': 'Kime',
    'transfer.recipient': 'İsim Soyisim veya IBAN',
    'transfer.amount': 'Tutar',
    'transfer.desc': 'Açıklama (İsteğe bağlı)',
    'transfer.descPlaceholder': 'Örn: Kira, Borç vb.',
    'transfer.sendBtn': 'Gönder',
    'transfer.success': 'Transfer Başarılı',
    'transfer.successMsg': 'İşleminiz başarıyla gerçekleşti.',
    'transfer.sent': 'gönderildi.',
    'transfer.quick': 'Hızlı Gönder',
    
    // History
    'history.title': 'İşlem Geçmişi',
    'history.all': 'Tümü',
    'history.incoming': 'Gelen',
    'history.outgoing': 'Giden',
    
    // Profile
    'profile.title': 'Profilim',
    'profile.edit': 'Düzenle',
    'profile.saveBtn': 'Bilgileri Kaydet',
    'profile.name': 'Ad Soyad',
    'profile.phone': 'Telefon Numarası',
    'profile.email': 'E-Posta Adresi',
    'profile.customerType': 'Bireysel Müşteri',
    'profile.accountManagement': 'Hesap Yönetimi',
    'profile.personalInfo': 'Kişisel Bilgilerim',
    'profile.security': 'Güvenlik ve Şifre',
    'profile.notifications': 'Bildirim Ayarları',
    'profile.other': 'Diğer',
    'profile.appSettings': 'Uygulama Ayarları',
    'profile.helpSupport': 'Yardım ve Destek',
    'profile.logout': 'Güvenli Çıkış Yap',
    
    // Profile - Settings
    'profile.set.title': 'Uygulama Ayarları',
    'profile.set.lang': 'Dil Seçimi',
    'profile.set.currency': 'Para Birimi Gösterimi',

    // Profile - Security
    'profile.sec.title': 'Şifre Değiştirme',
    'profile.sec.oldPass': 'Mevcut Şifre',
    'profile.sec.oldPassPlaceholder': 'Mevcut Şifrenizi Giriniz',
    'profile.sec.newPass': 'Yeni Şifre',
    'profile.sec.newPassPlaceholder': 'Yeni Şifrenizi Giriniz',
    'profile.sec.newPassConfirm': 'Yeni Şifre (Tekrar)',
    'profile.sec.newPassConfirmPlaceholder': 'Yeni Şifrenizi Tekrar Giriniz',
    'profile.sec.updateBtn': 'Şifreyi Güncelle',
    'profile.sec.wrongOld': 'Mevcut şifreniz yanlış!',
    'profile.sec.mismatch': 'Yeni şifreler eşleşmiyor!',
    'profile.sec.tooShort': 'Yeni şifre en az 6 karakter olmalıdır!',
    'profile.sec.success': 'Şifreniz başarıyla güncellendi! Yeni şifrenizle giriş yapabilirsiniz.',
    
    'profile.sec.twoFactor': 'İki Aşamalı Doğrulama',
    'profile.sec.twoFactorDesc': 'Hesabınıza giriş yaparken telefonunuza SMS gönderilerek doğrulama yapılır.',
    'profile.sec.active': 'Aktif (Kapatmak İçin Tıklayın)',
    
    'profile.notif.title': 'Bildirim Ayarları',
    'profile.notif.sms': 'SMS Bildirimleri',
    'profile.notif.email': 'E-Posta Bildirimleri',
    'profile.notif.push': 'Push (Uygulama) Bildirimleri',
    
    'profile.help.title': 'Yardım ve Destek',
    'profile.help.callCenter': 'Müşteri İletişim Merkezi',
    'profile.help.callCenterDesc': '7/24 kesintisiz hizmet vermekteyiz. Aramak için numaraya tıklayabilirsiniz.',
    'profile.help.faq': 'Sıkça Sorulan Sorular',
    'profile.help.faq1q': 'Şifremi nasıl yenileyebilirim?',
    'profile.help.faq1a': 'Şifrenizi yenilemek için giriş ekranındaki "Şifre Al" butonuna tıklayabilir veya "Güvenlik ve Şifre" menüsünden mevcut şifrenizle yeni bir şifre belirleyebilirsiniz.',
    'profile.help.faq2q': 'EFT ve Havale saatleri nelerdir?',
    'profile.help.faq2a': 'Havale işlemleri 7/24 kesintisiz olarak, EFT işlemleri ise iş günleri 09:00 - 17:00 saatleri arasında gerçekleştirilmektedir. FAST ile 7/24 para transferi yapabilirsiniz.',
    'profile.help.faq3q': 'Karekod ile nasıl para çekebilirim?',
    'profile.help.faq3a': 'ATM\'lerimizin giriş ekranında bulunan Karekod seçeneğini tuşladıktan sonra, mobil uygulamamızın "Karekod İşlemleri" menüsünden QR kodu okutarak kartsız para çekebilirsiniz.',
    'profile.help.faq4q': 'Uygulama dilini nasıl değiştirebilirim?',
    'profile.help.faq4a': '"Uygulama Ayarları" menüsüne girerek Dil Seçimi listesinden dilediğiniz dili ayarlayabilirsiniz.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.transfer': 'Transfer',
    'nav.history': 'History',
    'nav.profile': 'Profile',
    
    // Login
    'login.individual': 'Personal',
    'login.corporate': 'Corporate',
    'login.customerId': 'Customer / ID Number',
    'login.password': 'Password',
    'login.captcha': 'Verification Code',
    'login.loginBtn': 'LOGIN',
    'login.qrTitle': 'Login with QR Code',
    'login.qrDesc': 'You can perform your transaction from the "QR Code Transactions" menu on the login page of SINAN CAN REIS Mobile.',
    'login.qrClick': '(Click to generate QR code)',
    'login.captchaError': 'Invalid verification code!',
    'login.fillAllFields': 'Please fill all fields.',
    'login.invalidCredentials': 'Invalid customer number or password.',
    'login.welcome': 'Welcome',
    
    // Security Banner
    'security.title': 'Security Warnings',
    'security.warning1': 'SINAN CAN REIS never asks for customer details like mobile phone number, brand, model at the Internet Branch login. If you encounter such suspicious screens, stop your transaction and immediately call 0850 222 0 724 Customer Contact Center or apply to your branch.',
    'security.warning2': 'Use an up-to-date antivirus program for your security on Digital Channels.',
    'security.warning3': 'You will see your Name Surname information on the next page. If you do not see your information, do not enter your one-time password and immediately call 0850 222 0 724 Customer Contact Center.',
    
    // Footer
    'footer.processList': 'Transaction List',
    'footer.announcements': 'Planned Outages and Announcements',
    'footer.security': 'Security',
    'footer.contracts': 'Contracts',
    
    // Dashboard
    'dash.greeting': 'Good morning',
    'dash.totalAssets': 'Total Assets',
    'dash.checkingAcc': 'Checking Account',
    'dash.investAcc': 'Investment Account',
    'dash.quickActions': 'Quick Actions',
    'dash.newTransfer': 'New Transfer',
    'dash.payBill': 'Pay Bill',
    'dash.payQR': 'Pay with QR',
    'dash.send': 'Send',
    'dash.request': 'Request',
    'dash.qr': 'QR Code',
    'dash.all': 'See All',
    'dash.cards': 'My Cards',
    'dash.creditCard': 'Credit Card',
    'dash.limit': 'Limit',
    'dash.recentTransactions': 'Recent Transactions',
    
    // Transfer
    'transfer.title': 'Money Transfer',
    'transfer.to': 'To',
    'transfer.recipient': 'Name Surname or IBAN',
    'transfer.amount': 'Amount',
    'transfer.desc': 'Description (Optional)',
    'transfer.descPlaceholder': 'e.g. Rent, Debt etc.',
    'transfer.sendBtn': 'Send',
    'transfer.success': 'Transfer Successful',
    'transfer.successMsg': 'Your transaction was completed successfully.',
    'transfer.sent': 'sent.',
    'transfer.quick': 'Quick Send',
    
    // History
    'history.title': 'Transaction History',
    'history.all': 'All',
    'history.incoming': 'Incoming',
    'history.outgoing': 'Outgoing',
    
    // Profile
    'profile.title': 'My Profile',
    'profile.edit': 'Edit',
    'profile.saveBtn': 'Save Information',
    'profile.name': 'Full Name',
    'profile.phone': 'Phone Number',
    'profile.email': 'Email Address',
    'profile.customerType': 'Personal Customer',
    'profile.accountManagement': 'Account Management',
    'profile.personalInfo': 'Personal Information',
    'profile.security': 'Security & Password',
    'profile.notifications': 'Notification Settings',
    'profile.other': 'Other',
    'profile.appSettings': 'App Settings',
    'profile.helpSupport': 'Help & Support',
    'profile.logout': 'Secure Logout',
    
    // Profile - Settings
    'profile.set.title': 'Application Settings',
    'profile.set.lang': 'Language Selection',
    'profile.set.currency': 'Currency Display',

    // Profile - Security
    'profile.sec.title': 'Change Password',
    'profile.sec.oldPass': 'Current Password',
    'profile.sec.oldPassPlaceholder': 'Enter Current Password',
    'profile.sec.newPass': 'New Password',
    'profile.sec.newPassPlaceholder': 'Enter New Password',
    'profile.sec.newPassConfirm': 'Confirm New Password',
    'profile.sec.newPassConfirmPlaceholder': 'Re-enter New Password',
    'profile.sec.updateBtn': 'Update Password',
    'profile.sec.wrongOld': 'Current password is incorrect!',
    'profile.sec.mismatch': 'New passwords do not match!',
    'profile.sec.tooShort': 'New password must be at least 6 characters long!',
    'profile.sec.success': 'Your password has been successfully updated! You can log in with your new password.',
    
    'profile.sec.twoFactor': 'Two-Factor Authentication',
    'profile.sec.twoFactorDesc': 'Verification is done by sending an SMS to your phone when logging into your account.',
    'profile.sec.active': 'Active (Click to Turn Off)',
    
    'profile.notif.title': 'Notification Settings',
    'profile.notif.sms': 'SMS Notifications',
    'profile.notif.email': 'Email Notifications',
    'profile.notif.push': 'Push (App) Notifications',
    
    'profile.set.title': 'App Settings',
    'profile.set.lang': 'Language Selection',
    'profile.set.currency': 'Currency Display',
    
    'profile.help.title': 'Help & Support',
    'profile.help.callCenter': 'Customer Contact Center',
    'profile.help.callCenterDesc': 'We provide 24/7 uninterrupted service. You can click on the number to call.',
    'profile.help.faq': 'Frequently Asked Questions',
    'profile.help.faq1q': 'How can I reset my password?',
    'profile.help.faq1a': 'To reset your password, you can click the "Get Password" button on the login screen or set a new password with your current password from the "Security & Password" menu.',
    'profile.help.faq2q': 'What are the EFT and Wire Transfer hours?',
    'profile.help.faq2a': 'Wire transfers are carried out 24/7 without interruption, while EFT transactions are carried out on business days between 09:00 - 17:00. You can transfer money 24/7 with FAST.',
    'profile.help.faq3q': 'How can I withdraw money with QR code?',
    'profile.help.faq3a': 'After tapping the QR Code option on the login screen of our ATMs, you can withdraw money without a card by scanning the QR code from the "QR Code Transactions" menu of our mobile app.',
    'profile.help.faq4q': 'How can I change the app language?',
    'profile.help.faq4a': 'You can set the language you want from the Language Selection list by entering the "App Settings" menu.'
  }
};
