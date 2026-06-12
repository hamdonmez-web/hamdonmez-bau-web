import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Check, ArrowRight, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { ServiceItem } from '../types';

interface ProductsProps {
  onSelectService: (serviceType: 'Türen' | 'Fenster' | 'Terrassenüberdachung' | 'Sonstiges') => void;
}

export default function Products({ onSelectService }: ProductsProps) {
  const [activeDetailId, setActiveDetailId] = useState<string | null>('tueren');

  const getFormCategoryMapping = (id: string): 'Türen' | 'Fenster' | 'Terrassenüberdachung' | 'Sonstiges' => {
    if (id === 'tueren') return 'Türen';
    if (id === 'fenster') return 'Fenster';
    if (id === 'terrassenueberdachung') return 'Terrassenüberdachung';
    return 'Sonstiges';
  };

  const handleCtaClick = (id: string) => {
    const category = getFormCategoryMapping(id);
    onSelectService(category);
    const formElement = document.querySelector('#anfrage');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="produkte" className="scroll-mt-10 bg-[#f8fafc]/50">
      
      {/* 1. What We Offer Features Section - "Neler Sunuyoruz?" style */}
      <div className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-center mb-4 block" style={{ color: "#475569" }}>
            DIE ZENIT BAU-KOMPETENZen
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-12">
            Was zeichnet uns aus?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Termintreue & Effizienz",
                description: "Wir arbeiten pünktlich, effizient und mit optimierten Bauabläufen für absolute Planbarkeit im Raum Hessen."
              },
              {
                icon: ShieldCheck,
                title: "Premium Qualität",
                description: "Hochwertige, zertifizierte Baumaterialien und meisterhafte, präzise Bauausführung sichern den langfristigen Wert Ihrer Immobilie."
              },
              {
                icon: TrendingUp,
                title: "Maximale Transparenz",
                description: "Detaillierte Angebote ohne versteckte Kosten. Volle Budget- und Qualitätskontrolle bei jedem Bauabschnitt."
              }
            ].map((f, i) => {
              const IconComp = f.icon;
              return (
                <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition bg-slate-50/30">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4" style={{ backgroundColor: "#1e293b11", color: "#1e293b" }}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-bold mb-2 text-slate-900 text-sm sm:text-base">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Products Showcase Section - "Esnek Paketlerimiz" style */}
      <div className="py-24 max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#475569" }}>
            BODENSTÄNDIGES EXPERTENWERK
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Dienstleistungen & Gewerke
          </h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Wir betreuen Ihr Neubau- oder Modernisierungsvorhaben im Raum Gießen schlüsselfertig aus einer Hand. Wählen Sie das passende Gewerk aus.
          </p>
        </div>

        {/* 3-Column Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" id="products-cards-grid">
          {SERVICES.map((service, idx) => {
            const isExpanded = activeDetailId === service.id;
            
            const startingTags = [
              { price: "Festpreis", label: "Türen" },
              { price: "Förderfähig", label: "Fenster" },
              { price: "Individuell", label: "Terrassenüberdachung" }
            ];

            return (
              <div 
                key={service.id}
                className={`bg-white p-8 border rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all ${
                  isExpanded ? 'border-zinc-900 ring-2 ring-zinc-900/10' : 'border-slate-150'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">{service.title}</h3>
                    <span className="px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider" style={{ backgroundColor: "#1e293b11", color: "#1e293b" }}>
                      {startingTags[idx].price}
                    </span>
                  </div>
                  
                  {/* Subtle Image presentation inside card */}
                  <div className="h-32 w-full bg-slate-100 mb-4 overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveDetailId(activeDetailId === service.id ? null : service.id)}
                    className="text-slate-500 hover:text-zinc-900 text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    {isExpanded ? 'Details verbergen' : 'Details einblenden'}
                  </button>
                  
                  <button
                    onClick={() => handleCtaClick(service.id)}
                    className="text-white hover:brightness-110 px-4 py-2 font-bold text-[10px] uppercase tracking-wider transition hover:shadow-md flex items-center gap-1 shrink-0 cursor-pointer"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    <span>Anfragen</span>
                    <ArrowRight size={10} style={{ color: "#ffffff" }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Product Detail Area */}
        <AnimatePresence mode="wait">
          {activeDetailId && (
            <motion.div
              key={activeDetailId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden"
              id="active-service-detail-panels"
            >
              {(() => {
                const service = SERVICES.find(s => s.id === activeDetailId) as ServiceItem;
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center space-x-3 text-[11px] uppercase tracking-widest font-mono">
                        <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded text-zinc-300 font-bold">
                          DETAILED INFO
                        </span>
                        <span className="text-zinc-450 text-zinc-450 text-zinc-400 flex items-center">
                          <Check size={12} className="mr-1 text-zinc-400" />
                          Garantierte Premium-Qualität
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-none font-sans">
                        {service.title} im Detail
                      </h3>
                      
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-zinc-800 text-zinc-300 text-[10px] shrink-0 mt-0.5 font-bold">
                              ✓
                            </span>
                            <span className="text-zinc-300 text-xs font-medium leading-normal">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col space-y-6 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-white/5 justify-center self-stretch">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                        Vorteile unseres Fachbetriebs:
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 text-xs">
                          <div className="text-zinc-400 font-bold mt-0.5">✓</div>
                          <div>
                            <p className="font-bold text-slate-100 uppercase tracking-wider">Regionale Meisterbetreuung</p>
                            <p className="text-zinc-400 mt-1">Wir betreuen Sie permanent vor Ort im Raum Mittelhessen.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 text-xs">
                          <div className="text-zinc-400 font-bold mt-0.5">✓</div>
                          <div>
                            <p className="font-bold text-slate-100 uppercase tracking-wider">Verbindlicher Festpreis</p>
                            <p className="text-zinc-400 mt-1">Zuverlässiges Angebot ohne versteckte Bearbeitungsgebühren.</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCtaClick(service.id)}
                        className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-3.5 tracking-wider text-xs uppercase hover:brightness-110 active:scale-95 transition-all text-center rounded-none cursor-pointer"
                      >
                        Projekt {service.title} anfragen
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
}
