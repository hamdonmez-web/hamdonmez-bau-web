import { ArrowRight, ShieldCheck, CheckCircle2, ThumbsUp, Zap } from 'lucide-react';
import { IMAGE_ASSETS } from '../data';

export default function Hero() {
  const handleScrollToForm = () => {
    const formElement = document.querySelector('#anfrage');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToProducts = () => {
    const productsElement = document.querySelector('#produkte');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative bg-[#ffffff] overflow-hidden py-24 sm:py-32 border-b border-slate-100">
      {/* Decorative subtle background geometric elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50/70 -skew-x-12 origin-top-right pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[20rem] h-[20rem] rounded-full bg-slate-50/40 blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Elegant Modern Typography */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-150 px-4 py-1.5 rounded-none text-slate-700 text-xs font-bold uppercase tracking-[0.2em]">
            <Zap size={13} className="text-amber-600" />
            <span>Bau- & Sanierungspartner Mittelhessen</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-light text-slate-900 leading-tight tracking-tight font-sans">
              Präzision und Moderne <span className="font-semibold block text-slate-900 mt-2">im Hoch- & Tiefbau</span>
            </h1>
            <p className="text-[#475569] text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              Ihr zuverlässiges Bauunternehmen für Gießen und Umgebung. Wir realisieren Ihre Wohnträume, Sanierungen und Erdarbeiten mit maximaler Präzision, schlichtem Design und deutscher Fachkompetenz.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
            {[
              { icon: Zap, text: "Termintreue & Effizienz", color: "#d97706" },
              { icon: ShieldCheck, text: "Premium Qualität", color: "#d97706" },
              { icon: ThumbsUp, text: "Maximale Transparenz", color: "#d97706" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-slate-705 text-slate-700 bg-white border border-slate-150 p-3 shadow-xs">
                <item.icon size={15} style={{ color: item.color }} className="shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={handleScrollToForm}
              className="px-8 py-4 text-white font-bold text-xs uppercase tracking-wider hover:bg-opacity-90 hover:shadow-lg transition-all active:scale-95 shadow-md flex items-center justify-center space-x-2"
              style={{ backgroundColor: "#0f172a" }}
            >
              <span>Projekt starten / Anfrage</span>
              <ArrowRight size={13} style={{ color: "#d97706" }} />
            </button>
            <button
              onClick={handleScrollToProducts}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <span>Dienstleistungen</span>
            </button>
          </div>

        </div>

        {/* Right Column - Sleek floating badge & design presentation */}
        <div className="lg:col-span-5 hidden lg:flex justify-end relative">
          <div className="relative w-full max-w-[340px] aspect-[4/5] bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shadow-md">
            <img
              src={IMAGE_ASSETS.hero}
              alt="Zenit Bau - Modernist Architectural Construction Site"
              className="w-full h-full object-cover filter brightness-95 opacity-90 transition-transform duration-[10s] hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Absolute overlay for geometry balance theme */}
            <div className="absolute inset-0 bg-[#0f172a]/5 mix-blend-overlay" />
            
            {/* Floating Trust Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-6 shadow-xl space-y-3 text-left">
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block">KOMPETENZ AUS HESSEN</span>
              <h4 className="text-sm font-semibold text-slate-900 leading-snug">Philosophie & Team</h4>
              <p className="text-[11px] text-[#475569] leading-normal">
                ✓ Festpreisgarantie und minutiöse Termintreue für maximale Budgetsicherheit bei Zenit Bau.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
