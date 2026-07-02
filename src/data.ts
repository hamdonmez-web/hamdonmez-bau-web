import { ServiceItem, PromoCampaign } from './types';

export const IMAGE_ASSETS = {
  hero: '/src/assets/images/Gemini_Generated_Image_sk0m8ysk0m8ysk0m.png',
  window: '/src/assets/images/modern_window_1781111287014.png',
  door: '/src/assets/images/modern_door_1781111297940.png',
  installation: '/src/assets/images/window_installation_1781111308997.png',
  // High-quality architectural Unsplash images for secondary visuals
  doorAlt: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  windowAlt: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  patioAlt: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  rolladen: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  reference1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  reference2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  reference3: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
};

// Known Gießen districts and nearby cities
export const REGIONAL_PARTNERS = [
  'Gießen',
  'Frankfurt',
  'Hanau',
  'Offenbach',
  'Wettenberg',
  'Pohlheim',
  'Buseck',
  'Linden',
  'Heuchelheim',
  'Fernwald',
  'Reiskirchen',
  'Lollar',
  'Wetzlar',
  'Butzbach',
  'Bad Nauheim',
  'Friedberg',
  'Lahn-Dill-Kreis',
  'Wetteraukreis'
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'tueren',
    title: 'Türen',
    description: 'Hochwertige Eingangs- und Innentüren mit moderner Sicherheitstechnik und optimalem Schallschutz.',
    longDescription: 'Wir bieten maßgeschneiderte Türlösungen für Ihr Zuhause. Von einbruchsicheren Hauseingangstüren bis hin zu eleganten Innentüren aus Holz, Aluminium oder Glas – wir sorgen für präzisen Einbau, langlebige Beschläge und hervorragende Wärmedämmung nach neuesten Standards.',
    features: [
      'Einbruchschutz nach RC2- und RC3-Sicherheitsklassen',
      'Hervorragende Schall- und Wärmedämmung',
      'Individuelle Designs: Holz, Aluminium, Glas und Kunststoff',
      'Elektronische Schließsysteme & Smart-Home-Integration möglich',
      'Meisterhafter Einbau & Demontage der alten Türen'
    ],
    imageUrl: IMAGE_ASSETS.door,
    badge: 'Festpreis'
  },
  {
    id: 'fenster',
    title: 'Fenster',
    description: 'Energieeffiziente Fenster mit Mehrfachverglasung, hervorragender Wärmedämmung und modernem Design.',
    longDescription: 'Sparen Sie Energiekosten durch moderne Fenster mit zeitgemäßer Mehrfachverglasung und optimaler Fugendichtheit. Unser meistergeführter Fachbetrieb übernimmt die Planung, Lieferung und den fachgerechten Einbau für langanhaltende Energieeffizienz.',
    features: [
      'Hocheffiziente Verglasungen (2-fach / 3-fach)',
      'Langlebige Profile aus Kunststoff, Holz oder Holz-Aluminium',
      'Integrierter Schallschutz und verbesserter Einbruchschutz',
      'Zertifizierter Einbau nach strengen RAL-Montagerichtlinien',
      'Integrierte Rolladen- & Raffstore-Systeme für Sonnenschutz'
    ],
    imageUrl: IMAGE_ASSETS.window,
    badge: 'Nach Aufwand'
  },
  {
    id: 'terrassenueberdachung',
    title: 'Terrassenüberdachung',
    description: 'Elegante und freistehende oder angebaute Terrassendächer aus Aluminium und Sicherheitsglas.',
    longDescription: 'Erweitern Sie Ihren Wohnraum ins Grüne und schützen Sie sich vor Sonne, Regen und Wind. Unsere maßgeschneiderten Terrassenüberdachungen aus pulverbeschichtetem Aluminium und robustem Sicherheitsglas vereinen extreme Langlebigkeit mit modernster Ästhetik.',
    features: [
      'Robuste Aluminium-Konstruktion in Wunschfarbe (pulverbeschichtet)',
      'Eindeckung mit Verbundsicherheitsglas (VSG) oder Polycarbonat',
      'Umlaufende Entwässerung und unsichtbare Kabelkanäle',
      'Maßgeschneiderte Markisen & textiler Sonnenschutz',
      'Inklusive statischer Berechnung und meisterhafter Montage'
    ],
    imageUrl: IMAGE_ASSETS.installation,
    badge: 'Individuell'
  }
];

export const SUMMER_PROMO: PromoCampaign = {
  id: 'bau_2026',
  title: 'Bau- & Sanierungs-Vorteil 2026',
  subtitle: 'Effizienz- & Zukunfts-Upgrade',
  badge: 'Sonderaktion',
  description: 'Sparen Sie bares Geld bei Ihrer anstehenden Modernisierung! Bei Beauftragung eines Sanierungs- oder Außenanlagenprojekts im Aktionszeitraum erhalten Sie die vollständige statische Vorplanung sowie ein professionelles 3D-Baugutachten im Wert von bis zu 1.500 € komplett gratis dazu.',
  validUntil: '31. August 2026',
  discount: 'GRATIS EFFIZIENZ-CHECK'
};

