import { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldAlert, BookOpen, GraduationCap, Code } from 'lucide-react';
import ExportModal from './ExportModal';
import Logo from './Logo';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-white/5 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Col 1: About & Info Gießen */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center">
              <Logo size="md" variant="dark" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Ihr zertifizierter meistergeführter Baupartner für Hoch- & Tiefbau, energetische Sanierung, anspruchsvolle Umbauten und repräsentative Außenanlagen in Gießen und ganz Mittelhessen.
            </p>
            
            {/* Call to Exporter */}
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold py-2 px-4 rounded-xl shadow-md transition-all cursor-pointer font-sans"
              >
                <Code size={14} />
                <span>Statischen Code für GitHub Pages kopieren</span>
              </button>
            </div>
          </div>

          {/* Col 2: Gießen Address contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Montagestützpunkt</h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start">
                <MapPin size={16} className="text-amber-500 mr-2.5 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-normal leading-relaxed">
                  Marburger Straße 78,<br />
                  35390 Gießen, Hessen
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={15} className="text-amber-500 mr-2.5 shrink-0" />
                <a href="mailto:kontakt@zenit-bau-giessen.de" className="text-slate-300 hover:text-white transition-colors">
                  kontakt@zenit-bau-giessen.de
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={15} className="text-amber-500 mr-2.5 shrink-0" />
                <a href="tel:+49641123456" className="text-slate-300 hover:text-white transition-colors font-semibold">
                  0641 / 123 456
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Service coverage */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Servicegebiete</h4>
            <ul className="text-xs text-slate-400 space-y-2 font-light">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Gießen, Wettenberg & Linden</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Pohlheim, Buseck & Heuchelheim</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Wetzlar & Lahn-Dill-Kreis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Wetteraukreis (Butzbach, Friedberg)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Policy links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-sans">Rechtliches</h4>
            <div className="space-y-2 text-xs font-light">
              <a href="#home" className="block text-slate-400 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#home" className="block text-slate-400 hover:text-white transition-colors">
                Datenschutzerklärung
              </a>
              <a href="#home" className="block text-slate-400 hover:text-white transition-colors">
                Cookie-Einstellungen
              </a>
            </div>
          </div>

         </div>

        {/* Closing details bar */}
        <div className="border-t border-white/5 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-light gap-4">
          <p>© 2026 Zenit Bau. Alle Rechte vorbehalten.</p>
          <p className="flex items-center text-slate-500 shrink-0">
            <span>Konzipiert für Gießen und Umland</span>
          </p>
        </div>
      </div>

      {/* Code Modal instance */}
      <ExportModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
