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
    id: 'hoch-tiefbau',
    title: 'Hoch- & Tiefbau',
    description: 'Professioneller Rohbau, Fundamente, Erdarbeiten und schlüsselfertiger Wohnungsbau nach höchsten Maßstäben.',
    longDescription: 'Als starker Partner für Hoch- und Tiefbau realisieren wir schlüsselfertige Wohn- und Gewerbeprojekte in Gießen. Von der Erdsondierung und dem Fundamentbau über präzises Mauerwerk bis hin zum kompletten Rohbau – wir setzen auf moderne Baugeräte, statische Meisterleistung und langlebige Materialien.',
    features: [
      'Eigener, hochmoderner Maschinenpark für Erdarbeiten',
      'Ingenieurgeführte statische Berechnungen & Tragwerksplanung',
      'Schlüsselfertiger Bau von Einfamilienhäusern & Gewerbeflächen',
      'Präzises Vermessungsfeinaufmaß vor jedem Baustart',
      'Festpreis- und Fertigstellungsgarantie'
    ],
    imageUrl: IMAGE_ASSETS.hero,
    badge: 'Festpreis'
  },
  {
    id: 'sanierung',
    title: 'Sanierung & Umbau',
    description: 'Komplette energetische Sanierung, Denkmalschutz, Schadstoffsanierung und Modernisierung bestehender Gebäude.',
    longDescription: 'Erhalten Sie den Wert historischer Bausubstanz oder machen Sie Ihren Altbau fit für die Zukunft. Unser Team ist spezialisiert auf hocheffiziente energetische Fassadendämmungen, statische Umbauten, Denkmalschutzauflagen sowie professionellen Innenausbau. Wir koordinieren alle Gewerke schlüsselfertig.',
    features: [
      'Energetische Gebäudesanierung nach KfW-Effizienzhaus-Standards',
      'Umbauten, Wanddurchbrüche mit Stahlträger-Einzug',
      'Schimmelsanierung, Schadstoffprüfung & Entkernung',
      'Denkmalschutzgerechte Modernisierung mit feinsten Materialien',
      'Professionelle Beratung bei KfW-Zuschüssen (bis zu 20% Förderung)'
    ],
    imageUrl: IMAGE_ASSETS.window,
    badge: 'Nach Aufwand'
  },
  {
    id: 'aussenanlagen',
    title: 'Außenanlagen',
    description: 'Pflasterarbeiten, repräsentative Einfahrten, Mauerbau und moderner Landschaftsbau für Ihr Grundstück.',
    longDescription: 'Wir gestalten den Außenbereich Ihrer Immobilie repräsentativ und funktional. Ob anspruchsvolle Naturstein-Pflasterungen für Hofeinfahrten, Hangflor-Abstützungen, Zaunbau, Fundamente für Garagen oder der komplette landschaftsarchitektonische Gartenbau – wir schaffen harmonische Übergänge.',
    features: [
      'Hochwertige Pflasterungen für Zufahrten, Terrassen und Parkflächen',
      'Stützmauern, Fundamentplatten & Sichtschutzsysteme',
      'Professionelle Entwässerungs- & Rigolensysteme',
      'Individuelle Gartengestaltung und Geländemodellierung',
      'Einsatz von langlebigen Natur- & Betonsteinen aus Hessen'
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
