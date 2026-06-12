import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { checkZipCoverage } from '../data';
import { Check, Mail, Phone, MapPin, ClipboardList, AlertCircle, Sparkles, Send } from 'lucide-react';
import { InquiryFormData } from '../types';

interface AnfrageFormProps {
  selectedService: 'Türen' | 'Fenster' | 'Terrassenüberdachung' | 'Sonstiges';
  setSelectedService: (service: 'Türen' | 'Fenster' | 'Terrassenüberdachung' | 'Sonstiges') => void;
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

  // Keep state synchronized with parent's chosen service type
  useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceType: selectedService }));
  }, [selectedService]);

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [zipResult, setZipResult] = useState<{ isInArea: boolean; recommendedCity: string; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<InquiryFormData[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Load existing test submissions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('giessen_zenit_bau_inquiries');
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
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer an (z.B. für Rückfragen zur Planung/Statik).';
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/mpqelgod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.fullName,
          Email: formData.email,
          Telefon: formData.phone,
          Bereich: formData.serviceType,
          PLZ: formData.zipCode,
          Ort: formData.city || zipResult?.recommendedCity || '',
          Nachricht: formData.details,
        }),
      });

      if (response.ok) {
        const updatedInquiries = [formData, ...submittedInquiries];
        setSubmittedInquiries(updatedInquiries);
        localStorage.setItem('giessen_zenit_bau_inquiries', JSON.stringify(updatedInquiries));
        setIsSuccess(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitError(data.errors?.[0]?.message || data.error || 'Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
      }
    } catch (err) {
      setSubmitError('Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      zipCode: '',
      city: '',
      serviceType: 'Türen',
      details: '',
      gdprConsent: false,
    });
    setZipResult(null);
    setSubmitError(null);
    setIsSuccess(false);
  };

  return (
    <section id="anfrage" className="py-24 text-white scroll-mt-20 font-sans" style={{ backgroundColor: '#111214' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Left Pillar */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-[0.2em] font-extrabold uppercase bg-white/10 border border-white/20 px-4 py-1.5 rounded-none inline-block text-white">
                Kostenlose Anfrage
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                Lassen Sie sich unverbindlich beraten
              </h2>
              <p className="text-slate-300 font-light leading-relaxed text-xs sm:text-sm">
                Füllen Sie einfach unser Online-Formular aus. Unser Gießener Experte prüft Ihre Angaben sofort, setzt sich zwecks Beratung mit Ihnen in Verbindung und erstellt ein präzises, transparentes Festpreis-Angebot für Sie.
              </p>
            </div>

            {/* Quality Check List */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center">
                <Sparkles size={14} className="text-zinc-405 text-zinc-400 mr-2 shrink-0 animate-pulse" />
                <span>Ihr Ablauf bei uns:</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold mr-3 mt-0.5 shrink-0 border border-white/10">1</div>
                  <div>
                    <strong className="text-[11px] uppercase tracking-wider text-slate-100 block">Formular ausfüllen</strong>
                    <span className="text-xs text-slate-400 font-light">Teilen Sie uns Ihre Wünsche mit (Dauer weniger als 2 Min.).</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold mr-3 mt-0.5 shrink-0 border border-white/10">2</div>
                  <div>
                    <strong className="text-[11px] uppercase tracking-wider text-slate-100 block">Kostenloses Telefonat</strong>
                    <span className="text-xs text-slate-400 font-light">Wir klären alle technischen Fragen und stimmen einen Vororttermin ab.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 text-white text-xs font-bold mr-3 mt-0.5 shrink-0 border border-white/10">3</div>
                  <div>
                    <strong className="text-[11px] uppercase tracking-wider text-slate-100 block">Unverbindliches Festpreisangebot</strong>
                    <span className="text-xs text-slate-400 font-light">Sie erhalten ein verbindliches schriftliches Angebot ohne versteckte Kosten.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact Banner */}
            <div className="bg-zinc-900/60 border border-white/5 rounded-none p-6 space-y-4">
              <p className="text-[10px] text-zinc-400 uppercase font-mono tracking-widest font-bold">Direkte Hotline für Schnellentschlossene:</p>
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Phone size={18} className="animate-pulse" />
                </div>
                <div>
                  <a href="tel:+49641123456" className="text-base sm:text-lg font-light text-white block hover:text-zinc-350 transition-colors">
                    0641 / 123 456
                  </a>
                  <span className="text-[11px] text-[#94a3b8] block font-light">Montag - Samstag: 08:00 - 18:00 Uhr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Pillar */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-10 rounded-none border border-white/5 relative shadow-2xl" id="interactive-inquiry-box">
            
            <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-8 text-xs">
              <div className="flex items-center space-x-2 text-zinc-300">
                <ClipboardList size={14} className="text-zinc-400" />
                <span>Gewerbliche und private Vorhaben (Echtzeit-Übermittlung)</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="inquiry-form-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="giessen-anfrage-form"
                  >
                    {submitError && (
                      <div className="bg-red-500/10 border border-red-400/25 p-4 rounded-xl flex items-start space-x-2.5 text-xs text-red-200">
                        <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name field */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          Name, Vorname <span className="text-zinc-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-950 border text-xs sm:text-sm rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 ${
                            errors.fullName ? 'border-red-550 border-red-500' : 'border-slate-800 focus:border-zinc-500'
                          }`}
                          placeholder="z. B. Sabine Müller"
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-500 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email field */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          E-Mail-Adresse <span className="text-zinc-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-950 border text-xs sm:text-sm rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 ${
                            errors.email ? 'border-red-555 border-red-500' : 'border-slate-800 focus:border-zinc-500'
                          }`}
                          placeholder="sabine.mueller@example.de"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Phone field */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          Telefonnummer <span className="text-zinc-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-950 border text-xs sm:text-sm rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 ${
                            errors.phone ? 'border-red-555 border-red-500' : 'border-slate-800 focus:border-zinc-500'
                          }`}
                          placeholder="z. B. 0641 / 987654"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Dropdown service categorization field */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          Gewerke-Bereich
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-slate-800 text-xs sm:text-sm rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 appearance-none cursor-pointer"
                        >
                          <option value="Türen">Türen (Hauseingangstüren, Innentüren)</option>
                          <option value="Fenster">Fenster (Rahmen, profile, Mehrfachverglasung, Rolladen & Raffstoren)</option>
                          <option value="Terrassenüberdachung">Terrassenüberdachung (Aluminium, VSG-Glas, Markisen & Windschutz)</option>
                          <option value="Sonstiges">Sonstiges</option>
                        </select>
                      </div>

                    </div>

                    {/* Zip code (PLZ) and City */}
                    <div className="space-y-4">
                      
                      {/* Zip PLZ field */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-305">
                          Postleitzahl & Ort <span className="text-zinc-400">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="zipCode"
                            required
                            maxLength={5}
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className={`w-full bg-zinc-950 border text-xs sm:text-sm font-mono rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 ${
                              errors.zipCode ? 'border-red-555 border-red-500' : 'border-slate-800 focus:border-zinc-500'
                            }`}
                            placeholder="PLZ (z. B. 35390)"
                          />
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full bg-zinc-950 border border-slate-800 text-xs sm:text-sm rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
                            placeholder="Ort (z. B. Gießen)"
                          />
                        </div>
                        {errors.zipCode && (
                          <p className="text-[11px] text-red-500 flex items-center mt-1">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.zipCode}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Render live district and vicinity check feedback */}
                    <AnimatePresence>
                      {zipResult && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`text-xs p-3.5 border flex items-start space-x-2.5 ${
                            zipResult.isInArea 
                              ? 'bg-zinc-800/40 border-zinc-700/60 text-zinc-100' 
                              : 'bg-red-500/5 border-red-500/10 text-red-300'
                          }`}
                        >
                          <MapPin size={16} className={`${zipResult.isInArea ? 'text-zinc-350' : 'text-red-400'} shrink-0 mt-0.5`} />
                          <div>
                            <span className="font-bold">{zipResult.recommendedCity || 'Service-Prüfung'}</span>: {zipResult.message}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Message Details text field */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-350">
                        Ihre Nachricht / Projektdetails <span className="text-slate-500 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-zinc-950 border border-zinc-800 text-xs sm:text-sm rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
                        placeholder="z. B. Umfang der Erdarbeiten, gewünschte Pflastersteine, geplanter Baubeginn, ca. Grundstücksfläche..."
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
                          className="h-4 w-4 rounded text-zinc-405 focus:ring-zinc-500/25 bg-zinc-950 border-zinc-800 mt-0.5 cursor-pointer shrink-0"
                        />
                        <label htmlFor="gdprConsent" className="ml-3 text-[11px] text-slate-350 leading-relaxed cursor-pointer select-none">
                          Ich stimme den <span className="text-white hover:underline">Datenschutzbestimmungen</span> zu. Meine Daten werden ausschließlich zur Kontaktaufnahme bzgl. dieser Anfrage verarbeitet. <span className="text-white font-bold">*</span>
                        </label>
                      </div>
                      {errors.gdprConsent && (
                        <p className="text-[11px] text-red-500 flex items-center mt-1">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.gdprConsent}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-center py-4 cursor-pointer shadow-xl flex items-center justify-center space-x-2.5 transition-all text-xs uppercase tracking-wider rounded-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Ihre Anfrage wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} style={{ color: "#000000" }} />
                          <span>Projekt starten / Anfrage Senden</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-[#64748b] text-center">
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
                  <div className="inline-flex w-16 h-16 rounded-full bg-emerald-505 bg-emerald-500/10 border border-emerald-400/25 text-emerald-400 items-center justify-center mx-auto mb-2 animate-bounce">
                    <Check size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white font-sans tracking-tight">Anfrage erfolgreich übermittelt!</h3>
                    <p className="text-sm text-slate-350 max-w-lg mx-auto leading-relaxed">
                      Vielen Dank, <strong className="text-white">{formData.fullName}</strong>. Unser regionaler Fachberater für <strong className="text-white">{zipResult?.recommendedCity || formData.city || 'Gießen'}</strong> wurde benachrichtigt und wird Sie in Kürze kontaktieren.
                    </p>
                  </div>

                  {/* Summary Box resembling a nice Quotation Inquiry Ticket */}
                  <div className="bg-[#12161a] border border-white/10 rounded-none max-w-lg mx-auto text-left overflow-hidden font-sans">
                    <div className="bg-[#181c1e] border-b border-white/10 py-3.5 px-5 flex justify-between items-center text-xs text-slate-350 font-mono">
                      <span>BELEG-NR: GIE-{(100000 + Math.floor(Math.random() * 900000))}</span>
                      <span className="text-white">✓ PRÜFUNG ERFOLGREICH</span>
                    </div>
                    
                    <div className="p-5 space-y-3 text-xs sm:text-xs">
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
                          <span className="text-slate-450 text-xs block mb-1">Details:</span>
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
                      className="w-full sm:w-auto bg-[#383e42] hover:bg-black/20 text-slate-205 text-slate-200 text-xs font-bold py-3.5 px-6 rounded-none transition-all border border-white/10 cursor-pointer"
                    >
                      Neue Anfrage stellen
                    </button>
                    <a
                      href={`mailto:info@zenit-bau.de?subject=Bauanfrage Zenit Bau&body=Hallo,%0D%0A%0D%0Anachfolgende Anfrage wurde generiert:%0D%0AName: ${formData.fullName}%0D%0ATelefon: ${formData.phone}%0D%0APLZ: ${formData.zipCode}%0D%0ABereich: ${formData.serviceType}%0D%0ADetails: ${formData.details}`}
                      className="w-full sm:w-auto bg-white hover:bg-zinc-205 hover:bg-zinc-200 text-zinc-950 text-xs font-bold py-3.5 px-6 rounded-none text-center cursor-pointer shadow-lg inline-flex items-center justify-center font-sans tracking-wide"
                    >
                      Kopie an E-Mail senden
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Demo Submissions lead history row */}
        {submittedInquiries.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-16" id="lead-inbox-history">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <h4 className="text-md sm:text-lg font-bold text-white flex items-center">
                  <ClipboardList size={18} className="text-zinc-400 mr-2" />
                  <span>Ihre Test-Anfragen (Lokal gespeichert)</span>
                </h4>
                <p className="text-xs text-slate-400">Diese Liste existiert nur in Ihrer Browser-Vorschau zur Kontrolle des Anfrage-Funnels.</p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('giessen_zenit_bau_inquiries');
                  setSubmittedInquiries([]);
                }}
                className="text-zinc-400 hover:text-white text-xs hover:underline border border-white/10 hover:border-white/25 py-1 px-3.5 rounded bg-black/25 cursor-pointer rounded-none"
              >
                Liste leeren
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submittedInquiries.map((inq, index) => (
                <div key={index} className="bg-[#12161a] border border-white/10 p-6 rounded-none relative">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">{inq.serviceType}</span>
                    <span className="font-mono text-[9px] text-[#94a3b8] uppercase">{inq.zipCode} {inq.city}</span>
                  </div>
                  <h5 className="font-bold text-white text-sm sm:text-base truncate">{inq.fullName}</h5>
                  <p className="text-xs text-slate-400 font-mono mt-1">{inq.email}</p>
                  <p className="text-xs text-slate-400 font-mono">{inq.phone}</p>
                  {inq.details && (
                    <p className="text-[11px] text-slate-350 italic mt-3 bg-black/40 p-2 rounded border border-white/5 truncate">
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
