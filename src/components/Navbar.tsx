import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Startseite', href: '#home' },
    { label: 'Fenster', href: '#fenster' },
    { label: 'Türen', href: '#tueren' },
    { label: 'Service & Montage', href: '#service' },
    { label: 'Angebote', href: '#angebote' },
  ];

  const handleScrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#383e42] text-white/90 text-xs py-2 px-4 border-b border-white/5 relative z-55 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-300">
              <MapPin size={13} className="mr-1 text-blue-400" />
              Servicegebiet Gießen & Region Mittelhessen
            </span>
            <span className="flex items-center text-slate-300">
              <ShieldCheck size={13} className="mr-1 text-blue-400" />
              Meisterbetrieb / RAL-zertifizierte Montage
            </span>
          </div>
          <div className="flex items-center">
            <a href="tel:+49641123456" className="flex items-center hover:text-blue-400 font-medium transition-colors text-slate-200">
              <Phone size={13} className="mr-1 text-blue-400 animate-pulse" />
              0641 / 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="navbar-header"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-150'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <a
            onClick={() => handleScrollTo('#home')}
            className="flex items-center cursor-pointer group"
            id="nav-logo-link"
          >
            <Logo size="sm" variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center" id="desktop-nav-menu">
            {menuItems.map((item) => (
              <a
                key={item.href}
                onClick={() => handleScrollTo(item.href)}
                className="text-[#383e42] hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => handleScrollTo('#anfrage')}
              className="bg-blue-600 text-white px-5 py-2 rounded shadow-sm hover:bg-[#1d4ed8] transition-all cursor-pointer font-semibold text-sm"
              id="desktop-cta-btn"
            >
              Angebot anfordern
            </button>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#383e42] hover:text-blue-600 p-2"
              aria-label="Menü öffnen"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-gray-200"
              id="mobile-nav-panel"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    onClick={() => handleScrollTo(item.href)}
                    className="block text-[#383e42] hover:text-blue-600 py-2 px-3 rounded hover:bg-gray-100 text-base font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                {/* Mobile call link */}
                <div className="p-3 border-t border-gray-200 my-4 space-y-4">
                  <a
                    href="tel:+49641123456"
                    className="flex items-center text-[#383e42] hover:text-blue-600 text-sm font-semibold"
                  >
                    <Phone className="mr-2 text-blue-600" size={16} />
                    Mobil: 0641 / 123 456
                  </a>
                  <button
                    onClick={() => handleScrollTo('#anfrage')}
                    className="w-full bg-blue-600 text-white font-semibold text-center py-3 rounded block shadow-md cursor-pointer"
                  >
                    Angebot anfordern
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
