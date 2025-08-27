import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SharedFlightsPage from './pages/SharedFlightsPage';
import EmptyLegsPage from './pages/EmptyLegsPage';
import ContactPage from './pages/ContactPage';
import MemberAreaPage from './pages/MemberAreaPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pourquoi-envyjet" element={<AboutPage />} />
            <Route path="/vols-partages" element={<SharedFlightsPage />} />
            <Route path="/vols-a-vide" element={<EmptyLegsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/espace-adherent" element={<MemberAreaPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              color: '#1a1a1a',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            },
            success: {
              iconTheme: {
                primary: '#d4af37',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
