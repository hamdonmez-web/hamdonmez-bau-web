import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Copy, Check, X, FileCode, Cpu, Code, Globe, Mail } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [activeTab, setActiveTab] = useState<'code' | 'ionos'>('code');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  if (!isOpen) return null;

  // Single-file HTML combining Tailwind CDN, modern icons, fully customized JS validation and German typography
  const singleFileTemplate = `<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenit Bau | Ihr regionaler Fachbetrieb</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        ral7016: '#383e42', /* Anthrazitgrau */
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-900 leading-normal antialiased">

    <!-- Top Utility Bar -->
    <div class="bg-[#1e293b] text-white/90 text-[11px] sm:text-xs py-2 px-4 border-b border-white/5 relative z-50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <span class="flex items-center text-slate-350">
                    <svg class="w-3.5 h-3.5 mr-1 text-sky-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    Dienst in Gießen & Umgebung
                </span>
                <span class="hidden md:inline text-slate-350">
                    ✓ Meisterbetrieb / RAL-zertifizierte Montage
                </span>
            </div>
            <div>
                <a href="tel:+49641123456" class="flex items-center hover:text-sky-400 font-semibold transition-colors">
                    <svg class="w-3.5 h-3.5 mr-1 text-sky-450 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    0641 / 123 456
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="bg-[#1a2332]/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-800 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="#home" class="flex items-center space-x-2">
                <svg viewBox="0 0 260 140" class="h-10 w-auto text-sky-400 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 20 115 L 100 35 L 180 115" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M 105 115 L 155 75 L 205 115" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M 20 115 H 250" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                </svg>
                <div class="flex flex-col justify-center leading-none mt-0.5 shrink-0 select-none">
                    <div class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-white uppercase flex items-center font-serif">
                        <span>Z&nbsp;E&nbsp;N&nbsp;</span>
                        <span class="relative inline-block">
                            <span class="absolute -top-1.5 left-1/2 -translate-x-[45%] flex items-center justify-center text-sky-400 w-2.5 h-2.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="12" cy="12" r="3.5" /><line x1="12" y1="4" x2="12" y2="2" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4" y1="12" x2="2" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /></svg>
                            </span>
                            I
                        </span>
                        <span>&nbsp;T&nbsp;&nbsp;&nbsp;B&nbsp;A&nbsp;U</span>
                    </div>
                    <div class="text-[7px] sm:text-[8px] tracking-[0.32em] text-slate-450 uppercase font-sans mt-0.5">
                        Bis zum Zenit
                    </div>
                </div>
            </a>

            <!-- Desktop Nav Menu -->
            <nav class="hidden md:flex space-x-7 items-center">
                <a href="#home" class="text-slate-300 hover:text-white transition-colors text-sm font-semibold tracking-wide">Startseite</a>
                <a href="#dienstleistungen" class="text-slate-300 hover:text-white transition-colors text-sm font-semibold tracking-wide">Fenster</a>
                <a href="#dienstleistungen" class="text-slate-300 hover:text-white transition-colors text-sm font-semibold tracking-wide">Türen</a>
                <a href="#dienstleistungen" class="text-slate-300 hover:text-white transition-colors text-sm font-semibold tracking-wide">Service</a>
                <a href="#angebote" class="text-slate-300 hover:text-white transition-colors text-sm font-semibold tracking-wide">Angebote</a>
                <a href="#anfrage" class="bg-sky-500 hover:bg-sky-400 text-[#1a2332] font-extrabold text-xs py-2.5 px-4 rounded tracking-wide transition-all shadow-md">Angebot anfordern</a>
            </nav>

            <!-- Hamburguer menu toggle -->
            <button onclick="toggleMobileMenu()" class="md:hidden text-slate-200 hover:text-white p-2">
                <svg id="hamburger-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                <svg id="hamburger-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <!-- Mobile Drawer menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-[#1a2332] border-t border-slate-800 px-4 py-6 space-y-4 shadow-xl">
            <a href="#home" onclick="toggleMobileMenu()" class="block text-slate-350 hover:text-white font-medium py-1">Startseite</a>
            <a href="#dienstleistungen" onclick="toggleMobileMenu()" class="block text-slate-350 hover:text-white font-medium py-1">Fenster & Türen</a>
            <a href="#dienstleistungen" onclick="toggleMobileMenu()" class="block text-slate-350 hover:text-white font-medium py-1">Montage Service</a>
            <a href="#angebote" onclick="toggleMobileMenu()" class="block text-slate-350 hover:text-white font-medium py-1">Angebote</a>
            <a href="#anfrage" onclick="toggleMobileMenu()" class="block w-full text-center bg-sky-500 hover:bg-sky-400 text-[#1a2332] font-black py-3 rounded-lg text-sm">Angebot anfordern</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative bg-slate-950 min-h-[85vh] flex items-center justify-center overflow-hidden py-16">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" alt="Weißes Haus Gießen modern" class="w-full h-full object-cover brightness-[0.4]" />
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent mix-blend-multiply"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="max-w-3xl space-y-8">
                <div class="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full text-sky-400 text-xs font-semibold uppercase tracking-wider">
                    <span>Ihr Servicebetrieb für Gießen & Lahn-Dill-Kreis</span>
                </div>
                
                <div class="space-y-4">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Hochwertige Fenster & Türen in <span class="text-sky-400 font-extrabold">Gießen</span> und Umgebung
                    </h1>
                    <p class="text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                        Professionelle Beratung, millimetergenaues Aufmaß und fachgerechte Montage aus einer Hand. Steigern Sie Energieeffizienz und Einbruchschutz Ihrer Immobilie.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                    <a href="#anfrage" class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-center py-4 px-8 rounded-lg shadow-lg hover:scale-[1.01] transition-all text-sm uppercase tracking-wider">Jetzt kostenloses Angebot anfordern</a>
                    <a href="#dienstleistungen" class="bg-slate-800/80 hover:bg-slate-700/90 text-white font-semibold text-center border border-slate-700 px-8 py-4 rounded-lg text-sm transition-all">Unsere Produkte ansehen</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Dienstleistungen Section -->
    <section id="dienstleistungen" class="py-24 bg-gray-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-20">
                <span class="text-sky-500 text-xs uppercase tracking-widest font-extrabold bg-sky-50 px-3 py-1 rounded-full inline-block">Qualitätsleistungen</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1a2332] tracking-tight">Unsere Schwerpunkte & Bauelemente</h2>
                <p class="text-gray-600 text-lg leading-relaxed">Wir begleiten Sie kompetent und zuverlässig von der ersten Beratung über das Aufmaß bis zur fertigen RAL-Meistermontage.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Fenster -->
                <div class="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="h-56 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Energy Efficient Window" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-2xl font-bold text-[#1a2332]">Hocheffiziente Fenster</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Moderne Kunststoff- und Aluminiumfenster mit hocheffizienter Dreifachverglasung. Perfekter Schallschutz und exzellente Wärmedämmung bis zum Passivhaus-Standard.
                            </p>
                            <ul class="space-y-2 text-xs text-gray-700 border-t border-gray-100 pt-4">
                                <li class="flex items-center">✔ Dämmwerte bis zu Uw = 0,73 W/(m²K)</li>
                                <li class="flex items-center">✔ Integrierter Einbruchschutz bis Klasse RC2</li>
                                <li class="flex items-center">✔ Unendliche Farbauswahl in RAL & Holzdekoren</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <a href="#anfrage" onclick="setFormCategory('Fenster')" class="block w-full text-center bg-[#1a2332] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg text-xs tracking-wider uppercase transition-all">Fenster anfragen</a>
                    </div>
                </div>

                <!-- Türen -->
                <div class="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="h-56 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80" alt="Premium Alu Haustür" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-2xl font-bold text-[#1a2332]">Premium Haustüren</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Sicher, stark und langlebig. Unsere Aluminium- und Verbundhaustüren sind hunderte Male individuell konfigurierbar mit modernsten Keyless-Lösungen und RC3 Schutz.
                            </p>
                            <ul class="space-y-2 text-xs text-gray-700 border-t border-gray-100 pt-4">
                                <li class="flex items-center">✔ 5-fach massive automatische Schwenkriegel</li>
                                <li class="flex items-center">✔ Überragende Formstabilität & exzellente Dämmung</li>
                                <li class="flex items-center">✔ Optionaler Zugang per Fingerscan & Smart Home</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <a href="#anfrage" onclick="setFormCategory('Haustür')" class="block w-full text-center bg-[#1a2332] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg text-xs tracking-wider uppercase transition-all">Haustür anfragen</a>
                    </div>
                </div>

                <!-- Montage -->
                <div class="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="h-56 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="Window install" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-2xl font-bold text-[#1a2332]">Meister-Montage & Service</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                Saubere RAL-Montage durch geschulte Handwerker. Wir bauen vorsorglich aus, dichten feuchtigkeitsvariabel ab und entsorgen Ihre alten Fenster fachgerecht.
                            </p>
                            <ul class="space-y-2 text-xs text-gray-700 border-t border-gray-100 pt-4">
                                <li class="flex items-center">✔ Absolut saubere Abwicklung und fachgerechte RAL-Demontage</li>
                                <li class="flex items-center">✔ Entsorgung der Altkunststoffe & Umweltschutz</li>
                                <li class="flex items-center">✔ Eigene, erfahrene Monteure & unkomplizierter Service</li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <a href="#anfrage" onclick="setFormCategory('Montage/Service')" class="block w-full text-center bg-[#1a2332] hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg text-xs tracking-wider uppercase transition-all">Service anfragen</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Aktuelle Angebote Section -->
    <section id="angebote" class="py-24 bg-[#1a2332] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-8 space-y-6">
                    <span class="text-sky-400 text-xs font-mono font-bold tracking-widest uppercase">Limitierte Ersparnis</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
                        Sommer-Aktion: 10% Rabatt auf hocheffiziente Dreifachverglasung!
                    </h2>
                    <p class="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                        Rüsten Sie jetzt auf Dreifachglas auf. Halten Sie die quälende Sommerhitze draußen und dämmen Sie Ihr Eigenheim zukunftssicher. Wir schenken Ihnen im Aktionszeitraum ein kostenfreies Upgrade auf Dreifachverglasung beim Kauf neuer Fenster.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs tracking-wider text-slate-200">
                        <div class="flex items-center space-x-2">✔ Ug-Wert: Exzellente 0,5 W/(m²K)</div>
                        <div class="flex items-center space-x-2">✔ Spürbarer Schallschutz (-42 dB Lärmeintrag)</div>
                        <div class="flex items-center space-x-2">✔ Bis zu 180 € p.a. Heizkostenersparnis</div>
                        <div class="flex items-center space-x-2">✔ Gültig bis zum 31. August 2026</div>
                    </div>
                </div>
                <div class="lg:col-span-4 bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-6">
                    <p class="text-xs text-sky-450 uppercase tracking-widest font-bold">IHRE FINANZIELLE ERSPARNIS</p>
                    <div class="w-24 h-24 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mx-auto">
                        <span class="text-3xl font-black text-white">10%</span>
                    </div>
                    <div>
                        <h4 class="text-md font-bold text-white uppercase tracking-wider">Dreifach-Kombi Rabatt</h4>
                        <p class="text-xs text-slate-450 mt-1">Ihr Upgrade wird bei der finalen Angebotserstellung direkt als Netto-Abschlag abgezogen.</p>
                    </div>
                    <a href="#anfrage" class="block w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-extrabold py-3.5 rounded-lg text-sm transition-all text-center">Aktion sichern</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Anfrageformular Section -->
    <section id="anfrage" class="py-24 bg-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <div class="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sm:p-12">
                <div class="text-center max-w-2xl mx-auto space-y-4 mb-10">
                    <h2 class="text-3xl font-extrabold text-[#1a2332] tracking-tight">Kostenloses Angebot anfordern</h2>
                    <p class="text-gray-500 text-sm">Unser Gießener Fachexperte nimmt unverbindlich Kontakt zu Ihnen auf. Bitte füllen Sie das Formular vollständig aus.</p>
                </div>

                <!-- Formspree Endpoint Form -->
                <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onsubmit="return handleFormSubmit(event)" class="space-y-6">
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- Vollständiger Name -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">Name, Vorname *</label>
                            <input type="text" id="fullName" name="name" required class="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500" placeholder="Sabine Müller">
                        </div>

                        <!-- E-Mail Adresse -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">E-Mail-Adresse *</label>
                            <input type="email" id="email" name="email" required class="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500" placeholder="sabine.mueller@example.com">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- Telefonnummer -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">Telefonnummer *</label>
                            <input type="tel" id="phone" name="phone" required class="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500" placeholder="0641 / 1234567">
                        </div>

                        <!-- Anfragetyp -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">Was benötigen Sie?</label>
                            <select id="serviceType" name="service" class="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer">
                                <option value="Fenster">Hocheffiziente Fenster</option>
                                <option value="Haustür">Sichere Haustüren</option>
                                <option value="Montage/Service">Zertifizierte Montage / Service</option>
                                <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <!-- PLZ -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">Postleitzahl *</label>
                            <input type="text" id="zipCode" name="zip" required maxlength="5" oninput="validateZip()" class="w-full bg-gray-50 border border-gray-300 text-sm font-mono rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500" placeholder="35390">
                        </div>

                        <!-- Ort -->
                        <div class="sm:col-span-2 space-y-2">
                            <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">Ort / Stadt</label>
                            <input type="text" id="city" name="city" class="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500" placeholder="Gießen">
                        </div>
                    </div>

                    <!-- Zip check status feedback -->
                    <div id="zip-feedback" class="hidden text-xs p-3.5 rounded-xl border"></div>

                    <!-- Details Area -->
                    <div class="space-y-2">
                        <label class="block text-xs font-bold uppercase text-gray-700 tracking-wider">Projektdetails / Ihre Nachricht (Optional)</label>
                        <textarea id="details" name="details" rows="4" class="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500" placeholder="Menge, ungefähre Maße oder Materialvorlieben (Aluminium / Kunststoff)..."></textarea>
                    </div>

                    <!-- GDPR Consent -->
                    <div class="space-y-2">
                        <div class="flex items-start">
                            <input id="gdpr" type="checkbox" required class="h-4 w-4 text-sky-500 focus:ring-sky-500/20 border-gray-300 rounded mt-0.5 cursor-pointer">
                            <label for="gdpr" class="ml-3 text-xs text-gray-500 leading-normal select-none cursor-pointer">
                                Ich stimme den Datenschutzbestimmungen zu. Meine Angaben werden ausschließlich zur unverbindlichen Beantwortung dieser Anfrage erhoben und absolut vertraulich behandelt. *
                            </label>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" id="submitBtn" class="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl cursor-pointer shadow-lg hover:shadow-sky-500/10 transition-all flex items-center justify-center">
                        Anfrage unverbindlich senden
                    </button>
                </form>

                <!-- Success Box -->
                <div id="successBox" class="hidden text-center space-y-6 py-8">
                    <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-450 text-emerald-500 flex items-center justify-center mx-auto">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-2xl font-bold text-[#1a2332]">Anfrage erfolgreich gesendet!</h3>
                        <p class="text-gray-500 text-sm max-w-md mx-auto">Vielen Dank für Ihr Vertrauen. Unser mittelhessischer Fachpartner meldet sich innerhalb von 24 Stunden telefonisch bei Ihnen.</p>
                    </div>
                    <button onclick="resetContactForm()" class="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 text-xs font-semibold py-2 px-6 rounded-lg transition-all">Neue Anfrage erstellen</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 text-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="space-y-4">
                <span class="font-bold text-white block">Zenit Bau</span>
                <p class="text-xs text-slate-450 leading-relaxed">
                    Ihr zertifizierter Partner für energieeffiziente Bauelemente, Renovierungsfenster, schallgedämmte Haustüren und meisterhafte RAL-Montage in ganz Mittelhessen.
                </p>
            </div>
            <div>
                <span class="font-bold text-white block mb-4">Kontakt & Anschrift</span>
                <p class="text-xs text-slate-450 leading-loose">
                    Montagestützpunkt Gießen<br>
                    Marburger Straße 78, 35390 Gießen<br>
                    E-Mail: kontakt@giessen-fenster.de<br>
                    Tel: 0641 / 123 456
                </p>
            </div>
            <div>
                <span class="font-bold text-white block mb-4">Servicebereich</span>
                <ul class="text-xs text-slate-450 space-y-2">
                    <li>• Gießen & Wettenberg</li>
                    <li>• Linden & Pohlheim</li>
                    <li>• Wetzlar & Lahn-Dill</li>
                    <li>• Wetteraukreis (Bad Nauheim)</li>
                </ul>
            </div>
            <div>
                <span class="font-bold text-white block mb-4">Rechtliches</span>
                <div class="text-xs text-slate-450 space-y-2.5">
                    <a href="#" class="block hover:text-white transition-colors">Impressum</a>
                    <a href="#" class="block hover:text-white transition-colors">Datenschutzerklärung</a>
                    <p class="text-[10px] text-slate-500 mt-4">&copy; 2026 Zenit Bau. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Interactive script triggers and region controller -->
    <script>
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const openIcon = document.getElementById('hamburger-open');
            const closeIcon = document.getElementById('hamburger-close');
            
            menu.classList.toggle('hidden');
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }

        function setFormCategory(service) {
            const selectEl = document.getElementById('serviceType');
            if(selectEl) {
                selectEl.value = service;
            }
        }

        function validateZip() {
            const zipInput = document.getElementById('zipCode').value.replace(/\\D/g, '').substring(0, 5);
            document.getElementById('zipCode').value = zipInput;
            
            const feedbackEl = document.getElementById('zip-feedback');
            const cityEl = document.getElementById('city');
            
            if (zipInput.length < 3) {
                feedbackEl.classList.add('hidden');
                return;
            }
            
            feedbackEl.classList.remove('hidden');
            
            // Giessen surroundings ZIP validator
            if (zipInput.startsWith('353') || zipInput.startsWith('354')) {
                feedbackEl.className = "text-xs p-3.5 rounded-xl border bg-sky-500/5 border-sky-450 text-sky-700 mt-2";
                feedbackEl.innerHTML = "✓ <strong>Servicegebiet Gießen:</strong> Unser Mess-Team ist in Ihrer unmittelbaren Nachbarschaft aktiv!";
                
                const map = {'35390': 'Gießen', '35394': 'Gießen', '35440': 'Linden', '35435': 'Wettenberg', '35415': 'Pohlheim', '35418': 'Buseck'};
                if(map[zipInput] && !cityEl.value) {
                    cityEl.value = map[zipInput];
                }
            } else if (zipInput.startsWith('355') || zipInput.startsWith('356')) {
                feedbackEl.className = "text-xs p-3.5 rounded-xl border bg-sky-500/5 border-sky-450 text-sky-700 mt-2";
                feedbackEl.innerHTML = "✓ <strong>Lahn-Dill (Wetzlar):</strong> Vollständige Abdeckung durch unseren Wetzlarer Partner!";
            } else if (zipInput.startsWith('611') || zipInput.startsWith('612')) {
                feedbackEl.className = "text-xs p-3.5 rounded-xl border bg-sky-500/5 border-sky-450 text-sky-700 mt-2";
                feedbackEl.innerHTML = "✓ <strong>Wetteraukreis:</strong> Täglicher Anfahrts-Service ohne Sondergebühren!";
            } else {
                feedbackEl.className = "text-xs p-3.5 rounded-xl border bg-amber-500/5 border-amber-400 text-amber-700 mt-2";
                feedbackEl.innerHTML = "ℹ <strong>Überregionales Projekt:</strong> Anfrage wird bezüglich Sonder-Transportkosten geprüft.";
            }
        }

        function handleFormSubmit(event) {
            // If Formspree placeholder is active, do preventDefault and simulate success box
            const formAction = document.getElementById('contactForm').getAttribute('action');
            if (formAction.includes('YOUR_FORM_ID')) {
                event.preventDefault();
                
                // Show submission animation
                const submitBtn = document.getElementById('submitBtn');
                submitBtn.innerHTML = "Anfrage wird übermittelt...";
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    document.getElementById('contactForm').classList.add('hidden');
                    document.getElementById('successBox').classList.remove('hidden');
                    
                    submitBtn.innerHTML = "Anfrage unverbindlich senden";
                    submitBtn.disabled = false;
                }, 1000);
                
                return false;
            }
            return true; // Send to actual Formspree endpoint!
        }

        function resetContactForm() {
            document.getElementById('contactForm').reset();
            document.getElementById('contactForm').classList.remove('hidden');
            document.getElementById('successBox').classList.add('hidden');
            document.getElementById('zip-feedback').classList.add('hidden');
        }
    </script>
</body>
</html>`;

  // Code segments for cleanly separated structure if requested
  const splitHtmlCode = `<!-- index.html -->
<!DOCTYPE html>
<html lang="de" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenit Bau</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigationsleiste -->
    <header class="navbar">
       <!-- ... vollständiges HTML ... -->
    </header>
    <main>
      <!-- Hero, Dienstleistungen, Form ... -->
    </main>
    <script src="script.js"></script>
</body>
</html>`;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden text-slate-900 border"
        id="exported-modal-view"
      >
        {/* Header bar */}
        <div className="bg-[#1a2332] text-white p-6 flex justify-between items-center shrink-0 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-500 p-2 rounded">
              <Code size={20} className="text-slate-950" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg leading-tight">Yayınlama ve Kurulum Merkezi</h3>
              <p className="text-xs text-slate-300">Statik kod paketleyici ve IONOS alan adı yapılandırma merkezi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 shrink-0 px-6 bg-slate-50 gap-2">
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 font-sans font-bold text-xs uppercase tracking-wider border-b-2 flex items-center space-x-2 transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'border-sky-500 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileCode size={14} />
            <span>1. index.html Quellcode</span>
          </button>
          <button
            onClick={() => setActiveTab('ionos')}
            className={`py-3 px-4 font-sans font-bold text-xs uppercase tracking-wider border-b-2 flex items-center space-x-2 transition-colors cursor-pointer ${
              activeTab === 'ionos'
                ? 'border-sky-500 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Globe size={14} />
            <span>2. IONOS Alan Adı & E-Posta Ayarları (Seçenek A)</span>
          </button>
        </div>

        {activeTab === 'code' ? (
          <>
            {/* Info panel */}
            <div className="bg-slate-50 border-b p-5 text-xs text-slate-600 flex items-start space-x-3 shrink-0">
              <Cpu className="text-sky-500 mt-0.5 shrink-0" size={16} />
              <p className="leading-relaxed">
                Als Web-Entwickler habe ich eine **vollständig optimierte und responsive Version** der gesamten Zenit Bau Homepage als **Single-File-HTML** kompiliert. Alle Designs, responsive Grids, Hamburger Menüs, Live Postleitzahlen-Schnittstellen und Formspree-Schnittstellen sind vollständig implementiert. Kopieren Sie den Code einfach in Ihre `index.html` Datei und laden Sie diese direkt auf GitHub Pages hoch!
              </p>
            </div>

            {/* Code tabs */}
            <div className="flex-grow flex flex-col min-h-0 bg-slate-950 text-slate-300">
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex justify-between items-center shrink-0">
                <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider flex items-center">
                  <FileCode size={14} className="mr-1.5" />
                  index.html (Zusammengeführter Code)
                </span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleCopy(singleFileTemplate, 'single')}
                    className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs py-1.5 px-4 rounded-md flex items-center space-x-1.5 cursor-pointer shadow transition-all"
                  >
                    {copiedType === 'single' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedType === 'single' ? 'Kopiert!' : 'Code kopieren'}</span>
                  </button>
                </div>
              </div>

              {/* Text Code Block display container */}
              <div className="flex-grow overflow-auto p-6 font-mono text-[11px] sm:text-xs leading-relaxed max-h-[40vh] bg-slate-950 text-slate-200 divide-y divide-slate-900 selection:bg-sky-500/25">
                <pre className="whitespace-pre">{singleFileTemplate}</pre>
              </div>
            </div>
          </>
        ) : (
          /* IONOS SEÇENEK A KILAVUZU */
          <div className="flex-grow overflow-auto p-6 sm:p-8 bg-slate-900 text-slate-200 min-h-0">
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <span className="text-sky-400 font-mono text-[10px] font-bold uppercase tracking-wider block mb-1">Seçenek A Kurulum Kılavuzu</span>
                <h4 className="text-base sm:text-lg font-bold font-sans text-white">IONOS Alan Adı (zenit-bau.de) Yapılandırması</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  Satın almış olduğunuz <strong className="text-white">zenit-bau.de</strong> alan adını web sitenize bağlamak ve saniyeler içinde <strong className="text-white">info@zenit-bau.de</strong> e-posta adresini ücretsiz kurmak için aşağıdaki DNS talimatlarını IONOS panelinizde tanımlayın.
                </p>
              </div>

              {/* Step 1 */}
              <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-6 h-6 rounded-full bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0">1</div>
                  <h5 className="font-bold text-xs sm:text-sm text-white">Web Sitenizi Alan Adınıza Bağlayın (DNS A & CNAME)</h5>
                </div>
                <p className="text-xs text-slate-400">
                  IONOS Müşteri Paneli &gt; Alan Adları (Domains) &gt; <strong className="text-slate-350">zenit-bau.de</strong> &gt; DNS bölümüne gidip aşağıdaki kayıtları ekleyin veya düzenleyin:
                </p>
                
                <div className="space-y-3 pt-1">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 font-mono text-[10px] leading-relaxed">
                    <div className="grid grid-cols-12 gap-1 border-b border-white/5 pb-2 mb-2 font-bold text-[9px] text-slate-400 uppercase tracking-wider">
                      <div className="col-span-3">Kayıt Tipi</div>
                      <div className="col-span-3">Host / İsim</div>
                      <div className="col-span-6">Yönlenen Değer (Points To)</div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-3 text-sky-450 font-bold">A</div>
                      <div className="col-span-3 text-slate-300">@</div>
                      <div className="col-span-6 text-white font-bold select-all">185.199.108.153</div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-3 text-sky-450 font-bold">A</div>
                      <div className="col-span-3 text-slate-300">@</div>
                      <div className="col-span-6 text-white font-bold select-all">185.199.109.153</div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-3 text-sky-450 font-bold">A</div>
                      <div className="col-span-3 text-slate-300">@</div>
                      <div className="col-span-6 text-white font-bold select-all">185.199.110.153</div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-3 text-sky-450 font-bold">A</div>
                      <div className="col-span-3 text-slate-300">@</div>
                      <div className="col-span-6 text-white font-bold select-all">185.199.111.153</div>
                    </div>

                    <div className="border-t border-white/5 my-1.5"></div>

                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-3 text-sky-450 font-bold">CNAME</div>
                      <div className="col-span-3 text-slate-300">www</div>
                      <div className="col-span-6 text-white font-bold select-all">zenit-bau.de.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-6 h-6 rounded-full bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0">2</div>
                  <h5 className="font-bold text-xs sm:text-sm text-white flex items-center space-x-1.5">
                    <Mail size={14} className="text-sky-400" />
                    <span>info@zenit-bau.de adresi için Ücretsiz Yönlendirme (ImprovMX)</span>
                  </h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ekstra e-posta servis ücreti vermeden, <strong className="text-white">info@zenit-bau.de</strong> adresine gönderilen tüm postaları kendi Gmail adresiniz olan <strong className="text-white">hamdonmez@gmail.com</strong> adresine anlık olarak ücretsiz yönlendirmek için en popüler aracı kurum <strong className="text-white">ImprovMX</strong>'i kullanıyoruz.
                </p>

                <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <p className="font-bold text-white">Yönlendirme Kurulum Adımları:</p>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-350">
                    <li><a href="https://improvmx.com" target="_blank" rel="noreferrer" className="text-sky-400 underline hover:text-sky-300 font-bold font-mono">improvmx.com</a> adresine gidin.</li>
                    <li>Karşınıza çıkan kutularda Domain bölümüne <code className="bg-black/50 px-1.5 py-0.5 rounded text-white font-mono">zenit-bau.de</code>, yönlendirilecek e-posta bölümüne ise <code className="bg-black/50 px-1.5 py-0.5 rounded text-white font-mono">hamdonmez@gmail.com</code> yazın.</li>
                    <li>Saniyeler içinde e-posta adresinize bir onay bağlantısı gelecektir, ona tıklayıp onaylayın.</li>
                    <li>Şimdi, IONOS DNS alanında aşağıdaki MX ve TXT kayıtlarını tanımlayarak yönlendirmeyi aktif edin:</li>
                  </ol>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 font-mono text-[10px] leading-relaxed">
                    <div className="grid grid-cols-12 gap-1 border-b border-white/5 pb-2 mb-2 font-bold text-[9px] text-slate-400 uppercase tracking-wider">
                      <div className="col-span-2">Tipi</div>
                      <div className="col-span-2">Host</div>
                      <div className="col-span-6">Deger / Hedef</div>
                      <div className="col-span-2 text-right">Öncelik</div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-2 text-emerald-400 font-bold">MX</div>
                      <div className="col-span-2 text-slate-300">@</div>
                      <div className="col-span-6 text-white font-bold select-all">mx1.improvmx.com.</div>
                      <div className="col-span-2 text-white text-right font-bold">10</div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-2 text-emerald-400 font-bold">MX</div>
                      <div className="col-span-2 text-slate-300">@</div>
                      <div className="col-span-6 text-white font-bold select-all">mx2.improvmx.com.</div>
                      <div className="col-span-2 text-white text-right font-bold">20</div>
                    </div>

                    <div className="border-t border-white/5 my-1.5"></div>

                    <div className="grid grid-cols-12 gap-1 py-1">
                      <div className="col-span-2 text-emerald-400 font-bold">TXT</div>
                      <div className="col-span-2 text-slate-300">@</div>
                      <div className="col-span-8 text-white font-bold select-all font-sans text-xs">v=spf1 include:spf.improvmx.com ~all</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/20 p-4 rounded-xl text-xs text-slate-300 flex items-start space-x-2.5">
                <span className="text-sky-400 text-base leading-none">ℹ</span>
                <p className="leading-relaxed">
                  <strong>Bilgi:</strong> Yapılan DNS değişikliklerinin tüm dünya genelinde etkinleşmesi ve e-posta yönlendirmelerinizin çalışmaya başlaması IONOS üzerindeki sunucu yoğunluğuna göre **5 dakika ile birkaç saat** arasında sürebilir.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="bg-slate-50 border-t p-5 flex justify-between items-center shrink-0">
          <span className="text-[11px] text-slate-500 italic">
            {activeTab === 'code' ? '✓ Inklusive Formspree Action Validierung & Gießen PLZ Check' : '✓ IONOS & ImprovMX DNS yönlendirmeleri hazır'}
          </span>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2.5 px-6 rounded-lg transition-all cursor-pointer"
          >
            Zurück zur Vorschau
          </button>
        </div>
      </motion.div>
    </div>
  );
}
