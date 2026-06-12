import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import AnfrageForm from './components/AnfrageForm';
import Footer from './components/Footer';
import { FAQ, IMAGE_ASSETS } from './data';
import { HelpCircle, ChevronDown, ShieldCheck, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<'Türen' | 'Fenster' | 'Terrassenüberdachung' | 'Sonstiges'>('Türen');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'startseite' | 'tueren' | 'fenster' | 'terrassenueberdachung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz' | 'cookies'>('startseite');
  const [comfortConsent, setComfortConsent] = useState(true);
  const [analyseConsent, setAnalyseConsent] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSaveSelectedCookies = () => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 4000);
  };

  const handleAcceptAllCookies = () => {
    setComfortConsent(true);
    setAnalyseConsent(true);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 4000);
  };

  const handleSelectServiceFromCard = (service: 'Türen' | 'Fenster' | 'Terrassenüberdachung' | 'Sonstiges') => {
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
          <span className="font-mono text-xs text-zinc-800 bg-zinc-50 border border-zinc-250 px-4 py-1.5 rounded-none inline-block font-bold uppercase tracking-[0.15em]">
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
                      isOpen ? 'rotate-180 text-zinc-950' : ''
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
    <div className="text-slate-950 font-sans selection:bg-zinc-800/10 selection:text-slate-900 scroll-smooth" style={{ backgroundColor: "#ffffff" }}>
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

              {/* FAQ Accordion Section */}
              {renderFaqSection()}

              {/* Lead/Inquiry Form Section */}
              <AnfrageForm 
                selectedService={selectedService} 
                setSelectedService={setSelectedService} 
              />
            </motion.div>
          )}

          {activeTab === 'tueren' && (
            <motion.div
              key="tueren-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-50 border border-zinc-200 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Premium Haustüren & Innentüren
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Sichere & formschöne Türen für Ihr Zuhause
                  </h1>
                </div>

                {/* Imagery Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={IMAGE_ASSETS.door} 
                      alt="Premium Haustür modern" 
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={IMAGE_ASSETS.doorAlt} 
                      alt="Eingangstür Design" 
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Minimalist Info Text */}
                <div className="bg-slate-50 border border-slate-100 p-8 space-y-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center font-light max-w-2xl mx-auto">
                    Erleben Sie meisterhafte Eingangs- und Innentüren mit moderner Sicherheitstechnik und exzellenter Wärmedämmung. Unsere Haustüren erfüllen höchste Einbruchschutz-Standards nach den RC2- und RC3-Klassen. Wir bieten eine breite Palette an maßgeschneiderten Materialien wie robustes Aluminium, edles Holz oder pflegeleichten Kunststoff. Unser meistergeführter Fachbetrieb berät Sie gerne vor Ort und sorgt für eine millimetergenaue Montage.
                  </p>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => handleSelectServiceFromCard('Türen')}
                      className="bg-[#0f172a] hover:brightness-110 active:scale-95 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Jetzt Türen anfragen
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'fenster' && (
            <motion.div
              key="fenster-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-50 border border-zinc-200 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Energieeffiziente Fenster & Rollladen
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Helligkeit, Schallschutz & modernste Isolierung
                  </h1>
                </div>

                {/* Imagery Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={IMAGE_ASSETS.window} 
                      alt="Modernes Fenster" 
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={IMAGE_ASSETS.windowAlt} 
                      alt="Isolierglas Fenster" 
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Minimalist Info Text incorporating Rolladen-Raffstore as requested */}
                <div className="bg-slate-50 border border-slate-100 p-8 space-y-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center font-light max-w-2xl mx-auto">
                    Entdecken Sie unsere energieeffizienten Fenstersysteme mit hocheffizienter Mehrfachverglasung und langlebigen Profilen. Durch optimale Wärmedämmung senken Sie Ihre Energiekosten spürbar und steigern gleichzeitig Ihren Wohnkomfort. Für den optimalen Licht-, Sicht- und Sonnenschutz bieten wir vollintegrierte Rolladen- und moderne Raffstore-Systeme an. Unsere hauseigenen Experten übernehmen die Planung und den fachgerechten Einbau streng nach RAL-Richtlinien.
                  </p>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => handleSelectServiceFromCard('Fenster')}
                      className="bg-[#0f172a] hover:brightness-110 active:scale-95 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Jetzt Fenster anfragen
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'terrassenueberdachung' && (
            <motion.div
              key="terrassenueberdachung-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-50 border border-zinc-200 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Terrassenüberdachungen & Markisen
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Stilvoller Wetterschutz für Ihren Garten
                  </h1>
                </div>

                {/* Imagery Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={IMAGE_ASSETS.installation} 
                      alt="Terrassenüberdachung meisterhaft montiert" 
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={IMAGE_ASSETS.patioAlt} 
                      alt="Aluminium Überdachung modern" 
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Minimalist Info Text incorporating Markisen as requested */}
                <div className="bg-slate-50 border border-slate-100 p-8 space-y-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center font-light max-w-2xl mx-auto">
                    Erweitern Sie Ihren Wohnraum stilvoll ins Grüne mit unseren maßgeschneiderten Terrassenüberdachungen aus Aluminium und Sicherheitsglas. Die witterungsbeständigen, pulverbeschichteten Aluminiumprofile vereinen extreme Stabilität mit zeitloser Ästhetik. Integrierte Markisen und ein textiler Sonnenschutz sorgen auch an heißen Sommertagen für angenehmen Schatten. Wir begleiten Sie von der ersten statischen Auswertung bis zur professionellen Montage Ihres neuen Traumplatzes.
                  </p>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => handleSelectServiceFromCard('Terrassenüberdachung')}
                      className="bg-[#0f172a] hover:brightness-110 active:scale-95 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Jetzt Terrassendach anfragen
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'referenzen' && (
            <motion.div
              key="referenzen-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-white"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-50 border border-zinc-200 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Unsere Referenzprojekte
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">
                    Meisterhafte Arbeiten in Gießen & Hessen
                  </h1>
                  <p className="text-slate-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
                    Überzeugen Sie sich selbst von unserer handwerklichen Präzision anhand einiger fertiggestellter Kundenprojekte.
                  </p>
                </div>

                {/* Gallery of Reference projects representing high design polish */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="group border border-slate-150 bg-white overflow-hidden shadow-xs hover:shadow-md transition duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={IMAGE_ASSETS.reference1} 
                        alt="Kundenprojekt 1" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-wider">Terrassenüberdachung</span>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">Moderne Aluminium-Überdachung mit VSG-Glas</h3>
                      <p className="text-slate-500 text-xs font-light">Fertigstellung in Gießen - Pulverbeschichtung Anthrazit mit integrierter Unterdachmarkise.</p>
                    </div>
                  </div>

                  <div className="group border border-slate-150 bg-white overflow-hidden shadow-xs hover:shadow-md transition duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={IMAGE_ASSETS.reference2} 
                        alt="Kundenprojekt 2" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-wider">Türen</span>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">Premium Alutür mit RC3-Einbruchschutz</h3>
                      <p className="text-slate-500 text-xs font-light">Modernes Design mit schlüssellosem Fingerscan-Eintrittssystem in Wetzlar.</p>
                    </div>
                  </div>

                  <div className="group border border-slate-150 bg-white overflow-hidden shadow-xs hover:shadow-md transition duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={IMAGE_ASSETS.reference3} 
                        alt="Kundenprojekt 3" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-wider">Fenster & Rollladen</span>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">Dreifach-Verglasung & Raffstoren</h3>
                      <p className="text-slate-500 text-xs font-light">Komplettsanierung eines Architektenhauses in Marburg zur Senkung der Energiekosten.</p>
                    </div>
                  </div>

                  <div className="group border border-slate-150 bg-white overflow-hidden shadow-xs hover:shadow-md transition duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={IMAGE_ASSETS.rolladen} 
                        alt="Kundenprojekt 4" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-wider">Sonnenschutz</span>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">Elektrische Rollladen & Außen-Raffstoren</h3>
                      <p className="text-slate-500 text-xs font-light">Smart-Home-gesteuerter Sonnenschutz und automatische Sturmüberwachung.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'kontakt' && (
            <motion.div
              key="kontakt-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Direct query Form triggers instantly */}
              <AnfrageForm 
                selectedService={selectedService} 
                setSelectedService={setSelectedService} 
              />
            </motion.div>
          )}

          {activeTab === 'impressum' && (
            <motion.div
              key="impressum-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-slate-50 min-h-[70vh]"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-200/50 border border-zinc-300 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Anbieterkennzeichnung
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight font-sans">
                    Impressum
                  </h1>
                </div>

                <div className="bg-white border border-slate-200 p-8 sm:p-12 space-y-10 shadow-sm leading-relaxed text-sm">
                  
                  {/* Company Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Angaben gemäß § 5 TMG</h4>
                      <h3 className="font-extrabold text-lg text-slate-900">Zenit Bau</h3>
                      <p className="text-slate-600 font-light mt-1 text-sm leading-relaxed">
                        Kropbacher Weg 19<br />
                        35398 Gießen<br />
                        Deutschland
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Vertreten durch</h4>
                      <p className="text-slate-900 font-semibold text-sm">
                        Hakan Dönmez
                      </p>
                      <p className="text-slate-500 font-light text-xs mt-1">
                        Inhaber / Geschäftsführer
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Kontakt / Kommunikation</h4>
                      <p className="text-slate-600 font-light text-sm">
                        Telefon: 0641 / 123 456<br />
                        E-Mail: <a href="mailto:info@zenit-bau.de" className="text-[#cc0000] hover:underline font-normal">info@zenit-bau.de</a><br />
                        Webseite: <span className="text-slate-900 font-normal">www.zenit-bau.de</span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Aufsichtsbehörde</h4>
                      <p className="text-slate-600 font-light text-xs">
                        Handwerkskammer Wiesbaden<br />
                        Bierstadter Str. 45<br />
                        65189 Wiesbaden
                      </p>
                    </div>
                  </div>

                  {/* Legal Registration */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Registereintrag</h4>
                      <p className="text-slate-600 font-light text-xs leading-relaxed">
                        Eingetragen in der Handwerksrolle der Handwerkskammer Wiesbaden.<br />
                        Berufsbezeichnung: Maurer- und Betonbauermeister (verliehen in der Bundesrepublik Deutschland).
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Umsatzsteuer-ID</h4>
                      <p className="text-slate-600 font-light text-xs leading-relaxed">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        <span className="font-mono text-slate-800 text-sm font-semibold">DE 123456789</span> (Muster-ID)
                      </p>
                    </div>
                  </div>

                  {/* Dispute & Disclaimer */}
                  <div className="space-y-4 pt-2">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">Streitbeilegung & Verbraucherschlichtung</h3>
                    <p className="text-slate-500 text-xs font-light">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#cc0000] hover:underline font-normal">https://ec.europa.eu/consumers/odr</a>.<br />
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide mt-6">Haftung für Inhalte und Links</h3>
                    <p className="text-slate-500 text-xs font-light">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'datenschutz' && (
            <motion.div
              key="datenschutz-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-slate-50 min-h-[70vh]"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-200/50 border border-zinc-300 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    DSGVO-Konformität
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight font-sans">
                    Datenschutzerklärung
                  </h1>
                </div>

                <div className="bg-white border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  
                  <section className="space-y-3">
                    <h3 className="font-extrabold text-slate-950 uppercase tracking-wider text-xs">1. Datenschutz auf einen Blick</h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </section>

                  <section className="space-y-4 border-t border-slate-100 pt-6">
                    <h3 className="font-extrabold text-slate-950 uppercase tracking-wider text-xs">2. Verantwortliche Stelle</h3>
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-slate-50 p-4 border border-slate-150 font-normal rounded-none">
                      <strong className="text-slate-900 block font-semibold mb-1">Zenit Bau</strong>
                      Inhaber: Hakan Dönmez<br />
                      Kropbacher Weg 19<br />
                      35398 Gießen<br />
                      E-Mail: <a href="mailto:info@zenit-bau.de" className="text-[#cc0000] hover:underline font-normal">info@zenit-bau.de</a><br />
                      Telefon: 0641 / 123 456
                    </div>
                  </section>

                  <section className="space-y-3 border-t border-slate-100 pt-6">
                    <h3 className="font-extrabold text-slate-950 uppercase tracking-wider text-xs">3. Datenerfassung auf unserer Website</h3>
                    <h4 className="font-bold text-slate-900 text-xs mt-3">Wie erfassen wir Ihre Daten?</h4>
                    <p>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Anfrage- oder Kontaktformular eingeben (wie Name, Telefonnummer, E-Mail-Adresse, PLZ, Gewerk, Details der Bauanfrage).
                    </p>
                    <p>
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                    
                    <h4 className="font-bold text-slate-900 text-xs mt-3">Wofür nutzen wir Ihre Daten?</h4>
                    <p>
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten (insbesondere aus dem Anfrageformular) werden zur Kontaktaufnahme, zur technischen Beratung und zur Angebotserstellung für Ihr geplantes Bauvorhaben (Fenster, Türen, Terrassenüberdachungen) verarbeitet (Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen).
                    </p>
                  </section>

                  <section className="space-y-3 border-t border-slate-100 pt-6">
                    <h3 className="font-extrabold text-slate-950 uppercase tracking-wider text-xs">4. Ihre gesetzlichen Rechte (Rechte der betroffenen Person)</h3>
                    <p>
                      Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 font-light">
                      <li><strong>Auskunft (Art. 15 DSGVO):</strong> Unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten.</li>
                      <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger Daten oder Vervollständigung Ihrer bei uns gespeicherten Daten.</li>
                      <li><strong>Löschung / Sperrung (Art. 17 DSGVO):</strong> Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.</li>
                      <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung verlangen, falls die Richtigkeit bestritten wird.</li>
                      <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt Ihrer Daten in einem strukturierten, gängigen und maschinenlesbaren Format.</li>
                      <li><strong>Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Widerruf einer einmal erteilten Einwilligung zur Datenverarbeitung für die Zukunft.</li>
                    </ul>
                    <p className="mt-3">
                      Wenden Sie sich hierzu sowie zu weiteren Fragen zum Thema Datenschutz gerne jederzeit an uns unter <a href="mailto:info@zenit-bau.de" className="text-[#cc0000] hover:underline font-normal">info@zenit-bau.de</a>. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Der Hessische Beauftragte für Datenschutz und Informationsfreiheit).
                    </p>
                  </section>

                  <section className="space-y-3 border-t border-slate-100 pt-6">
                    <h3 className="font-extrabold text-slate-950 uppercase tracking-wider text-xs">5. Formspree / E-Mail Formübertragung</h3>
                    <p>
                      Zur Bereitstellung unseres Online-Anfrageformulars übertragen wir die verschlüsselten Daten an den Service Formspree (Formspree Inc., USA), damit die Leads sicher an unsere Mailadresse übermittelt werden. Die Datenübertragung basiert auf Standardvertragsklauseln der EU-Kommission zur Gewährleistung des sicheren Transfers. Wir speichern keine unverschlüsselten Serverdaten ohne zwingenden Grund und löschen Kundendetails nach Abschluss der Anfragebearbeitung entsprechend der gesetzlichen Fristen.
                    </p>
                  </section>

                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'cookies' && (
            <motion.div
              key="cookies-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-20 bg-slate-50 min-h-[70vh]"
            >
              <div className="max-w-4xl mx-auto px-6 font-sans">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                  <span className="font-mono text-xs text-zinc-800 bg-zinc-200/50 border border-zinc-300 px-4 py-1.5 inline-block font-bold uppercase tracking-[0.15em]">
                    Datenschutz-Präferenzen
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight font-sans">
                    Cookie-Einstellungen
                  </h1>
                </div>

                <div className="bg-white border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm">
                  
                  <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    <p>
                      Unsere Website nutzt Cookies, um die technische Funktionalität bereitzustellen (z. B. Speicherung Ihrer Formulareingaben während des Ausfüllens) und eine optimale Benutzererfahrung zu gewährleisten.
                    </p>
                    <p>
                      Wir betreiben ein absolut datenschutzfreundliches Portal: Wir verwenden **keinerlei Analyse- oder Werbe-Cookies von Drittanbietern** (wie Google Analytics, Facebook Pixel), ohne dass Sie uns zuvor Ihre ausdrückliche, widerrufbare Einwilligung erteilt haben.
                    </p>
                  </div>

                  {/* Dynamic Interactive Panel */}
                  <div className="border border-slate-250 bg-slate-50 p-6 sm:p-8 space-y-6 mt-6 rounded-none">
                    <h3 className="font-bold text-[#1a2332] text-sm uppercase tracking-wider flex items-center">
                      <ShieldCheck className="text-emerald-500 mr-2 shrink-0" size={18} />
                      Ihre Consent-Präferenzen verwalten
                    </h3>
                    
                    <div className="space-y-4">
                      
                      {/* Essenziell (always active) */}
                      <div className="flex items-start justify-between p-4 bg-white border border-slate-200">
                        <div className="pr-4 space-y-1">
                          <span className="text-xs font-bold text-slate-900 block">Notwendige & Essenzielle Cookies</span>
                          <span className="text-xs text-slate-500 font-light block leading-relaxed">
                            Diese Cookies sind zur Ausführung der Kernfunktionen der Website zwingend erforderlich (z.B. CSRF-Schutz, Status-Speicherung). Sie können nicht deaktiviert werden.
                          </span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase tracking-wide px-2.5 py-1 font-bold shrink-0">
                          Immer Aktiv
                        </span>
                      </div>

                      {/* Funktionale / Formulareingaben */}
                      <div className="flex items-start justify-between p-4 bg-white border border-slate-200">
                        <div className="pr-4 space-y-1 text-left">
                          <span className="text-xs font-bold text-slate-900 block">Komfort & Lokale Formular-Zwischenspeicherung</span>
                          <span className="text-xs text-slate-500 font-light block leading-relaxed">
                            Ermöglicht der Website, Ihre getroffenen Auswahl-Gewerkoptionen oder Postleitzahlen-Suchen lokal zwischenzuspeichern, falls Sie das Browserfenster neu laden.
                          </span>
                        </div>
                        <div className="flex items-center pt-1.5 shrink-0">
                          <button 
                            onClick={() => setComfortConsent(!comfortConsent)}
                            className={`w-11 h-6 transition-colors duration-250 ease-in-out rounded-full p-1 cursor-pointer focus:outline-none ${
                              comfortConsent ? 'bg-slate-950' : 'bg-slate-305 bg-slate-300'
                            }`}
                          >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-250 ease-in-out ${
                              comfortConsent ? 'translate-x-5' : 'translate-x-0'
                            }`} />
                          </button>
                        </div>
                      </div>

                      {/* Analyse und Performance */}
                      <div className="flex items-start justify-between p-4 bg-white border border-slate-200">
                        <div className="pr-4 space-y-1 text-left">
                          <span className="text-xs font-bold text-slate-900 block">Lokale Performance-Statistiken (anonymisiert)</span>
                          <span className="text-xs text-slate-500 font-light block leading-relaxed">
                            Erlaubt uns, Ladezeiten und Systemfehler auf rein anonymisierter Basis zu tracken, um unsere Erreichbarkeit kontinuierlich zu optimieren. Es findet keine Benutzerverfolgung statt.
                          </span>
                        </div>
                        <div className="flex items-center pt-1.5 shrink-0">
                          <button 
                            onClick={() => setAnalyseConsent(!analyseConsent)}
                            className={`w-11 h-6 transition-colors duration-250 ease-in-out rounded-full p-1 cursor-pointer focus:outline-none ${
                              analyseConsent ? 'bg-slate-950' : 'bg-slate-305 bg-slate-300'
                            }`}
                          >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-250 ease-in-out ${
                              analyseConsent ? 'translate-x-5' : 'translate-x-0'
                            }`} />
                          </button>
                        </div>
                      </div>

                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                      <button 
                        onClick={handleAcceptAllCookies}
                        className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 cursor-pointer"
                      >
                        Alle akzeptieren
                      </button>
                      <button 
                        onClick={handleSaveSelectedCookies}
                        className="w-full sm:w-auto border border-slate-350 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider py-3 px-6 cursor-pointer"
                      >
                        Auswahl speichern
                      </button>
                    </div>

                    {showFeedback && (
                      <div className="text-center p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 font-semibold text-xs tracking-wide">
                        ✓ Ihre Cookie-Präferenzen wurden erfolgreich gespeichert. Vielen Dank!
                      </div>
                    )}

                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer segment */}
      <Footer onChangeTab={setActiveTab} />
    </div>
  );
}
