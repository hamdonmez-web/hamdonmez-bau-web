import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Promo from './components/Promo';
import AnfrageForm from './components/AnfrageForm';
import Footer from './components/Footer';
import { FAQ, IMAGE_ASSETS } from './data';
import { HelpCircle, ChevronDown, ShieldCheck, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<'Hoch- & Tiefbau' | 'Sanierung & Umbau' | 'Außenanlagen' | 'Sonstiges'>('Hoch- & Tiefbau');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'startseite' | 'dienstleistungen' | 'angebote' | 'ueber-uns'>('startseite');

  const handleSelectServiceFromCard = (service: 'Hoch- & Tiefbau' | 'Sanierung & Umbau' | 'Außenanlagen' | 'Sonstiges') => {
    setSelectedService(service);
    setTimeout(() => {
      const el = document.getElementById('anfrage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOpenInquiry = () => {
    setActiveTab('startseite');
    setTimeout(() => {
      const el = document.getElementById('anfrage');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderFaqSection = () => (
    <section id="faq" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 font-sans">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-amber-700 bg-amber-50 border border-amber-150 px-4 py-1.5 rounded-none inline-block font-bold uppercase tracking-[0.15em]">
            Fragen & Antworten
          </span>
          <h2 className="text-3xl font-extrabold text-[#1a2332] tracking-tight font-sans">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Hier finden Sie verlässliche Antworten rund um Beratung, Planung, Richtlinien und Ausschreibungen bei Zenit Bau.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQ.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`border overflow-hidden transition-all duration-200 rounded-none ${
                  isOpen 
                    ? 'bg-slate-50 border-slate-350 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-[#1a2332] text-xs sm:text-xs uppercase tracking-wider pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#d97706]' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-150"
                    >
                      <div className="p-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-light bg-white/70 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );

  return (
    <div className="text-slate-950 font-sans selection:bg-amber-500/10 selection:text-slate-900 scroll-smooth" style={{ backgroundColor: "#ffffff" }}>
      {/* Navbar segment */}
      <Navbar 
        activeTab={activeTab} 
        onChangeTab={setActiveTab} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Main Content Area */}
      <main className="min-h-[60vh]">
        <AnimatePresence mode="wait">
          {activeTab === 'startseite' && (
            <motion.div
              key="startseite"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hero Banner Section */}
              <Hero />

              {/* Dynamic Service Grid Section */}
              <Products onSelectService={handleSelectServiceFromCard} />

              {/* Promo Campaign Section */}
              <Promo />

              {/* FAQ Accordion Section */}
              {renderFaqSection()}

              {/* Lead/Inquiry Form Section */}
              <AnfrageForm 
                selectedService={selectedService} 
                setSelectedService={setSelectedService} 
              />
            </motion.div>
          )}

          {activeTab === 'dienstleistungen' && (
            <motion.div
              key="dienstleistungen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-amber-700 bg-amber-50 border border-amber-100 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Unsere Gewerke & Leistungen
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Meistergeführter Hoch- & Tiefbau
                  </h1>
                  <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    Vom sicheren Betonfundament über die energetische Kernsanierung bis zu eleganten Garten- und Pflasterarbeiten – wir realisieren Ihr Projekt schlüsselfertig.
                  </p>
                </div>

                {/* Elegant Photo */}
                <div className="mb-12 aspect-[21/9] overflow-hidden border border-slate-200">
                  <img 
                    src={IMAGE_ASSETS.hero} 
                    alt="Bauarbeiten Zenit Bau" 
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Clear, simple bullet list descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4 border-l-2 border-amber-500 pl-4 py-1">
                    <h3 className="font-bold text-slate-900 text-base">Hoch- & Tiefbau</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      Wir bauen solide Fundamente, Erdaushubarbeiten, Kellerabdichtungen und schlüsselfertige Rohbauten nach deutschen Qualitätsnormen.
                    </p>
                  </div>
                  <div className="space-y-4 border-l-2 border-amber-500 pl-4 py-1">
                    <h3 className="font-bold text-slate-900 text-base">Sanierung & Umbau</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      Energetische Sanierungen, statische Mauerdurchbrüche mit langlebigen Stahlbauträgern und anspruchsvolle Komplett-Modernisierungen.
                    </p>
                  </div>
                  <div className="space-y-4 border-l-2 border-amber-500 pl-4 py-1">
                    <h3 className="font-bold text-slate-900 text-base">Außenanlagen</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      Geschmackvolle Pflasterungen für Hof, Einfahrten, Fußwege, solide Stützmauern, Terrassenbau und moderne Grundstücksentwässerung.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-slate-50 p-8 border border-slate-150">
                  <h4 className="font-bold text-slate-800 text-sm mb-2">Sie planen ein konkretes Projekt?</h4>
                  <p className="text-slate-500 text-xs mb-6">Lassen Sie sich unverbindlich vor Ort in Gießen beraten.</p>
                  <button 
                    onClick={handleOpenInquiry}
                    className="bg-[#0f172a] hover:brightness-110 active:scale-95 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Kostenlose Anfrage starten
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'angebote' && (
            <motion.div
              key="angebote"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-amber-700 bg-amber-50 border border-amber-100 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Exklusive Angebote & Aktionen
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Sonderkonditionen & Bauschwerpunkte
                  </h1>
                  <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    Wir bieten exklusive Vorteile für Modernisierer und Bauherren in Gießen und Umgebung.
                  </p>
                </div>

                {/* Elegant Photo */}
                <div className="mb-12 aspect-[21/9] overflow-hidden border border-slate-205">
                  <img 
                    src={IMAGE_ASSETS.window} 
                    alt="Angebote Zenit Bau" 
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Structured Offers block */}
                <div className="space-y-8">
                  <div className="bg-slate-50 p-6 md:p-8 border border-slate-150 relative">
                    <div className="absolute top-6 right-6 font-mono text-[10px] bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 text-amber-700 font-bold uppercase tracking-wider">
                      Bis 31.08.2026
                    </div>
                    <span className="text-[10px] text-amber-700 font-extrabold uppercase tracking-wide block mb-1">Aktion Vorplanung</span>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-3">Statik- & 3D-Baugutachten im Wert von 1.500 € gratis</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      Bei Buchung eines Sanierungs- oder Rohbauprojektes schenken wir Ihnen die gesamte statische Auswertung sowie die digitale 3D-Vorplanung Ihres Vorhabens. Das spart bares Planungsbudget und sorgt für absolute Sicherheit.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 md:p-8 border border-slate-150">
                    <span className="text-[10px] text-amber-700 font-extrabold uppercase tracking-wide block mb-1">Dauerhafter Vorteil</span>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-3">Kostenlose Fördermittel-Beratung</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      Unsere Energie- und Bauingenieure prüfen vor Projektstart, welche Fördermittel bei der BAFA oder KfW für Ihre Sanierungsarbeiten beantragt werden können. Wir bereiten alle Dokumente für Sie vor, damit Sie sich bis zu 20% Zuschuss sichern.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                  <button 
                    onClick={handleOpenInquiry}
                    className="bg-[#0f172a] hover:brightness-110 active:scale-95 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Jetzt kostenlose Beratung sichern
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'ueber-uns' && (
            <motion.div
              key="ueber-uns-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-amber-700 bg-amber-50 border border-amber-100 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Über meisterbetrieb Zenit Bau
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Kompetenz, Solidität & Regionalität
                  </h1>
                  <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    Wir stehen für ehrliches Handwerk, transparente Festpreise und termingerechte Fertigstellung im Raum Mittelhessen.
                  </p>
                </div>

                {/* Elegant Photo */}
                <div className="mb-12 aspect-[21/9] overflow-hidden border border-slate-202">
                  <img 
                    src={IMAGE_ASSETS.installation} 
                    alt="Über Uns Zenit Bau" 
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Detailed descriptions */}
                <div className="space-y-6 text-slate-500 font-light leading-relaxed text-xs sm:text-sm">
                  <p>
                    Als meistergeführter Fachbetrieb in Gießen verstehen wir uns als moderner Partner für private Bauherren und gewerbliche Auftraggeber. Unsere Philosophie verbindet bewährte, solide Handwerkstraditionen mit modernster Bautechnologie und effizientem Tragwerksdesign.
                  </p>
                  <p>
                    Jeder Mitarbeiter auf unseren Baustellen in Gießen, Wetzlar und Marburg ist eine zertifizierte Fachkraft. Wir beschäftigen keine undurchsichtigen Subunternehmerketten, sondern setzen voll und ganz auf festangestelltes deutsches Fachpersonal.
                  </p>
                </div>

                {/* Core values block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 bg-slate-50 p-8 border border-slate-150">
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <div>
                      <strong className="text-slate-900 text-xs block">Deutsche Handwerksqualität</strong>
                      <span className="text-xs text-slate-500 font-light">Ausführung streng nach geltenden Baunormen und DIN Richtlinien.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <div>
                      <strong className="text-slate-900 text-xs block">Festpreis- und Termingarantie</strong>
                      <span className="text-xs text-slate-500 font-light">Sie erhalten ein verbindliches Festpreisangebot ohne böse Überraschungen.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <div>
                      <strong className="text-slate-900 text-xs block font-sans">Lokale Projektabwicklung</strong>
                      <span className="text-xs text-slate-500 font-light">Schnelle Vor-Ort-Besichtigung und meisterhafte Beratung aus einer Hand.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <div>
                      <strong className="text-slate-900 text-xs block">Zertifizierter Fachbetrieb</strong>
                      <span className="text-xs text-slate-500 font-light">Umfassende Unterstützung bei Energieberatung, KfW-Anmeldung und statischen Analysen.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer segment */}
      <Footer />
    </div>
  );
}
