import React from 'react';
import './i18n';  // Importing i18n configuration
import { useTranslation } from 'react-i18next';

// Web Components
import DesktopHeader from './components/web/Header';
import DesktopFooter from './components/web/Footer';

// Mobile Components
import MobileHeader from './components/mobile/Header';
import MobileFooter from './components/mobile/Footer';

// Web Screens
import DesktopHero from './screens/web/Hero';
import DesktopAboutUs from './screens/web/AboutUs';
import DesktopMerchant from './screens/web/Merchant';
import DesktopCustomer from './screens/web/Customer';

// Mobile Screens
import MobileHero from './screens/mobile/Hero';
import MobileAboutUs from './screens/mobile/AboutUs';
import MobileMerchant from './screens/mobile/Merchant';
import MobileCustomer from './screens/mobile/Customer';

function isMobile() {
  return window.innerWidth <= 800;
}

function App() {
  const MobileView = isMobile();
  
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '200vh' }}>
      {MobileView ? <MobileHeader /> : <DesktopHeader />}
      <div id='home'>{MobileView ? <MobileHero /> : <DesktopHero />}</div>
      <div id='merchant'>{MobileView ? <MobileMerchant /> : <DesktopMerchant />}</div>
      <div id='customer'>{MobileView ? <MobileCustomer /> : <DesktopCustomer />}</div>
      <div id='aboutUs'>{MobileView ? <MobileAboutUs /> : <DesktopAboutUs />}</div>
      {MobileView ? <MobileFooter /> : <DesktopFooter />}
    </div>
  );
}

export default App;
