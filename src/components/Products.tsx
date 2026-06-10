import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ProductsProps {
  onSelectService: (serviceType: 'Fenster' | 'Haustür' | 'Montage/Service' | 'Sonstiges') => void;
}

export default function Products({ onSelectService }: ProductsProps) {
  const [activeDetailId, setActiveDetailId] = useState<string | null>('fenster');

  const getFormCategoryMapping = (id: string): 'Fenster' | 'Haustür' | 'Montage/Service' | 'Sonstiges' => {
    if (id === 'fenster') return 'Fenster';
    if (id === 'tueren') return 'Haustür';
    if (id === 'montage') return 'Montage/Service';
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
    <section id="dienstleistungen" className="py-24 bg-slate-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs text-blue-600 tracking-wider font-extrabold uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Unsere Leistungen & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Professionelle Fenster & Türen aus Meisterhand
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Wir betreuen Ihr Vorhaben im Raum Gießen vollumfänglich – von der ersten kompetenten Beratung vor Ort, über das millimetergenaue Aufmaß bis hin zur sauberen Fachmontage.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service) => {
            const isExpanded = activeDetailId === service.id;
            // Left border accents from Professional Polish guidelines
            const borderAccentClass = 
              service.id === 'fenster' ? 'border-l-4 border-blue-600 pl-4' :
              service.id === 'tueren' ? 'border-l-4 border-[#383e42] pl-4' :
              'border-l-4 border-green-600 pl-4';

            return (
              <motion.div
                key={service.id}
                layoutId={`card-container-${service.id}`}
                className={`bg-white rounded-2xl shadow-xl shadow-slate-100/50 border overflow-hidden flex flex-col transition-all h-full ${
                  isExpanded ? 'border-blue-600 ring-2 ring-blue-600/10' : 'border-slate-200 hover:border-slate-350'
                }`}
              >
                {/* Product Image section with styled badge */}
                <div className="relative h-60 overflow-hidden shrink-0 group">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {service.badge && (
                    <span className="absolute top-4 left-4 bg-[#383e42] text-xs text-blue-400 font-mono tracking-wider font-extrabold uppercase px-3 py-1.5 rounded-md shadow-md animate-pulse">
                      {service.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className={`space-y-3 ${borderAccentClass}`}>
                    <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet list */}
                  <ul className="space-y-2.5 text-slate-700 text-sm border-t border-slate-100 pt-5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Button row */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setActiveDetailId(activeDetailId === service.id ? null : service.id)}
                      className={`text-slate-600 hover:text-slate-900 border text-xs font-semibold py-2 px-3.5 rounded-lg flex items-center shadow-sm cursor-pointer transition-all ${
                        isExpanded ? 'bg-slate-100 border-slate-300' : 'bg-white border-slate-200'
                      }`}
                    >
                      {isExpanded ? 'Details verbergen' : 'Details einblenden'}
                    </button>
                    
                    <button
                      onClick={() => handleCtaClick(service.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center space-x-1 ml-auto shadow-md shadow-blue-500/10 cursor-pointer transition-colors"
                    >
                      <span>Anfragen</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Expanded Info Area (AnimatePresence) */}
        <AnimatePresence mode="wait">
          {activeDetailId && (
            <motion.div
              key={activeDetailId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#383e42] rounded-2xl p-8 sm:p-10 text-white shadow-xl shadow-slate-900/10 relative overflow-hidden"
              id="service-detail-tabs"
            >
              {/* Decorative accent graphic */}
              <div className="absolute right-0 top-0 w-80 h-85 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

              {/* Service details representation */}
              {(() => {
                const service = SERVICES.find(s => s.id === activeDetailId) as ServiceItem;
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id={`service-expanded-panel-${service.id}`}>
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs bg-blue-600/20 border border-blue-500/35 px-3 py-1 rounded text-blue-300 uppercase font-semibold">
                          Vertiefte Informationen
                        </span>
                        <span className="text-slate-300 text-xs flex items-center">
                          <ShieldCheck size={14} className="mr-1 text-blue-400" />
                          Garantierte Premium-Qualität
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-extrabold text-white tracking-tight leading-none font-sans">
                        {service.title} im Detail
                      </h3>
                      
                      <p className="text-slate-300 text-base leading-relaxed font-light">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start space-x-2.5">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600/20 text-blue-300 text-xs shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="text-slate-200 text-xs sm:text-sm font-medium leading-normal">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col space-y-6 bg-black/25 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-sm self-stretch justify-center">
                      <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                        <ShieldCheck size={20} className="text-blue-400" />
                        <span>Vorteile unseres Fachbetriebs:</span>
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-600/20 border border-blue-500/20 p-1 rounded mt-0.5 text-blue-300">
                            ✓
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-100 uppercase font-sans tracking-wide">Regionale Ansprechpartner</p>
                            <p className="text-xs text-slate-300 mt-1">Wir betreuen Sie vor Ort und sind auch bei zukünftigen Servicearbeiten schnell erreichbar.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-600/20 border border-blue-500/20 p-1 rounded mt-0.5 text-blue-300">
                            ✓
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-100 uppercase font-sans tracking-wide">Planungssicherheit</p>
                            <p className="text-xs text-slate-300 mt-1">Zuverlässiges Aufmaß und verbindliche Festpreise ohne versteckte Nachtragskosten.</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCtaClick(service.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-blue-600/15 cursor-pointer text-center text-sm tracking-wide transition-all"
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
