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
          
          <div className="inline-flex items-center space-x-2 bg-zinc-50 border border-zinc-200 px-4 py-1.5 rounded-none text-zinc-800 text-xs font-bold uppercase tracking-[0.2em]">
            <Zap size={13} className="text-zinc-600" />
            <span>Bau- & Sanierungspartner Mittelhessen</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-light text-zinc-900 leading-tight tracking-tight font-sans">
              Präzision und Moderne <span className="font-semibold block text-zinc-900 mt-2">bei Ihren Elementen</span>
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              Ihr zuverlässiger Fachbetrieb für Gießen und Umgebung. Wir realisieren hochwertige Türen, energieeffiziente Fenster und langlebige Terrassenüberdachungen mit maximaler Präzision und meisterhaftem Service.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
            {[
              { icon: Zap, text: "Termintreue & Effizienz", color: "#475569" },
              { icon: ShieldCheck, text: "Premium Qualität", color: "#475569" },
              { icon: ThumbsUp, text: "Maximale Transparenz", color: "#475569" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-zinc-800 bg-white border border-zinc-200 p-3 shadow-xs">
                <item.icon size={15} style={{ color: item.color }} className="shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={handleScrollToForm}
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md flex items-center justify-center space-x-2"
            >
              <span>Projekt starten / Anfrage</span>
              <ArrowRight size={13} className="text-white" />
            </button>
            <button
              onClick={handleScrollToProducts}
              className="px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
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
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-zinc-200 p-6 shadow-xl space-y-3 text-left">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest block">KOMPETENZ AUS HESSEN</span>
              <h4 className="text-sm font-semibold text-zinc-900 leading-snug">Philosophie & Team</h4>
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
