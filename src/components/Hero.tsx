import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, ThumbsUp } from 'lucide-react';
import { IMAGE_ASSETS } from '../data';

export default function Hero() {
  const handleScrollToForm = () => {
    const formElement = document.querySelector('#anfrage');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToProducts = () => {
    const productsElement = document.querySelector('#dienstleistungen');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative bg-[#383e42] min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Background Image with optimized dark overlay for perfect text contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGE_ASSETS.hero}
          alt="Fenster und Haustür Modern Gießen"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#383e42] via-[#383e42]/95 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#383e42] via-transparent to-[#383e42]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-8 space-y-8 text-left">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-blue-600/15 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-450 text-xs font-semibold uppercase tracking-wider text-blue-300"
          >
            <ShieldCheck size={14} className="text-blue-400" />
            <span>Ihr Montageteam für Gießen & Mittelhessen</span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans"
              id="hero-main-title"
            >
              Hochwertige Fenster & Türen in <span className="text-blue-400 font-bold">Gießen</span> und Umgebung
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light"
              id="hero-subtitle"
            >
              Professionelle Beratung, präzises Aufmaß und fachgerechte RAL-Montage aus einer Hand. Steigern Sie Energieeffizienz und Einbruchschutz Ihrer Immobilie.
            </motion.p>
          </div>

          {/* Trust Indicators / Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2.5 text-slate-200 bg-white/5 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
              <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
              <span className="text-sm font-medium tracking-wide">3-fach Verglasung</span>
            </div>
            <div className="flex items-center space-x-2.5 text-slate-200 bg-white/5 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
              <ShieldCheck size={18} className="text-blue-400 shrink-0" />
              <span className="text-sm font-medium tracking-wide">Einbruchschutz RC2/RC3</span>
            </div>
            <div className="flex items-center space-x-2.5 text-slate-200 bg-white/5 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
              <ThumbsUp size={18} className="text-blue-400 shrink-0" />
              <span className="text-sm font-medium tracking-wide">100% Festpreisgarantie</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
          >
            <button
              onClick={handleScrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 px-8 rounded-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center space-x-2.5"
              id="hero-cta-btn"
            >
              <span>Kostenloses Angebot anfordern</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={handleScrollToProducts}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-lg text-base font-semibold transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Unsere Leistungen ansehen</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Right Floating Badge (Trust Accent) */}
        <div className="lg:col-span-4 hidden lg:flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#242A2E]/95 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full max-w-sm shadow-2xl text-center space-y-6"
          >
            <div className="inline-flex w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 items-center justify-center mb-2 mx-auto">
              <ShieldCheck size={36} />
            </div>
            <div>
              <p className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">Zertifizierte Sicherheit</p>
              <h3 className="text-xl font-bold text-white mt-1 font-sans">KFW-Förderung 2026</h3>
              <p className="text-sm text-slate-400 mt-2">
                Viele unserer energetischen Fenster & Türen sind förderfähig. Wir beraten Sie gern bei der Antragstellung!
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <span className="text-xs text-slate-400 block">Regionaler Handwerks-Partner für</span>
              <span className="text-sm text-slate-200 font-semibold font-sans mt-1 block">Gießen, Linden, Pohlheim & Marburg</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
