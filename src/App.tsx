import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Promo from './components/Promo';
import AnfrageForm from './components/AnfrageForm';
import Footer from './components/Footer';
import { FAQ } from './data';
import { HelpCircle, ChevronDown, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<'Fenster' | 'Haustür' | 'Montage/Service' | 'Sonstiges'>('Fenster');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSelectServiceFromCard = (service: 'Fenster' | 'Haustür' | 'Montage/Service' | 'Sonstiges') => {
    setSelectedService(service);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 text-slate-950 font-sans selection:bg-sky-500/10 selection:text-sky-900 scroll-smooth">
      {/* Navbar segment */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        
        {/* Hero Banner Section */}
        <Hero />

        {/* Dynamic Service Grid Section */}
        <Products onSelectService={handleSelectServiceFromCard} />

        {/* Promo Campaign Section */}
        <Promo />

        {/* FAQ Accordion Section */}
        <section className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <span className="font-mono text-xs text-sky-500 bg-sky-50 px-3.5 py-1.5 rounded-full inline-block font-bold">
                Fragen & Antworten
              </span>
              <h2 className="text-3xl font-extrabold text-[#1a2332] tracking-tight font-sans">
                Häufig gestellte Fragen (FAQ)
              </h2>
              <p className="text-slate-550 text-sm sm:text-base leading-relaxed">
                Hier finden Sie verlässliche Antworten rund um Beratung, Aufmaß, Wärmedämmung und Bestellung bei Zenit Bau.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4" id="faq-accordion-list">
              {FAQ.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen 
                        ? 'bg-slate-50 border-slate-300 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-bold text-[#1a2332] text-sm sm:text-base pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-sky-500' : ''
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
                          <div className="p-6 text-sm sm:text-base text-slate-600 leading-relaxed font-light bg-white/70">
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

        {/* Lead/Inquiry Form Section */}
        <AnfrageForm 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />

      </main>

      {/* Footer segment */}
      <Footer />
    </div>
  );
}