export const FAQ = [
  {
    question: 'Bieten Sie Beratung und Vor-Ort-Besichtigungen kostenlos an?',
    answer: 'Ja, unsere erste Vor-Ort-Besichtigung, die technische Beratung sowie das detaillierte Festpreisangebot in Gießen, Wetzlar, Marburg und der gesamten Region Mittelhessen sind für Sie absolut unverbindlich und kostenfrei.'
  },
  {
    question: 'Führen Sie alle Bauleistungen mit eigenem Personal aus?',
    answer: 'Ja, Zenit Bau arbeitet ausschließlich mit festangestellten deutschen Ingenieuren, Maurermeistern und Facharbeitern. Für spezialisierte Spezialgewerke (z.B. Elektrik) koordinieren wir langjährige, zertifizierte Partnerbetriebe aus der Region Gießen, sodass Sie stets nur einen verantwortlichen Ansprechpartner haben.'
  },
  {
    question: 'Wie sichern Sie die vereinbarten Baukosten und Fristen ab?',
    answer: 'Transparenz ist unsere Philosophie. Wir vereinbaren vertraglich eine Festpreisgarantie und eine minutengenaue Terminschiene für jeden Meilenstein Ihres Bau- oder Sanierungsvorhabens. Unvorhergesehene Kostenrisiken tragen wir im Rahmen unseres schlüsselfertigen Angebots selbst.'
  },
  {
    question: 'Unterstützen Sie uns bei Bauanträgen und KfW-Förderungen?',
    answer: 'Absolut. Unser Team verfügt über vorlageberechtigte Ingenieure bzgl. Bauanträgen bei den hessischen Baubehörden. Zudem analysiert unser zertifizierter Energieberater alle Sanierungsmaßnahmen und bereitet die Förderanträge für die KfW oder das BAFA für Sie unterschriftsreif vor.'
  }
];

// Helper to determine Gießen region status from Zip Code
export function checkZipCoverage(zip: string): { isInArea: boolean; recommendedCity: string; message: string } {
  if (!zip || zip.length < 3) {
    return { isInArea: false, recommendedCity: '', message: '' };
  }
  
  const zipNum = parseInt(zip, 10);
  
  // Checking Giessen region standard postal codes (starting with 35 or 61 Wetterau)
  if (zip.startsWith('353') || zip.startsWith('354') || zipNum === 35390 || zipNum === 35392 || zipNum === 35394 || zipNum === 35396 || zipNum === 35398) {
    const mapping: Record<string, string> = {
      '35390': 'Gießen (Mitte)',
      '35392': 'Gießen',
      '35394': 'Gießen (Ost/Schiffenberg)',
      '35396': 'Gießen (Wieseck)',
      '35398': 'Gießen (Lützellinden)',
      '35435': 'Wettenberg',
      '35440': 'Linden',
      '35415': 'Pohlheim',
      '35418': 'Buseck',
      '35452': 'Heuchelheim',
      '35463': 'Fernwald',
      '35447': 'Reiskirchen',
      '35457': 'Lollar',
      '35305': 'Grünberg',
    };
    const resolved = mapping[zip] || 'Region Gießen / Lahn-Dill';
    return {
      isInArea: true,
      recommendedCity: resolved,
      message: '✓ Unser Vor-Ort-Team ist direkt in Ihrer Nähe einsatzbereit!'
    };
  }

  // Wetzlar & Lahn-Dill (355xx, 356xx)
  if (zip.startsWith('355') || zip.startsWith('356')) {
    return {
      isInArea: true,
      recommendedCity: zip.startsWith('355') ? 'Wetzlar & Umgebung' : 'Lahn-Dill-Kreis',
      message: '✓ Unser Servicegebiet erstreckt sich vollflächig bis in Ihr Gebiet.'
    };
  }

  // Wetteraukreis / Bad Nauheim / Butzbach / Friedberg (61xxx)
  if (zip.startsWith('611') || zip.startsWith('612') || zip.startsWith('61169') || zip.startsWith('61231')) {
    const mappingWetterau: Record<string, string> = {
      '61231': 'Bad Nauheim',
      '61169': 'Friedberg',
      '35510': 'Butzbach'
    };
    const resolved = mappingWetterau[zip] || 'Wetteraukreis';
    return {
      isInArea: true,
      recommendedCity: resolved,
      message: '✓ Wetteraukreis wird täglich von unseren Montage-Meistern angefahren!'
    };
  }

  // Marburg (350xx)
  if (zip.startsWith('350')) {
    return {
      isInArea: true,
      recommendedCity: 'Marburg / Landkreis Marburg-Biedenkopf',
      message: '✓ Auch Marburg und Marburg-Land gehört zu unserem Servicegebiet!'
    };
  }

  // Frankfurt am Main (60xxx)
  if (zip.startsWith('60')) {
    return {
      isInArea: true,
      recommendedCity: 'Frankfurt am Main',
      message: '✓ Frankfurt gehört ab sofort zu unserem erweiterten Servicegebiet!'
    };
  }

  // Offenbach am Main & Hanau (63xxx, specifically 630xx and 634xx)
  if (zip.startsWith('630') || zip.startsWith('634')) {
    const city = zip.startsWith('630') ? 'Offenbach am Main' : 'Hanau';
    return {
      isInArea: true,
      recommendedCity: city,
      message: `✓ ${city} gehört ab sofort zu unserem erweiterten Servicegebiet!`
    };
  }

  // General Germany starting with 35 or 6 (including 63, 60 or general 6x)
  if (zip.startsWith('35') || zip.startsWith('61') || zip.startsWith('60') || zip.startsWith('63')) {
    return {
      isInArea: true,
      recommendedCity: 'Mittelhessen',
      message: '✓ Wir decken diese mittelhessische Postleitzahl vollständig ab.'
    };
  }

  return {
    isInArea: false,
    recommendedCity: '',
    message: 'ℹ Außerhalb unseres Standardgebietes. Anfrage wird als Sonderprojekt geprüft.'
  };
}
