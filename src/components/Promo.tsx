import { Sparkles, Calendar, TrendingDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { SUMMER_PROMO } from '../data';

export default function Promo() {
  const handleScrollToForm = () => {
    const formElement = document.querySelector('#anfrage');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="angebote" className="py-24 bg-slate-905 text-white relative overflow-hidden" style={{ backgroundColor: '#2e3337' }}>
      {/* Visual Ambient Grid / Ornaments */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.1),transparent_50%)]" />
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center space-x-1.5 bg-blue-600/15 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <Sparkles size={14} className="text-blue-400" />
            <span>Exklusiver Preisvorteil</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Aktuelle Angebote & Energie-Sparaktionen
          </h2>
          <p className="text-slate-350 text-lg font-light">
            Modernere Fenster sparen bares Geld. Nutzen Sie unsere laufenden Angebote, um Ihr Modernisierungsprojekt im Raum Gießen noch wirtschaftlicher zu verwirklichen.
          </p>
        </div>

        {/* Promo Showcase card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="promotion-campaign-card">
          
          {/* Main Campaign Visual & Text Card */}
          <div className="lg:col-span-8 bg-[#242A2E]/80 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider py-2 px-6 rounded-bl-2xl">
              {SUMMER_PROMO.badge}
            </div>

            <div className="space-y-6">
              <span className="text-blue-300 font-bold uppercase tracking-wider text-xs sm:text-sm block">
                {SUMMER_PROMO.subtitle}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
                {SUMMER_PROMO.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-light max-w-3xl">
                {SUMMER_PROMO.description}
              </p>
            </div>

            {/* Side-by-side Double vs Triple Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              
              {/* Standard Glazing */}
              <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                <span className="text-slate-400 text-xs uppercase font-semibold font-mono">Bisheriger Standard</span>
                <p className="text-lg font-bold text-slate-300 mt-1">Zweifachverglasung</p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Dämmwert Ug:</span>
                    <span className="font-semibold text-slate-350">1,1 W/(m²K)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lärmminderung:</span>
                    <span className="font-semibold text-slate-350">ca. 32 dB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heizkosten-Erhöhung:</span>
                    <span className="font-semibold text-red-400">+15% Energieverlust</span>
                  </div>
                </div>
              </div>

              {/* Action Double Upgrade */}
              <div className="bg-blue-600/10 p-5 rounded-xl border border-blue-500/25 relative overflow-hidden">
                <div className="absolute right-3 top-3 bg-blue-600 text-white font-mono font-bold text-[10px] uppercase py-0.5 px-2 rounded">
                  GRATIS UPGRADE
                </div>
                <span className="text-blue-300 text-xs uppercase font-semibold font-mono">Sommer Aktionspaket</span>
                <p className="text-lg font-bold text-blue-400 mt-1">Hocheffiziente 3-fach Verglasung</p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-200">
                  <div className="flex justify-between">
                    <span>Spitzen-Dämmwert Ug:</span>
                    <span className="font-semibold text-white">0,5 W/(m²K) (Bestwert!)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flüsterleise Umgebung:</span>
                    <span className="font-semibold text-white">ca. 42 dB (-90% Lärmpfinden)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heizkosten-Ersparnis:</span>
                    <span className="font-semibold text-emerald-400">Bis zu 180 € p.a. pro Haus</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom meta details and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center text-slate-400 text-xs sm:text-sm">
                <Calendar size={16} className="text-blue-400 mr-2" />
                <span>Gültig für Angebote bis zum: <strong className="text-white font-semibold">{SUMMER_PROMO.validUntil}</strong></span>
              </div>
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-blue-600/20 cursor-pointer text-center"
              >
                Vorteil sichern & unverbindlich anfragen
              </button>
            </div>
          </div>

          {/* Action Left/Right Card - Pricing Highlights */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#242A2E] to-[#1a2332] border border-white/10 rounded-3xl p-8 flex flex-col justify-between text-center relative overflow-hidden">
            <div className="space-y-6">
              <span className="font-mono text-xs text-blue-400 tracking-wider font-extrabold uppercase">
                Ersparnis-Kalkulation
              </span>
              <div className="inline-flex w-32 h-32 bg-black/40 border border-white/10 rounded-full items-center justify-center shadow-inner pt-2">
                <div>
                  <span className="text-4xl font-extrabold text-white block leading-none">{SUMMER_PROMO.discount.split(' ')[0]}</span>
                  <span className="text-xs text-blue-400 font-mono tracking-wider uppercase font-black">{SUMMER_PROMO.discount.split(' ')[1]}</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-white font-sans tracking-tight">Echte Einsparungen</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Durch das kostenfreie Dreifach-Glas Upgrade sparen Sie im Durchschnitt <strong className="text-white font-semibold">10% der Gesamtprojektkosten</strong> im Vergleich zu regulären Kaltprofilen mit Zweifachverglasung.
                </p>
              </div>
            </div>

            {/* Advantage List */}
            <div className="space-y-3 text-left py-4 border-t border-b border-white/10 my-6">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <ShieldCheck size={14} className="text-blue-400 animate-pulse" />
                <span>RAL Gütesicherer Einbau möglich</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <TrendingDown size={14} className="text-blue-400" />
                <span>Langfristiger Heizkostenschutz</span>
              </div>
            </div>

            <button
              onClick={handleScrollToForm}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg border border-transparent text-sm tracking-wide shadow-md transition-all cursor-pointer"
            >
              Unverbindliches Aufmaß buchen
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
