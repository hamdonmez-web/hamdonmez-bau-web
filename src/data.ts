import { ServiceItem, PromoCampaign } from './types';

export const IMAGE_ASSETS = {
  hero: '/src/assets/images/hero_building_facade_1781111272611.png',
  window: '/src/assets/images/modern_window_1781111287014.png',
  door: '/src/assets/images/modern_door_1781111297940.png',
  installation: '/src/assets/images/window_installation_1781111308997.png',
};

// Known Gießen districts and nearby cities
export const REGIONAL_PARTNERS = [
  'Gießen',
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
    id: 'fenster',
    title: 'Hocheffiziente Fenster',
    description: 'Moderne Kunststoff- und Aluminium-Fenster mit Dreifachverglasung für maximale Energieeffizienz und erstklassigen Schallschutz.',
    longDescription: 'Unsere Fenster vereinen fortschrittlichste Profiltechnologie mit stilvollem Design. Sie schützen Ihr Zuhause vor Wärmeverlust im Winter, übermäßiger Hitze im Sommer und unerwünschtem Lärm. Gefertigt nach strengen deutschen Qualitätsmaßstäben, bieten sie Einbruchschutz bis zur Widerstandsklasse RC2/RC3.',
    features: [
      'U-Wert bis zu 0,73 W/(m²K) (Passivhaus-Standard)',
      'Hochwertige Mehrkammer-Konstruktion',
      'Innovative Dreifachverglasung mit warmer Kante',
      'Verdeckt liegende Sicherheitsbeschläge',
      'Erhältlich in RAL 7016 Anthrazit und über 50 Farbfolien'
    ],
    imageUrl: IMAGE_ASSETS.window,
    badge: 'Bestseller'
  },
  {
    id: 'tueren',
    title: 'Sichere & Elegante Haustüren',
    description: 'Premium-Aluminium- & Holz-Haustüren, die Ästhetik, Spitzen-Wärmedämmung und modernste Sicherheitstechnik (RC3) vereinen.',
    longDescription: 'Ihre Haustür ist die Visitenkarte Ihres Hauses. Deshalb bieten wir Haustüren, die höchste Designansprüche mit extremer Langlebigkeit kombinieren. Ausgestattet mit automatischer Mehrfachverriegelung, massiven Bändern und optionalem Fingerprint- oder Smart-Home-Zugang, bieten wir kompromisslose Sicherheit.',
    features: [
      'Aluminium mit thermischer Trennung für exzellente Dämmung',
      'Sicherheitsverriegelung mit 5-fach Schwenkriegeln',
      'Sicherheitsklasse RC2 oder RC3 serienmäßig konfigurierbar',
      'Exzellente Schalldämmwerte bis zu 43 dB',
      'Individuelle Seitenteile und Oberlichter aus Sicherheitsglas'
    ],
    imageUrl: IMAGE_ASSETS.door,
    badge: 'Premium'
  },
  {
    id: 'montage',
    title: 'Zertifizierte Montage & Service',
    description: 'Komplettservice aus einer Hand: präzises Aufmaß vor Ort, sorgfältiger Ausbau alter Elemente, saubere RAL-Montage und verlässlicher Service.',
    longDescription: 'Selbst das beste Fenster nützt nur, wenn es fachgerecht eingebaut wird. Unsere geschulten Montageteams garantieren den Einbau streng nach RAL-Montagerichtlinien. Wir hinterlassen Ihr Zuhause absolut sauber, kümmern uns um die umweltgerechte Entsorgung der Altteile und stehen Ihnen auch nach dem Einbau für Wartungen zur Seite.',
    features: [
      'Professionelles Aufmaß direkt bei Ihnen in Gießen & Umgebung',
      'Demontage und umweltgerechte Entsorgung Ihrer Altfenster',
      'Montage nach strengen RAL-Richtlinien für lückenlose Abdichtung',
      'Eigene, langjährig erfahrene Montageteams (keine Subunternehmer-Ketten)',
      'Verlässliche Wartung, Einstellarbeiten und schneller Reparaturservice'
    ],
    imageUrl: IMAGE_ASSETS.installation,
    badge: 'Meisterbetrieb'
  }
];

export const SUMMER_PROMO: PromoCampaign = {
  id: 'summer_2026',
  title: 'Sommer-Aktion 2026',
  subtitle: 'Upgrade auf exzellenten Wärmeschutz',
  badge: 'Sonderaktion',
  description: 'Halten Sie die Sommerhitze draußen und sparen Sie Heizkosten im Winter! Bei einer Bestellung im Aktionszeitraum erhalten Sie ein kostenloses Upgrade auf unsere hocheffiziente Dreifachverglasung (Ug = 0.5 W/m²K) im Wert von 10% Rabatt auf das Gesamtpaket.',
  validUntil: '31. August 2026',
  discount: '10% RABATT'
};

export const FAQ = [
  {
    question: 'Bieten Sie Beratung und Aufmaß vor Ort kostenlos an?',
    answer: 'Ja, unser Aufmaß- und Beratungsservice in Gießen, Wetzlar, Marburg und der gesamten Region Wetteraukreis/Lahn-Dill-Kreis ist für Sie absolut unverbindlich und kostenfrei.'
  },
  {
    question: 'Welche Sicherheitsklassen bieten Ihre Fenster und Türen?',
    answer: 'Unsere Standardprodukte verfügen bereits über erhöhten Einbruchschutz. Auf Wunsch statten wir Fenster und Haustüren umfassend nach den Richtlinien der Kriminalpolizei bis hin zu zertifizierten RC2- oder RC3-Sicherheitsstufen aus.'
  },
  {
    question: 'Wie lange dauert die Lieferung und Montage in der Regel?',
    answer: 'Nach präzisem Feinaufmaß und Freigabe beträgt die Lieferzeit je nach Material (Kunststoff ca. 4–6 Wochen, Aluminium ca. 6–8 Wochen). Die anschließende Montage erfolgt termintreu und dauert für ein durchschnittliches Einfamilienhaus meist nur 1 bis 2 Werktage.'
  },
  {
    question: 'Wer entsorgt meine alten Fenster und Türen?',
    answer: 'Das übernehmen wir komplett für Sie. Unser Team baut die alten Elemente vorsichtig aus und transportiert sie direkt zu einem zertifizierten Recycling-Fachbetrieb. Dieser Service ist in unserem Montage-Vollservice enthalten.'
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

  // General Germany starting with 35 or 6
  if (zip.startsWith('35') || zip.startsWith('61')) {
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
