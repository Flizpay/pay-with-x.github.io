import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/protectedRoute'
import './i18n';

// component
import Header from './components/header';
import Footer from './components/footer';
import Imprint from './components/imprint';

import Hero from './screens/base/hero';
import AboutUs from './screens/base/aboutUs';
import Merchant from './screens/base/merchant';
import Customer from './screens/base/customer';

import Login from './screens/auth/login';
import Register from './screens/auth/register';
import ResetPassword from './screens/auth/resetPassword';

import MerchantBaseInfo from './screens/base/merchantBaseInfo';
import MerchantSecurityInfo from './screens/base/merchantSecurityInfo';

import SetNewPassword from './screens/auth/setNewPassword';
import ResetBaseInfo from './screens/base/resetBaseInfo';
import ResetIban from './screens/auth/resetIban';
import { MerchantProvider } from './context/merchantContext';
import ResetEmail from './screens/auth/resetEmail';

function HomePage() {
  
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '200vh' }}>
      <Header />
      <div id='home'><Hero /></div>
      <div id='merchant'><Merchant /></div>
      <div id='customer'><Customer /></div>
      <div id='aboutUs'> <AboutUs /></div>
       <Footer />
    </div>
  );
}

function App() {
  return (
    <MerchantProvider>
      <Router>
        <Routes>
        <Route element={<ProtectedRoute />}>
        <Route path="/merchantBaseInfo" element={<MerchantBaseInfo />} />
        <Route path="/merchantSecurityInfo" element={<MerchantSecurityInfo />} />
        <Route path="/setNewPassword" element={<SetNewPassword />} />
        <Route path="/resetBaseInfo" element={<ResetBaseInfo />} />
        <Route path="/resetIban" element={<ResetIban />} />
        <Route path="/resetEmail" element={<ResetEmail />} />
  </Route>
        <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
         <Route path="/imprint" element={<Imprint />} />

 </Routes>
      </Router>
      </MerchantProvider>
  );
}


export default App;
