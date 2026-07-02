import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck, MapPin, Mail } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeTab: 'startseite' | 'tueren' | 'fenster' | 'terrassenueberdachung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz' | 'cookies';
  onChangeTab: (tab: 'startseite' | 'tueren' | 'fenster' | 'terrassenueberdachung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz' | 'cookies') => void;
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

  const menuItems: { label: string; id: 'startseite' | 'tueren' | 'fenster' | 'terrassenueberdachung' | 'referenzen' | 'kontakt' }[] = [
    { label: 'Startseite', id: 'startseite' },
    { label: 'Türen', id: 'tueren' },
    { label: 'Fenster', id: 'fenster' },
    { label: 'Terrassenüberdachung', id: 'terrassenueberdachung' },
    { label: 'Referenzen', id: 'referenzen' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  const handleTabClick = (id: 'startseite' | 'tueren' | 'fenster' | 'terrassenueberdachung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz' | 'cookies') => {
    setIsOpen(false);
    onChangeTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-zinc-950 text-white/90 text-xs py-2.5 px-6 border-b border-white/5 relative z-55 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[11px] font-sans tracking-wide">
            <span className="flex items-center text-zinc-400">
              <MapPin size={12} className="mr-1.5 text-zinc-400" />
              Servicegebiet Gießen & Region Mittelhessen
            </span>
            <span className="flex items-center text-zinc-400">
              <ShieldCheck size={12} className="mr-1.5 text-zinc-400" />
              Meisterbetrieb / TÜV- & Bau-zertifizierte Ausführung
            </span>
          </div>
          <div className="flex items-center text-[11px] font-medium tracking-wide space-x-6">
            <a href="mailto:info@zenit-bau.de" className="flex items-center hover:text-white transition-colors text-zinc-300">
              <Mail size={11} className="mr-1.5 text-zinc-400" />
              info@zenit-bau.de
            </a>
            <a href="tel:+491787270484" className="flex items-center hover:text-white transition-colors text-zinc-300">
              <Phone size={11} className="mr-1.5 animate-pulse text-zinc-400" />
              0178 7270484
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
         id="navbar-header"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F3EF]/95 backdrop-blur-md shadow-md border-b border-zinc-200/80'
            : 'bg-[#F5F3EF] border-b border-zinc-200/40'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between gap-x-8 lg:gap-x-12">
          
          {/* Logo Section */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('startseite');
            }}
            className="flex items-center cursor-pointer group shrink-0"
            id="nav-logo-link"
          >
            <Logo size="md" variant="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-3 lg:space-x-6 xl:space-x-8 items-center" id="desktop-nav-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`font-bold text-xs uppercase tracking-wider transition-all cursor-pointer relative py-2 shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:bg-brand after:transition-all ${
                  activeTab === item.id 
                    ? 'text-brand after:w-full font-extrabold' 
                    : 'text-zinc-600 hover:text-brand after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenInquiry}
              className="bg-brand text-white hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/20 active:scale-95 px-6 py-3.5 shadow-md transition-all duration-300 cursor-pointer font-bold text-xs uppercase tracking-wider rounded-none shrink-0 ml-2"
              id="desktop-cta-btn"
            >
              Angebot anfordern
            </button>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-800 hover:text-[#111111] p-2"
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
              className="md:hidden bg-[#F5F3EF] border-b border-zinc-200"
              id="mobile-nav-panel"
            >
              <div className="px-6 pt-2 pb-6 space-y-3 font-sans">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`block py-2.5 px-3 rounded text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                      activeTab === item.id 
                        ? 'text-zinc-950 bg-zinc-200/60 font-bold' 
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/30'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                {/* Mobile call & mail links */}
                <div className="p-3 border-t border-zinc-200 my-4 space-y-4">
                  <a
                    href="mailto:info@zenit-bau.de"
                    className="flex items-center text-zinc-700 hover:text-zinc-950 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Mail className="mr-2 text-zinc-500" size={14} />
                    info@zenit-bau.de
                  </a>
                  <a
                    href="tel:+491787270484"
                    className="flex items-center text-zinc-700 hover:text-zinc-950 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Phone className="mr-2 text-zinc-500" size={14} />
                    Telefon: 0178 7270484
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenInquiry();
                    }}
                    className="w-full bg-brand text-white font-bold text-center py-3.5 text-xs uppercase tracking-wider hover:bg-brand-hover active:scale-95 transition-all block cursor-pointer"
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
