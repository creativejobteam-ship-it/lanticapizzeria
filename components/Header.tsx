
import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  isHome?: boolean;
  onOpenOrder: (mode?: 'menu' | 'delivery_direct') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isHome = true, onOpenOrder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCompact = scrolled || !isHome;

  const navItems = [
    { label: "La Carte", id: "menu" },
    { label: "Services", id: "services" },
    { label: "À Propos", id: "apropos" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = {
    facebook: "https://www.facebook.com/lanticapizzeriamarengo",
    instagram: "https://www.instagram.com/lanticapizzeria31"
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isCompact
          ? 'bg-mazzo-green shadow-xl py-2 border-b border-transparent'
          : 'bg-transparent py-4 bg-gradient-to-b from-black/50 to-transparent border-b border-white'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">

        {/* Left: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-10 w-1/3">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Center: Logo Container (Hanging Tag Style) */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-50">
          <div
            className="cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className={`
                flex items-center justify-center 
                bg-mazzo-red shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                rounded-b-[2rem] 
                transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
                ${isCompact ? 'w-28 h-20 pt-1' : 'w-40 h-32 pt-2'}
            `}>
              <img
                src="https://i.postimg.cc/nrjHWVJZ/logo1.webp"
                alt="L'ANTICA Logo"
                className={`
                    object-contain transition-all duration-500 drop-shadow-md
                    ${isCompact ? 'w-20 h-20' : 'w-32 h-32'}
                  `}
              />
            </div>
          </div>
        </div>

        {/* Right: Navigation (Desktop), Socials, CTA & Mobile Menu Button */}
        <div className="flex items-center justify-end gap-4 md:gap-10 w-full md:w-1/3">
          <nav className="hidden md:flex items-center gap-10">
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4 border-l border-white/20 pl-4">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mazzo-lime transition-colors">
              <Facebook size={18} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mazzo-lime transition-colors">
              <Instagram size={18} />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onOpenOrder('menu')}
            className="hidden sm:block px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] bg-white text-mazzo-green hover:bg-[#03933e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-transparent hover:border-white/20"
          >
            Commander
          </button>

          {/* Mobile Menu Button (Right aligned) */}
          <button
            className="md:hidden p-2 text-white hover:text-mazzo-lime transition-colors z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-mazzo-green/95 backdrop-blur-md text-white p-8 md:hidden shadow-2xl flex flex-col pt-44 animate-in slide-in-from-top-5 z-40">
          <div className="flex flex-col gap-6 items-center text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-3xl font-serif pb-2 hover:text-mazzo-lime transition-all"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                onOpenOrder('menu');
                setMobileMenuOpen(false);
              }}
              className="bg-white text-mazzo-green px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-mazzo-lime hover:text-white transition-colors mt-4 text-sm w-full max-w-xs"
            >
              Commander en ligne
            </button>

            {/* Mobile Social Icons */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-xs flex flex-col items-center">
              <p className="text-sm uppercase tracking-widest opacity-60 mb-4">Suivez-nous</p>
              <div className="flex gap-8">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-mazzo-lime transition-colors">
                  <Facebook size={24} />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-mazzo-lime transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
