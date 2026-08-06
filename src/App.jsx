import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DiamondField from './components/DiamondField';
import Service from './components/Services';
import Process from './components/Process';
import Start from './components/start'; 
import Faq from './components/faq'; 
import Contact from './components/contact';
import ChatWidget from './components/ChatWidget';
import Customserver from './components/customservice';
import Appraisa from './components/appraisa';
import ServiceDetail from './components/ServiceDetail';
import Login from './components/Login';
import Signup from './components/Signup'; 
import Forgetpassword from './components/Forgetpassword';
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      <ScrollToTop />
      <div className="top-backdrop">
        {isHomePage && <DiamondField />}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Service />} />
            <Route path="/process" element={<Process />} />
            <Route path="/start" element={<Start />} />  
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customservice" element={<Customserver />} />
            <Route path="/appraisa" element={<Appraisa />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Signup route */}
            <Route path="/forgot-password" element={<Forgetpassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;