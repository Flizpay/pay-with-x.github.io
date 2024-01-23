import React from 'react';
import './i18n';  // Importing i18n configuration

// Footer
import Footer from './components/footer';
import Header from './components/header';

// Web Screens
import DesktopHero from './screens/web/Hero';
import DesktopAboutUs from './screens/web/AboutUs';
import DesktopMerchant from './screens/web/Merchant';
import DesktopCustomer from './screens/web/Customer';
import DesktopSignUp from './screens/web/SignUp';

// Mobile Screens
import MobileHero from './screens/mobile/Hero';
import MobileAboutUs from './screens/mobile/AboutUs';
import MobileMerchant from './screens/mobile/Merchant';
import MobileCustomer from './screens/mobile/Customer';
import MobileSignUp from './screens/mobile/SignUp';

// Imprint
import Imprint from './components/imprint';

function isMobile() {
  return window.innerWidth <= 800;
}

function HomePage() {
  const MobileView = isMobile();
  
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '200vh' }}>
            <Header />
      <div id='home'>{MobileView ? <MobileHero /> : <DesktopHero />}</div>
      <div id='merchant'>{MobileView ? <MobileMerchant /> : <DesktopMerchant />}</div>
      <div id='customer'>{MobileView ? <MobileCustomer /> : <DesktopCustomer />}</div>
      <div id='aboutUs'>{MobileView ? <MobileAboutUs /> : <DesktopAboutUs />}</div>
             <Footer />
    </div>
  );
}

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imprint" element={<Imprint />} />
       </Routes>
      </Router>

  );
}


export default App;
