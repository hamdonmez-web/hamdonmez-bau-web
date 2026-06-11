import { Sparkles, Calendar, TrendingDown, ShieldCheck } from 'lucide-react';
import { SUMMER_PROMO } from '../data';

export default function Promo() {
  const handleScrollToForm = () => {
    const formElement = document.querySelector('#anfrage');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="angebote" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient gradients matching the modernist look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.1),transparent_50%)]" />
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles size={13} className="text-amber-500" />
            <span>Exklusiver Planungsvorteil 2026</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight font-sans">
            Aktuelle Angebote & Statik-Vorteile
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-light max-w-xl mx-auto">
            Präzise Vorbereitung spart bares Geld und verkürzt Bauzeiten. Nutzen Sie unsere laufenden Aktionen für Ihr Bauvorhaben im Raum Gießen.
          </p>
        </div>

        {/* Promo Showcase card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="promotion-campaign-card">
          
          {/* Main Campaign Visual & Text Card */}
          <div className="lg:col-span-8 bg-slate-950/80 border border-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur-md flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 font-mono text-xs font-black uppercase tracking-wider py-2.5 px-6 rounded-bl-2xl text-white" style={{ backgroundColor: "#d97706" }}>
              {SUMMER_PROMO.badge}
            </div>

            <div className="space-y-4">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs block">
                {SUMMER_PROMO.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight font-sans">
                {SUMMER_PROMO.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light max-w-3xl">
                {SUMMER_PROMO.description}
              </p>
            </div>

            {/* Side-by-side Planning Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              
              {/* Standard Glazing / Competitor setup */}
              <div className="bg-slate-900/40 p-5 border border-white/5">
                <span className="text-slate-500 text-[10px] uppercase font-semibold font-mono tracking-wider">Einzelbeauftragung</span>
                <p className="text-base font-bold text-slate-305 mt-1 text-slate-300">Externe Statik & Gutachten</p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Statische Vorplanung:</span>
                    <span className="font-semibold">ca. 950 € Zuzahlung</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3D-Geländevermessung:</span>
                    <span className="font-semibold">ca. 550 € Zuzahlung</span>
                  </div>
                  <div className="flex justify-between text-red-400/90 font-medium">
                    <span>Schnittstellenrisiko:</span>
                    <span>Verantwortung gesplittet</span>
                  </div>
                </div>
              </div>

              {/* Action Double Upgrade */}
              <div className="bg-amber-600/10 p-5 border border-amber-500/20 relative overflow-hidden" style={{ backgroundColor: "rgba(217, 119, 6, 0.05)" }}>
                <div className="absolute right-3 top-3 bg-amber-600 text-white font-mono font-bold text-[9px] uppercase py-0.5 px-2 rounded">
                  GRAZIS INBEGRIFFEN
                </div>
                <span className="text-amber-400 text-[10px] uppercase font-semibold font-mono tracking-wider">Zenit Bau Vorteil</span>
                <p className="text-base font-bold text-amber-300 mt-1">Vollständiges Statik-Paket</p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Tragwerksvorplanung:</span>
                    <span className="font-semibold text-white">0 € (Im Auftragswert)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Präzisions-Gutachten:</span>
                    <span className="font-semibold text-white">0 € (Im Auftragswert)</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>Einsparung & Planbarkeit:</span>
                    <span>Über 1.500 € Sofort-Ersparnis</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom details and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center text-slate-400 text-xs">
                <Calendar size={14} className="text-amber-500 mr-2" />
                <span>Gültig für Angebote bis zum: <strong className="text-white font-semibold">{SUMMER_PROMO.validUntil}</strong></span>
              </div>
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 hover:brightness-110 active:scale-95 transition-all text-center rounded-none cursor-pointer"
                style={{ backgroundColor: "#d97706" }}
              >
                Vorteil sichern
              </button>
            </div>
          </div>

          {/* Pricing Highlight Card */}
          <div className="lg:col-span-4 bg-slate-950 border border-white/5 rounded-3xl p-8 flex flex-col justify-between text-center relative overflow-hidden">
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-amber-500 tracking-wider font-extrabold uppercase">
                Ersparnis-Wert
              </span>
              
              <div className="inline-flex w-24 h-24 bg-slate-900 border border-white/5 rounded-full items-center justify-center shadow-inner">
                <div className="p-2">
                  <span className="text-2xl font-extrabold text-white block leading-none">1.500€</span>
                  <span className="text-[9px] text-amber-500 font-mono tracking-wider uppercase font-black">Spargutschein</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-light text-white tracking-tight">Planungssicherheit</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Durch den kostenfreien Statik- und Vermessungsservice legen wir den Grundstein für eine <strong className="text-white font-semibold">fehlerfreie und terminoptimierte Realisierung</strong> Ihres Rohbaus oder Gartenvorhabens.
                </p>
              </div>
            </div>

            {/* Advantage List */}
            <div className="space-y-3 text-left py-4 border-t border-b border-white/5 my-6">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <ShieldCheck size={13} className="text-amber-500 animate-pulse" />
                <span className="text-[11px]">TÜV-geprüfte Statik-Modelle</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <TrendingDown size={13} className="text-amber-500" />
                <span className="text-[11px]">Volle Kostensicherheit ab Minute 1</span>
              </div>
            </div>

            <button
              onClick={handleScrollToForm}
              className="w-full text-zinc-900 font-bold bg-white hover:bg-slate-100 py-4 tracking-wider text-xs uppercase active:scale-95 transition-all text-center rounded-none cursor-pointer"
            >
              Unverbindlich Anfragen
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
