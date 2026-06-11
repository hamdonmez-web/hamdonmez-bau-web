import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck, MapPin } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeTab: 'startseite' | 'dienstleistungen' | 'angebote' | 'ueber-uns';
  onChangeTab: (tab: 'startseite' | 'dienstleistungen' | 'angebote' | 'ueber-uns') => void;
  onOpenInquiry: () => void;
}

export default function Navbar({ activeTab, onChangeTab, onOpenInquiry }: NavbarProps) {
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

  const menuItems: { label: string; id: 'startseite' | 'dienstleistungen' | 'angebote' | 'ueber-uns' }[] = [
    { label: 'Startseite', id: 'startseite' },
    { label: 'Dienstleistungen', id: 'dienstleistungen' },
    { label: 'Angebote', id: 'angebote' },
    { label: 'Über Uns', id: 'ueber-uns' },
  ];

  const handleTabClick = (id: 'startseite' | 'dienstleistungen' | 'angebote' | 'ueber-uns') => {
    setIsOpen(false);
    onChangeTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white/90 text-xs py-2 px-6 border-b border-white/5 relative z-55 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[11px] font-sans tracking-wide">
            <span className="flex items-center text-slate-350">
              <MapPin size={12} className="mr-1.5" style={{ color: "#d97706" }} />
              Servicegebiet Gießen & Region Mittelhessen
            </span>
            <span className="flex items-center text-slate-350">
              <ShieldCheck size={12} className="mr-1.5" style={{ color: "#d97706" }} />
              Meisterbetrieb / TÜV- & Bau-zertifizierte Ausführung
            </span>
          </div>
          <div className="flex items-center text-[11px] font-medium tracking-wide">
            <a href="tel:+49641123456" className="flex items-center hover:text-white transition-colors text-slate-200">
              <Phone size={11} className="mr-1.5 animate-pulse" style={{ color: "#d97706" }} />
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
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
            : 'bg-white/90 backdrop-blur-sm border-b border-neutral-50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <a
            onClick={() => handleTabClick('startseite')}
            className="flex items-center cursor-pointer group"
            id="nav-logo-link"
          >
            <Logo size="md" variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center" id="desktop-nav-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d97706] after:transition-all ${
                  activeTab === item.id 
                    ? 'text-black after:w-full' 
                    : 'text-[#475569] hover:text-black after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenInquiry}
              className="text-white px-6 py-3 shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer font-bold text-xs uppercase tracking-wider rounded-none"
              style={{ backgroundColor: "#0f172a" }}
              id="desktop-cta-btn"
            >
              Angebot anfordern
            </button>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-black p-2"
              aria-label="Menü öffnen"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              className="md:hidden bg-white border-b border-gray-100"
              id="mobile-nav-panel"
            >
              <div className="px-6 pt-2 pb-6 space-y-3 font-sans">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`block py-2.5 px-3 rounded text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                      activeTab === item.id 
                        ? 'text-amber-700 bg-amber-50' 
                        : 'text-[#475569] hover:text-black hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                {/* Mobile call link */}
                <div className="p-3 border-t border-gray-100 my-4 space-y-4">
                  <a
                    href="tel:+49641123456"
                    className="flex items-center text-slate-700 hover:text-black text-xs font-semibold uppercase tracking-wider"
                  >
                    <Phone className="mr-2" size={14} style={{ color: "#d97706" }} />
                    Telefon: 0641 / 123 456
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenInquiry();
                    }}
                    className="w-full text-white font-bold text-center py-3.5 text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all block cursor-pointer"
                    style={{ backgroundColor: "#0f172a" }}
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
