import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { checkZipCoverage } from '../data';
import { Check, Mail, Phone, MapPin, ClipboardList, AlertCircle, Sparkles, Send, ArrowRight } from 'lucide-react';
import { InquiryFormData } from '../types';

interface AnfrageFormProps {
  selectedService: 'Fenster' | 'Haustür' | 'Montage/Service' | 'Sonstiges';
  setSelectedService: (service: 'Fenster' | 'Haustür' | 'Montage/Service' | 'Sonstiges') => void;
}

export default function AnfrageForm({ selectedService, setSelectedService }: AnfrageFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    city: '',
    serviceType: selectedService,
    details: '',
    gdprConsent: false,
  });

  // Keep state synchronized with parents chosen service type
  useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceType: selectedService }));
  }, [selectedService]);

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [zipResult, setZipResult] = useState<{ isInArea: boolean; recommendedCity: string; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<InquiryFormData[]>([]);
  const [isFormspreeActive, setIsFormspreeActive] = useState(false);
  const [formspreeId, setFormspreeId] = useState('YOUR_FORMSPREE_ID');

  // Load existing test submissions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('giessen_fenster_inquiries');
    if (saved) {
      try {
        setSubmittedInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    // Clear specific error upon typing
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Dynamic Gießen Area Postal code autocomplete/feedback
    if (name === 'zipCode') {
      const cleanZip = value.replace(/\D/g, '').substring(0, 5);
      setFormData((prev) => ({ ...prev, zipCode: cleanZip }));
      
      if (cleanZip.length >= 3) {
        const result = checkZipCoverage(cleanZip);
        setZipResult(result);
        if (result.isInArea && result.recommendedCity && !formData.city) {
          setFormData((prev) => ({ ...prev, city: result.recommendedCity }));
        }
      } else {
        setZipResult(null);
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Bitte geben Sie Ihren vollständigen Namen ein.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.phone.trim() || formData.phone.trim().replace(/\D/g, '').length < 6) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer an (z.B. für Rückfragen zum Aufmaß).';
    }

    if (!formData.zipCode.trim() || formData.zipCode.length !== 5) {
      newErrors.zipCode = 'Bitte geben Sie eine 5-stellige deutsche Postleitzahl ein.';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Sie müssen den Datenschutzbestimmungen zustimmen, um fortzufahren.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable submitting delay
    setTimeout(() => {
      const updatedInquiries = [formData, ...submittedInquiries];
      setSubmittedInquiries(updatedInquiries);
      localStorage.setItem('giessen_fenster_inquiries', JSON.stringify(updatedInquiries));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      zipCode: '',
      city: '',
      serviceType: 'Fenster',
      details: '',
      gdprConsent: false,
    });
    setZipResult(null);
    setIsSuccess(false);
  };

  return (
    <section id="anfrage" className="py-24 bg-slate-905 text-white scroll-mt-20" style={{ backgroundColor: '#383e42' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Left Pillar: Interactive context */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="font-mono text-xs text-blue-400 tracking-wider font-extrabold uppercase bg-blue-900/20 border border-blue-500/25 px-3 py-1 rounded-full inline-block">
                Kostenlose Anfrage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Lassen Sie sich unverbindlich beraten
              </h2>
              <p className="text-slate-350 font-light leading-relaxed text-sm sm:text-base">
                Füllen Sie einfach unser Online-Formular aus. Unser Gießener Experte prüft Ihre Angaben sofort, setzt sich zwecks Beratung mit Ihnen in Verbindung und erstellt ein präzises, transparentes Festpreis-Angebot für Sie.
              </p>
            </div>

            {/* Quality Check List */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-white font-bold text-base flex items-center">
                <Sparkles size={18} className="text-blue-400 mr-2 shrink-0" />
                <span>Ihr Ablauf bei uns:</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#121618] text-blue-400 text-xs font-bold mr-3 mt-0.5 shrink-0 border border-white/5">1</div>
                  <div>
                    <strong className="text-sm text-slate-100 block">Formular ausfüllen</strong>
                    <span className="text-xs text-slate-400">Teilen Sie uns Ihre Wünsche mit (Dauer weniger als 2 Min.).</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#121618] text-blue-400 text-xs font-bold mr-3 mt-0.5 shrink-0 border border-white/5">2</div>
                  <div>
                    <strong className="text-sm text-slate-100 block">Kostenloses Telefonat</strong>
                    <span className="text-xs text-slate-400">Wir klären alle technischen Fragen und stimmen einen Aufmaßtermin ab.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#121618] text-blue-400 text-xs font-bold mr-3 mt-0.5 shrink-0 border border-white/5">3</div>
                  <div>
                    <strong className="text-sm text-slate-100 block">Unverbindliches Festpreisangebot</strong>
                    <span className="text-xs text-slate-400">Sie erhalten ein verbindliches schriftliches Angebot ohne versteckte Kosten.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact Banner */}
            <div className="bg-[#242A2E] border border-white/10 rounded-2xl p-6 space-y-4">
              <p className="text-xs text-slate-400 uppercase font-mono tracking-wider font-bold">Direkte Hotline für Schnellentschlossene:</p>
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone size={20} className="animate-pulse" />
                </div>
                <div>
                  <a href="tel:+49641123456" className="text-xl font-bold text-white block hover:text-blue-400 transition-colors">
                    0641 / 123 456
                  </a>
                  <span className="text-xs text-slate-400 block">Montag - Samstag: 08:00 - 18:00 Uhr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Pillar: Actual interactive inquiry submission form */}
          <div className="lg:col-span-7 bg-[#242A2E] p-6 sm:p-10 rounded-3xl border border-white/10 relative shadow-2xl" id="interactive-inquiry-box">
            
            {/* Top Configurator Selector for Formspree simulation vs real Formspree action */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <ClipboardList size={14} className="text-blue-400" />
                <span>Simulations-Modus (Formular testen)</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isFormspreeActive} 
                  onChange={() => setIsFormspreeActive(!isFormspreeActive)} 
                  className="sr-only peer" 
                />
                <div className="w-9 h-5 bg-black/40 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-500 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 peer-checked:after:bg-slate-900"></div>
                <span className="ml-2 text-[11px] text-slate-300 font-medium font-sans">Echt-Übermittlung</span>
              </label>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="inquiry-form-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Real Formspree HTML form if selected, otherwise fallback React simulation form */}
                  <form
                    onSubmit={isFormspreeActive ? undefined : handleSubmit}
                    action={isFormspreeActive ? `https://formspree.io/f/mpqelgod` : undefined}
                    method={isFormspreeActive ? 'POST' : undefined}
                    className="space-y-6"
                    id="giessen-anfrage-form"
                  >
                    {isFormspreeActive && (
                      <div className="bg-sky-500/10 border border-sky-400/25 p-4 rounded-xl space-y-3.5 mb-6">
                        <div className="flex items-start">
                          <MapPin size={16} className="text-sky-400 mr-2 shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-250 leading-relaxed">
                            <strong>Echt-Übermittlungsmodus aktiv:</strong> Wenn Sie diese Seite auf Ihre eigene GitHub Pages Präsenz deployen, wird dieses Formular direkt über Ihre angegebene <strong>Formspree ID</strong> an Ihr E-Mail-Postfach gesendet.
                          </p>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-sky-400 mb-1 tracking-wider">Formspree Endpunkt ID:</label>
                          <input 
                            name="_formspree_id"
                            type="text" 
                            value={formspreeId} 
                            onChange={(e) => setFormspreeId(e.target.value)} 
                            className="bg-slate-950 border border-slate-800 text-white text-xs rounded px-2.5 py-1 w-full font-mono focus:border-sky-500 focus:outline-none"
                            placeholder="z.B. xgepobey"
                          />
                        </div>
                      </div>
                    )}

                    {/* Multi-row layout for Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Name, Vorname <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-950 border text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 ${
                            errors.fullName ? 'border-red-500' : 'border-slate-800 focus:border-sky-500'
                          }`}
                          placeholder="z. B. Dr. Sabine Müller"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          E-Mail-Adresse <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-950 border text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 ${
                            errors.email ? 'border-red-500' : 'border-slate-800 focus:border-sky-500'
                          }`}
                          placeholder="sabine.mueller@example.de"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Phone & Service selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Phone field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Telefonnummer <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-950 border text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 ${
                            errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-sky-500'
                          }`}
                          placeholder="z. B. 0641 / 987654"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-400 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Dropdown service categorization field */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Anfrage-Bereich
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 appearance-none cursor-pointer"
                        >
                          <option value="Fenster">Hocheffiziente Fenster</option>
                          <option value="Haustür">Premium-Haustüren</option>
                          <option value="Montage/Service">Zertifizierte Montage / Reparatur</option>
                          <option value="Sonstiges">Sonstiges</option>
                        </select>
                      </div>

                    </div>

                    {/* Zip code (PLZ) and City */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                      
                      {/* Zip PLZ field */}
                      <div className="sm:col-span-5 space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Postleitzahl (PLZ) <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          maxLength={5}
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={`w-full bg-black/40 border text-sm font-mono rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                            errors.zipCode ? 'border-red-500' : 'border-white/10 focus:border-blue-600'
                          }`}
                          placeholder="z. B. 35390"
                        />
                        {errors.zipCode && (
                          <p className="text-xs text-red-500 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.zipCode}
                          </p>
                        )}
                      </div>

                      {/* City/Ort field */}
                      <div className="sm:col-span-7 space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Ort / Stadt
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-black/40 border border-white/10 text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                          placeholder="z. B. Gießen"
                        />
                      </div>

                    </div>

                    {/* Render live district and vicinity check feedback */}
                    <AnimatePresence>
                      {zipResult && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`text-xs p-3.5 rounded-xl border flex items-start space-x-2.5 ${
                            zipResult.isInArea 
                              ? 'bg-blue-600/10 border-blue-500/25 text-blue-200' 
                              : 'bg-amber-500/5 border-amber-500/10 text-amber-300'
                          }`}
                        >
                          <MapPin size={16} className={`${zipResult.isInArea ? 'text-blue-400' : 'text-amber-400'} shrink-0 mt-0.5`} />
                          <div>
                            <span className="font-bold">{zipResult.recommendedCity || 'Service-Prüfung'}</span>: {zipResult.message}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Message Details text field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Ihre Nachricht / Projektdetails <span className="text-slate-500 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-black/40 border border-white/10 text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="z. B. Maße der Haustür, Anzahl der Fenster, gewünschte Dreifachverglasung, ca. Baujahr der Immobilie..."
                      />
                    </div>

                    {/* GDPR Consent checkbox block */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          id="gdprConsent"
                          name="gdprConsent"
                          type="checkbox"
                          checked={formData.gdprConsent}
                          onChange={handleInputChange}
                          className="h-4.5 w-4.5 rounded text-blue-600 focus:ring-blue-600/25 bg-black/40 border-white/10 mt-0.5 cursor-pointer shrink-0"
                        />
                        <label htmlFor="gdprConsent" className="ml-3 text-xs text-slate-300 leading-relaxed cursor-pointer select-none">
                          Ich stimme den <span className="text-blue-400 hover:underline">Datenschutzbestimmungen</span> zu. Meine Daten werden ausschließlich zur Kontaktaufnahme bzgl. dieser Anfrage verarbeitet. <span className="text-blue-400 font-bold">*</span>
                        </label>
                      </div>
                      {errors.gdprConsent && (
                        <p className="text-xs text-red-400 flex items-center mt-1">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.gdprConsent}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-4 rounded-xl cursor-pointer shadow-xl shadow-blue-600/15 flex items-center justify-center space-x-2.5 transition-all text-sm uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Ihre Anfrage wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Anfrage unverbindlich senden</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-slate-400 text-center">
                      Durch Klicken auf den Button senden Sie eine unverbindliche Anfrage. Es kommt kein direkter Kaufvertrag zustande.
                    </p>
                  </form>
                </motion.div>
              ) : (
                /* Dynamic Success Message box */
                <motion.div
                  key="inquiry-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-10"
                >
                  <div className="inline-flex w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-400 items-center justify-center mx-auto mb-2">
                    <Check size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white font-sans tracking-tight">Anfrage erfolgreich übermittelt!</h3>
                    <p className="text-sm text-slate-350 max-w-lg mx-auto leading-relaxed">
                      Vielen Dank, <strong className="text-white">{formData.fullName}</strong>. Unser regionaler Fachberater für <strong className="text-white">{zipResult?.recommendedCity || formData.city || 'Gießen'}</strong> wurde benachrichtigt und wird Sie in Kürze kontaktieren.
                    </p>
                  </div>

                  {/* Summary Box resembling a nice Quotation Inquiry Ticket */}
                  <div className="bg-black/30 border border-white/10 rounded-2xl max-w-lg mx-auto text-left overflow-hidden font-sans">
                    <div className="bg-[#121618] border-b border-white/10 py-3.5 px-5 flex justify-between items-center text-xs text-slate-350 font-mono">
                      <span>BELEG-NR: GIE-{(100000 + Math.floor(Math.random() * 900000))}</span>
                      <span className="text-blue-400">✓ PRÜFUNG ERFOLGREICH</span>
                    </div>
                    
                    <div className="p-5 space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-400">Bereich:</span>
                        <span className="font-semibold text-white">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-400">Telefon:</span>
                        <span className="font-semibold text-white">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-400">E-Mail:</span>
                        <span className="font-semibold text-white text-right break-all">{formData.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-400">Gebiet:</span>
                        <span className="font-semibold text-white">{formData.zipCode} {formData.city || zipResult?.recommendedCity}</span>
                      </div>
                      {formData.details && (
                        <div className="pt-1.5">
                          <span className="text-slate-400 text-xs block mb-1">Details:</span>
                          <p className="text-slate-305 text-xs font-light italic leading-relaxed bg-black/40 p-2.5 rounded border border-white/5">
                            "{formData.details}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto bg-[#383e42] hover:bg-black/20 text-slate-250 text-xs font-bold py-3.5 px-6 rounded-lg transition-all border border-white/10 cursor-pointer"
                    >
                      Neue Anfrage stellen
                    </button>
                    <a
                      href={`mailto:hamdonmez@gmail.com?subject=Inquiry Gießen Fenster-Türen&body=Hallo,%0D%0A%0D%0Anachfolgende Anfrage wurde generiert:%0D%0AName: ${formData.fullName}%0D%0ATelefon: ${formData.phone}%0D%0APLZ: ${formData.zipCode}%0D%0ABereich: ${formData.serviceType}%0D%0ADetails: ${formData.details}`}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3.5 px-6 rounded-lg text-center cursor-pointer shadow-lg inline-flex items-center justify-center font-sans tracking-wide"
                    >
                      Kopie an E-Mail senden
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Demo Submissions lead history row (Optional Local Sandbox view for the admin to debug in preview!) */}
        {submittedInquiries.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-16" id="lead-inbox-history">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <h4 className="text-md sm:text-lg font-bold text-white flex items-center">
                  <ClipboardList size={18} className="text-blue-400 mr-2" />
                  <span>Ihre Test-Anfragen (Lokal gespeichert)</span>
                </h4>
                <p className="text-xs text-slate-400">Diese Liste existiert nur in Ihrer Browser-Vorschau zur Kontrolle des Anfrage-Funnels.</p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('giessen_fenster_inquiries');
                  setSubmittedInquiries([]);
                }}
                className="text-slate-400 hover:text-white text-xs hover:underline border border-white/10 hover:border-white/25 py-1 px-3.5 rounded bg-black/25"
              >
                Liste leeren
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submittedInquiries.map((inq, index) => (
                <div key={index} className="bg-[#242A2E] border border-white/10 p-6 rounded-2xl relative">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">{inq.serviceType}</span>
                    <span className="font-mono text-[9px] text-slate-400 uppercase">{inq.zipCode} {inq.city}</span>
                  </div>
                  <h5 className="font-bold text-white text-sm sm:text-base truncate">{inq.fullName}</h5>
                  <p className="text-xs text-slate-400 font-mono mt-1">{inq.email}</p>
                  <p className="text-xs text-slate-400 font-mono">{inq.phone}</p>
                  {inq.details && (
                    <p className="text-xs text-slate-350 italic mt-3 bg-black/40 p-2 rounded border border-white/5 truncate">
                      "{inq.details}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
