import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationsList from './components/LocationsList';
import FeaturedSlider from './components/FeaturedSlider';
import SpecialtiesSection from './components/SpecialtiesSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import OrderModal from './components/OrderModal';
import PageLoader from './components/PageLoader';

// Wrapper pour MenuPage afin de récupérer l'état de navigation (catégorie)
const MenuPageWrapper = ({ onBack }: { onBack: () => void }) => {
  const location = useLocation();
  const initialCategory = location.state?.category || 'Pizzas Rouges';
  return <MenuPage initialCategory={initialCategory} onBack={onBack} />;
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'menu' | 'delivery_direct'>('menu');

  // Fonction de navigation centrale
  const handleNavigate = (page: string) => {
    if (page === 'home') navigate('/');
    else navigate(`/${page}`);
  };

  const handleNavigateToMenuCategory = (category: string) => {
    navigate('/menu', { state: { category } });
  };

  const openOrderModal = (mode: 'menu' | 'delivery_direct' = 'menu') => {
    setModalMode(mode);
    setIsOrderModalOpen(true);
  };

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <PageLoader />
      
      <Header onNavigate={handleNavigate} isHome={isHome} onOpenOrder={openOrderModal} />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <LocationsList />
            <FeaturedSlider />
            <SpecialtiesSection onCategoryClick={handleNavigateToMenuCategory} />
            <OrderSection onOpenOrder={openOrderModal} />
          </main>
        } />
        
        <Route path="/menu" element={<MenuPageWrapper onBack={() => navigate('/')} />} />
        <Route path="/services" element={<ServicesPage onBack={() => navigate('/')} />} />
        <Route path="/apropos" element={<AboutPage onBack={() => navigate('/')} />} />
        <Route path="/contact" element={<ContactPage onBack={() => navigate('/')} />} />
        <Route path="/mentions" element={<MentionsLegales onBack={() => navigate('/')} />} />
        <Route path="/privacy" element={<PolitiqueConfidentialite onBack={() => navigate('/')} />} />
      </Routes>
      
      <Footer onNavigate={handleNavigate} />

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        startMode={modalMode}
      />
    </div>
  );
}

export default App;