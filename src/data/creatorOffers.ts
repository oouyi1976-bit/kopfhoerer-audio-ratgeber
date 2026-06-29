export type CreatorOffer = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  bestFor: string;
  highlights: string[];
  image: string;
  affiliateUrl: string;
  provider: "Digistore24";
  affiliateStatus: "ready";
  buttonText: string;
};

export const creatorOffers: CreatorOffer[] = [
  {
    id: "kic-video",
    title: "KIC Video",
    category: "KI-Video",
    shortDescription:
      "Digitales Angebot für Creator, die Videoideen, Clips und visuelle Inhalte mit KI strukturierter umsetzen möchten.",
    bestFor: "Creator, die Video-Workflows mit KI kennenlernen möchten",
    highlights: ["KI-Video-Fokus", "Content-Ideen strukturieren", "Für Musik- und Creator-Projekte", "Digitaler Lernansatz"],
    image: "/creator-offer-images/kic-video.webp",
    affiliateUrl: "https://www.kimate.de/kic-video/#aff=Benman8810",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
  {
    id: "ki-music-business",
    title: "KI Music Business",
    category: "KI-Musik",
    shortDescription:
      "Kursangebot für alle, die verstehen möchten, wie KI-gestützte Musikproduktion und Vermarktung zusammenspielen können.",
    bestFor: "Musik-Creator, die digitale Musikprojekte besser planen möchten",
    highlights: ["Musikbusiness-Grundlagen", "KI-gestützte Workflows", "Für eigene Releases interessant", "Ohne Erfolgsversprechen"],
    image: "/creator-offer-images/ki-music-business.webp",
    affiliateUrl: "https://onlinekurse-von-experten.com/ki-music-business-frontend/#aff=Benman8810",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
  {
    id: "ki-superstar",
    title: "KI Superstar",
    category: "Creator-Kurs",
    shortDescription:
      "Digitales Lernangebot für Creator, die KI-Werkzeuge für Musik, Content und kreative Projekte ausprobieren möchten.",
    bestFor: "Einsteiger und Creator, die KI im Kreativprozess testen möchten",
    highlights: ["Kreative KI-Anwendungen", "Für Content-Ideen geeignet", "Musik- und Medienbezug", "Praxisnaher Einstieg"],
    image: "/creator-offer-images/ki-superstar.webp",
    affiliateUrl: "https://onlinekurse-von-experten.com/ki-superstar-frontend-4/#aff=Benman8810",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
  {
    id: "ki-musikvideo-business",
    title: "KI Musikvideo Business",
    category: "Musikvideo",
    shortDescription:
      "Angebot für Musik- und Video-Creator, die lernen möchten, wie KI bei Musikvideo-Konzepten und Umsetzung helfen kann.",
    bestFor: "Creator, die Musik und Video-Content zusammen denken möchten",
    highlights: ["Musikvideo-Workflows", "KI-gestützte Visuals", "Für Content-Planung interessant", "Digitale Kursstruktur"],
    image: "/creator-offer-images/ki-musikvideo-business.webp",
    affiliateUrl: "https://onlinekurse-von-experten.com/ki-musikvideo-business-frontend499-2/#aff=Benman8810",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
  {
    id: "ki-musik-marketer",
    title: "KI Musik Marketer",
    category: "Musikmarketing",
    shortDescription:
      "Digitales Angebot für Musiker und Creator, die KI für Content-Planung, Positionierung und Musikmarketing nutzen möchten.",
    bestFor: "Musik-Creator, die ihre Veröffentlichungen strukturierter begleiten möchten",
    highlights: ["Marketing-Fokus", "Content-Planung mit KI", "Für Musiker und Creator", "Keine Umsatzgarantien"],
    image: "/creator-offer-images/ki-musik-marketer.webp",
    affiliateUrl: "https://onlinekurse-von-experten.com/ki-musik-marketer-frontend/#aff=Benman8810",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
  {
    id: "digistore24-613120",
    title: "Digitales Creator-Angebot 613120",
    category: "Creator-Tool",
    shortDescription:
      "Externes Digistore24-Angebot für digitale Creator-Workflows rund um KI, Musik oder Content-Produktion.",
    bestFor: "Creator, die ein ergänzendes digitales Angebot prüfen möchten",
    highlights: ["Digitales Angebot", "Für kreative Workflows", "Externe Detailseite", "Vor Kauf Inhalte prüfen"],
    image: "/creator-offer-images/digistore24-613120.webp",
    affiliateUrl: "https://www.digistore24.com/redir/613120/Benman8810/",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
  {
    id: "digistore24-277027",
    title: "Digitales Creator-Angebot 277027",
    category: "Creator-Kurs",
    shortDescription:
      "Digistore24-Angebot für Nutzer, die digitale Lerninhalte oder Tools für eigene Creator-Projekte vergleichen möchten.",
    bestFor: "Creator, die digitale Kurs- oder Toolangebote sondieren möchten",
    highlights: ["Digitaler Kurs-/Tool-Fokus", "Für Content-Projekte geeignet", "Externe Angebotsseite", "Ohne Preisübernahme"],
    image: "/creator-offer-images/digistore24-277027.webp",
    affiliateUrl: "https://www.digistore24.com/redir/277027/Benman8810/",
    provider: "Digistore24",
    affiliateStatus: "ready",
    buttonText: "Mehr erfahren",
  },
];
