export type AffiliateStatus = "ready" | "placeholder";

export type AudioProduct = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  bestFor: string;
  highlights: string[];
  image: string;
  affiliateUrl: string;
  affiliateStatus: AffiliateStatus;
  asin: string;
  buttonText: string;
  collections: string[];
  kind: "earbuds" | "openear" | "overear" | "headset" | "speaker" | "party";
  tone: string;
};

export const amazonPartnerTag = "epic05e-21";

export const audioProducts: AudioProduct[] = [
  {
    "id": "sony-wf-1000xm5",
    "title": "Sony WF-1000XM5",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Premium-In-Ears mit starkem Noise Cancelling und sehr kompaktem Case.",
    "bestFor": "Pendeln, Fokuszeiten und hochwertige Alltagsmusik",
    "highlights": [
      "Aktives Noise Cancelling",
      "Multipoint-Bluetooth",
      "IPX4-Schutz",
      "Schnellladefunktion"
    ],
    "image": "/audio-product-images/sony-wf-1000xm5.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0C4TLFZSZ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0C4TLFZSZ",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "blue"
  },
  {
    "id": "sony-wf-c710n",
    "title": "Sony WF-C710N",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Leichte True-Wireless-Earbuds mit ANC und alltagstauglicher Akkulaufzeit.",
    "bestFor": "kompakte ANC-Kopfhörer für Bahn, Büro und Uni",
    "highlights": [
      "Touch-Bedienung",
      "Multipoint-Verbindung",
      "IPX4",
      "Lange Case-Laufzeit"
    ],
    "image": "/audio-product-images/sony-wf-c710n.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DZ6Z6T1C?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DZ6Z6T1C",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "violet"
  },
  {
    "id": "jabra-elite-8-active",
    "title": "Jabra Elite 8 Active",
    "category": "Sportkopfhörer",
    "shortDescription": "Robuste Sport-In-Ears mit sicherem Sitz und adaptiver Geräuschunterdrückung.",
    "bestFor": "Training, Laufstrecken und aktive Pendler",
    "highlights": [
      "Wasser- und schweißresistent",
      "Adaptives ANC",
      "Stabiler Halt",
      "Sechs Mikrofone"
    ],
    "image": "/audio-product-images/jabra-elite-8-active.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CB6DZX79?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CB6DZX79",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "sportkopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "cyan"
  },
  {
    "id": "jbl-live-beam-3",
    "title": "JBL Live Beam 3",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Moderne Earbuds mit adaptivem ANC, starkem Case-Konzept und IP55-Schutz.",
    "bestFor": "Vielnutzer, die Bedienkomfort und lange Laufzeit wollen",
    "highlights": [
      "True Adaptive Noise Cancelling",
      "IP55",
      "Lange Akkulaufzeit",
      "Schnelles Pairing"
    ],
    "image": "/audio-product-images/jbl-live-beam-3.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D44H2RG3?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D44H2RG3",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "purple"
  },
  {
    "id": "soundcore-liberty-4-nc",
    "title": "Soundcore Liberty 4 NC",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Beliebte ANC-Earbuds mit App-EQ und starkem Preis-Leistungs-Fokus.",
    "bestFor": "preisbewusste Nutzer mit ANC-Wunsch",
    "highlights": [
      "App-Equalizer",
      "Adaptives ANC",
      "Transparenzmodus",
      "Mehrere Farben"
    ],
    "image": "/audio-product-images/soundcore-liberty-4-nc.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0BZV5MQKM?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0BZV5MQKM",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "teal"
  },
  {
    "id": "soundcore-p40i",
    "title": "Soundcore P40i",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Kompakte Earbuds für Alltag, Calls und Streaming ohne Premium-Aufpreis.",
    "bestFor": "günstige Bluetooth-In-Ears für jeden Tag",
    "highlights": [
      "Kompaktes Ladecase",
      "App-Steuerung",
      "Mikrofone für Telefonie",
      "Solide Akkulaufzeit"
    ],
    "image": "/audio-product-images/soundcore-p40i.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CQXHC5FQ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CQXHC5FQ",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "blue"
  },
  {
    "id": "nothing-ear-a",
    "title": "Nothing Ear (a)",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Designstarke Earbuds mit transparentem Look und flexiblem Alltagsprofil.",
    "bestFor": "Nutzer, die Technikoptik und kompakte Maße mögen",
    "highlights": [
      "Auffälliges Case-Design",
      "ANC-Modi",
      "App-Anpassung",
      "Leichte Bauweise"
    ],
    "image": "/audio-product-images/nothing-ear-a.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CXPR5412?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CXPR5412",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "yellow"
  },
  {
    "id": "bose-quietcomfort-earbuds",
    "title": "Bose QuietComfort Earbuds",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Komfortorientierte ANC-Earbuds für ruhige Arbeitsphasen und Reisen.",
    "bestFor": "lange Hörsessions mit möglichst wenig Umgebungslärm",
    "highlights": [
      "Komfort-Fokus",
      "ANC und Transparenz",
      "Stimmige App-Bedienung",
      "Alltags-Case"
    ],
    "image": "/audio-product-images/bose-quietcomfort-earbuds.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D8BZDPXB?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D8BZDPXB",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "gray"
  },
  {
    "id": "beats-fit-pro",
    "title": "Beats Fit Pro",
    "category": "Sportkopfhörer",
    "shortDescription": "Sportliche In-Ears mit Flügelspitzen und nahtloser Smartphone-Integration.",
    "bestFor": "Training, Apple-Nutzer und mobile Workouts",
    "highlights": [
      "Stabilisierende Flügel",
      "ANC",
      "Transparenzmodus",
      "Kompaktes Case"
    ],
    "image": "/audio-product-images/beats-fit-pro.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09Q7CW3M6?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09Q7CW3M6",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "sportkopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "red"
  },
  {
    "id": "shokz-openrun-pro-2",
    "title": "Shokz OpenRun Pro 2",
    "category": "Sportkopfhörer",
    "shortDescription": "Open-Ear-Sportkopfhörer, bei denen Umgebung und Verkehr hörbar bleiben.",
    "bestFor": "Laufen, Radfahren und Outdoor-Training mit Umgebungswahrnehmung",
    "highlights": [
      "Open-Ear-Prinzip",
      "IP55",
      "USB-C-Schnellladung",
      "Reflektierende Details"
    ],
    "image": "/audio-product-images/shokz-openrun-pro-2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D2HKCMBP?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D2HKCMBP",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "sportkopfhoerer"
    ],
    "kind": "openear",
    "tone": "cyan"
  },
  {
    "id": "shokz-openfit-air",
    "title": "Shokz OpenFit Air",
    "category": "Sportkopfhörer",
    "shortDescription": "Offene Earbuds für Sport, Spaziergänge und calls ohne abgeschottetes Gefühl.",
    "bestFor": "Nutzer, die keine In-Ear-Abdichtung mögen",
    "highlights": [
      "Offenes Tragegefühl",
      "Leichte Bügel",
      "Bluetooth-Multipoint",
      "Alltagstaugliches Case"
    ],
    "image": "/audio-product-images/shokz-openfit-air.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CRTM6B55?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CRTM6B55",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "sportkopfhoerer"
    ],
    "kind": "openear",
    "tone": "teal"
  },
  {
    "id": "sennheiser-momentum-true-wireless-4",
    "title": "Sennheiser Momentum True Wireless 4",
    "category": "In-Ear-Kopfhörer",
    "shortDescription": "Klangorientierte Premium-Earbuds für detailreiche Musik und moderne Codecs.",
    "bestFor": "Musikhörer, die kompaktes Format und Klangfokus suchen",
    "highlights": [
      "Klangprofil per App",
      "ANC",
      "Transparenzmodus",
      "Premium-Case"
    ],
    "image": "/audio-product-images/sennheiser-momentum-true-wireless-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CTHVX6DK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CTHVX6DK",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "in-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "earbuds",
    "tone": "silver"
  },
  {
    "id": "sony-wh-1000xm5",
    "title": "Sony WH-1000XM5",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Sehr beliebter Over-Ear mit starkem ANC, leichtem Sitz und langer Laufzeit.",
    "bestFor": "Reisen, konzentriertes Arbeiten und leise Pendelwege",
    "highlights": [
      "Premium-ANC",
      "Bis zu 30 Stunden Akku",
      "Transparenzmodus",
      "Bluetooth-Multipoint"
    ],
    "image": "/audio-product-images/sony-wh-1000xm5.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09Y2MYL5C?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09Y2MYL5C",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "blue"
  },
  {
    "id": "sony-wh-1000xm4",
    "title": "Sony WH-1000XM4",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Bewährter ANC-Over-Ear mit faltbarem Design und komfortabler App-Steuerung.",
    "bestFor": "Reisende, die ein ausgereiftes ANC-Modell suchen",
    "highlights": [
      "Faltbares Design",
      "ANC",
      "Touch-Bedienung",
      "Schnellladefunktion"
    ],
    "image": "/audio-product-images/sony-wh-1000xm4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B08C7KG5LP?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B08C7KG5LP",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "violet"
  },
  {
    "id": "sennheiser-momentum-4",
    "title": "Sennheiser Momentum 4 Wireless",
    "category": "Over-Ear-Kopfhörer",
    "shortDescription": "Klangstarker Bluetooth-Over-Ear mit langer Akkulaufzeit und adaptivem ANC.",
    "bestFor": "Musikfans, die Laufzeit und warmen Klang priorisieren",
    "highlights": [
      "60-Stunden-Akku",
      "Adaptives ANC",
      "Klarer Call-Modus",
      "Faltbares Case"
    ],
    "image": "/audio-product-images/sennheiser-momentum-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CCRZPKR1?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CCRZPKR1",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "copper"
  },
  {
    "id": "soundcore-q30",
    "title": "Soundcore by Anker Q30",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Preisbewusster Over-Ear mit ANC-Modi, App-EQ und bequemer Polsterung.",
    "bestFor": "Homeoffice, Studium und günstigen ANC-Einstieg",
    "highlights": [
      "Hybrid-ANC",
      "App-EQ",
      "40 Stunden mit ANC",
      "Zwei Geräte koppelbar"
    ],
    "image": "/audio-product-images/soundcore-q30.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B08HMWZBXC?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B08HMWZBXC",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "blue"
  },
  {
    "id": "jbl-live-770nc",
    "title": "JBL Live 770NC",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Over-Ear mit adaptivem Noise Cancelling und kräftigem JBL-Klangbild.",
    "bestFor": "lange Playlists, Serien und tägliche Wege",
    "highlights": [
      "Adaptives ANC",
      "Bis zu 65 Stunden",
      "Sprachassistent",
      "Multipoint"
    ],
    "image": "/audio-product-images/jbl-live-770nc.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CHMN4KVN?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CHMN4KVN",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "purple"
  },
  {
    "id": "sony-ult-wear",
    "title": "Sony ULT Wear",
    "category": "Over-Ear-Kopfhörer",
    "shortDescription": "Bassbetonter Over-Ear mit Noise Cancelling und kräftigem Klangcharakter.",
    "bestFor": "Pop, Hip-Hop, elektronische Musik und unterwegs",
    "highlights": [
      "ULT-Bassmodus",
      "ANC",
      "30 Stunden Akku",
      "Klare Anrufe"
    ],
    "image": "/audio-product-images/sony-ult-wear.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CX1TJXKV?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CX1TJXKV",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "red"
  },
  {
    "id": "bose-quietcomfort-ultra-headphones",
    "title": "Bose QuietComfort Ultra Headphones",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Komfortabler Premium-Over-Ear mit sehr ruhigem Hörgefühl und Raumklang-Fokus.",
    "bestFor": "Vielflieger, Bahnfahrten und lange Bürotage",
    "highlights": [
      "Premium-Komfort",
      "Starkes ANC",
      "Transparenzmodus",
      "Immersive-Audio-Modus"
    ],
    "image": "/audio-product-images/bose-quietcomfort-ultra-headphones.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0FDKQZ18F?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0FDKQZ18F",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "gray"
  },
  {
    "id": "soundcore-space-one",
    "title": "Soundcore Space One",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Leichter ANC-Over-Ear mit LDAC, App-Steuerung und langem Akku.",
    "bestFor": "viel Klangkontrolle ohne Premium-Preis",
    "highlights": [
      "LDAC",
      "App-EQ",
      "40 Stunden ANC",
      "Bequemer Sitz"
    ],
    "image": "/audio-product-images/soundcore-space-one.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0C6KFZC9Z?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0C6KFZC9Z",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "teal"
  },
  {
    "id": "marshall-major-v",
    "title": "Marshall Major V",
    "category": "Over-Ear-Kopfhörer",
    "shortDescription": "Kompakter On-Ear/Over-Ear-Allrounder mit ikonischer Optik und sehr langer Laufzeit.",
    "bestFor": "Alltag, Reisen und Fans eines rockigen Designs",
    "highlights": [
      "Sehr lange Akkulaufzeit",
      "Faltbare Form",
      "Bluetooth",
      "Robuster Bügel"
    ],
    "image": "/audio-product-images/marshall-major-v.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D1VN2VB7?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D1VN2VB7",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "copper"
  },
  {
    "id": "beats-solo-4",
    "title": "Beats Solo 4",
    "category": "Over-Ear-Kopfhörer",
    "shortDescription": "Leichter Bluetooth-Kopfhörer mit schnellem Pairing und knackigem Klangprofil.",
    "bestFor": "mobile Playlists, Pendeln und Apple-Android-Mix",
    "highlights": [
      "Bis zu 50 Stunden Akku",
      "Schnelles Pairing",
      "USB-C",
      "Leichte Bauweise"
    ],
    "image": "/audio-product-images/beats-solo-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CZPMXGSH?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CZPMXGSH",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "red"
  },
  {
    "id": "audio-technica-ath-m50xbt2",
    "title": "Audio-Technica ATH-M50xBT2",
    "category": "Over-Ear-Kopfhörer",
    "shortDescription": "Bluetooth-Version eines bekannten Studiokopfhörer-Konzepts mit neutralem Fokus.",
    "bestFor": "Musikproduktion, Editing und konzentriertes Hören",
    "highlights": [
      "Studio-inspirierter Klang",
      "Bluetooth",
      "Faltbares Design",
      "Kabeloption"
    ],
    "image": "/audio-product-images/audio-technica-ath-m50xbt2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09BYFHL25?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09BYFHL25",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "silver"
  },
  {
    "id": "beyerdynamic-dt-770-pro",
    "title": "beyerdynamic DT 770 PRO 80 Ohm",
    "category": "Over-Ear-Kopfhörer",
    "shortDescription": "Kabelgebundener Studioklassiker für Recording, Monitoring und ruhige Arbeitsplätze.",
    "bestFor": "Studio, Schnittplatz und detailbewusstes Hören am Schreibtisch",
    "highlights": [
      "Geschlossene Bauweise",
      "80-Ohm-Variante",
      "Weiche Velours-Polster",
      "Made in Germany"
    ],
    "image": "/audio-product-images/beyerdynamic-dt-770-pro.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0016MNAAI?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0016MNAAI",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "gray"
  },
  {
    "id": "jbl-tour-one-m2",
    "title": "JBL Tour One M2",
    "category": "Noise-Cancelling-Kopfhörer",
    "shortDescription": "Business-tauglicher ANC-Over-Ear mit kräftigem Sound und vielen Komfortfunktionen.",
    "bestFor": "Calls, Reisen und hybride Arbeit",
    "highlights": [
      "Adaptives ANC",
      "Call-Mikrofone",
      "App-Steuerung",
      "Lange Laufzeit"
    ],
    "image": "/audio-product-images/jbl-tour-one-m2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0BSXDJSPH?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0BSXDJSPH",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "blue"
  },
  {
    "id": "steelseries-arctis-nova-7-gen2",
    "title": "SteelSeries Arctis Nova 7 Wireless Gen 2",
    "category": "Gaming-Headsets",
    "shortDescription": "Multiplattform-Gaming-Headset mit 2,4 GHz und Bluetooth parallel.",
    "bestFor": "PC, Konsole, Switch und Discord neben dem Spielsound",
    "highlights": [
      "2,4 GHz plus Bluetooth",
      "Über 50 Stunden Akku",
      "App-Steuerung",
      "Multiplattform"
    ],
    "image": "/audio-product-images/steelseries-arctis-nova-7-gen2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0FS7JXWJG?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0FS7JXWJG",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "cyan"
  },
  {
    "id": "hyperx-cloud-iii-s-wireless",
    "title": "HyperX Cloud III S Wireless",
    "category": "Gaming-Headsets",
    "shortDescription": "Kabelloses Headset mit langer Laufzeit und abnehmbarem Mikrofon.",
    "bestFor": "lange PC- und Konsolensessions",
    "highlights": [
      "2,4 GHz und Bluetooth",
      "Bis zu 120 Stunden",
      "53-mm-Treiber",
      "Abnehmbares Mikrofon"
    ],
    "image": "/audio-product-images/hyperx-cloud-iii-s-wireless.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0F844LMG3?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0F844LMG3",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "silver"
  },
  {
    "id": "logitech-g-astro-a50-lightspeed",
    "title": "Logitech G Astro A50 Lightspeed",
    "category": "Gaming-Headsets",
    "shortDescription": "Premium-Headset mit Basisstation und schnellem Wechsel zwischen mehreren Systemen.",
    "bestFor": "Setup mit PC, Konsole und Switch am gleichen Platz",
    "highlights": [
      "Basisstation",
      "LIGHTSPEED",
      "Bluetooth",
      "PRO-G Graphene-Treiber"
    ],
    "image": "/audio-product-images/logitech-g-astro-a50-lightspeed.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DBJ5PBLT?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DBJ5PBLT",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "violet"
  },
  {
    "id": "razer-blackshark-v2-hyperspeed",
    "title": "Razer BlackShark V2 HyperSpeed",
    "category": "Gaming-Headsets",
    "shortDescription": "Leichtes E-Sport-Headset mit breitem Mikrofon-Fokus und kabellosem Komfort.",
    "bestFor": "kompetitive Shooter und lange Voice-Sessions",
    "highlights": [
      "Leichtes Gehäuse",
      "HyperClear-Mikrofon",
      "TriForce-Treiber",
      "Bluetooth"
    ],
    "image": "/audio-product-images/razer-blackshark-v2-hyperspeed.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CBRTBSNV?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CBRTBSNV",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "green"
  },
  {
    "id": "corsair-hs80-max",
    "title": "Corsair HS80 MAX Wireless",
    "category": "Gaming-Headsets",
    "shortDescription": "Bequemes Multiplattform-Headset mit Dolby-Atmos-Fokus und solidem Mikrofon.",
    "bestFor": "PC-Gaming, Konsole und lange Sessions mit Voicechat",
    "highlights": [
      "Multiplattform",
      "Dolby Atmos",
      "Omnidirektionales Mikrofon",
      "iCUE-Kompatibilität"
    ],
    "image": "/audio-product-images/corsair-hs80-max.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D5Z1C5TB?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D5Z1C5TB",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "blue"
  },
  {
    "id": "logitech-g-pro-x-2-lightspeed",
    "title": "Logitech G PRO X 2 Lightspeed",
    "category": "Gaming-Headsets",
    "shortDescription": "Pro-orientiertes Gaming-Headset mit kabellosem Fokus und klarer Abstimmung.",
    "bestFor": "kompetitives Gaming mit nüchternem Setup",
    "highlights": [
      "LIGHTSPEED-Funk",
      "Abnehmbares Mikrofon",
      "Solider Bügel",
      "PC- und Konsolenfokus"
    ],
    "image": "/audio-product-images/logitech-g-pro-x-2-lightspeed.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B07W6H7PY2?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B07W6H7PY2",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "gray"
  },
  {
    "id": "sony-inzone-h5",
    "title": "Sony INZONE H5",
    "category": "Gaming-Headsets",
    "shortDescription": "Kabelloses Gaming-Headset mit räumlichem Fokus für PC und PlayStation.",
    "bestFor": "PS5- und PC-Spieler mit leichtem Headset-Wunsch",
    "highlights": [
      "2,4-GHz-Funk",
      "Spatial-Audio-Fokus",
      "Leichtes Design",
      "Ausklappbares Mikrofon"
    ],
    "image": "/audio-product-images/sony-inzone-h5.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CJ3H9XD9?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CJ3H9XD9",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "gaming-headsets"
    ],
    "kind": "headset",
    "tone": "silver"
  },
  {
    "id": "jbl-junior-470nc",
    "title": "JBL Junior 470NC",
    "category": "Kinderkopfhörer",
    "shortDescription": "Kabelloser Kinder-Over-Ear mit Safe-Sound-Fokus und aktivem Noise Cancelling.",
    "bestFor": "Schulweg, Reisen und ruhiges Hören für Kinder",
    "highlights": [
      "Lautstärkebegrenzung",
      "ANC",
      "50 Stunden Wiedergabe",
      "Einfache Bedienung"
    ],
    "image": "/audio-product-images/jbl-junior-470nc.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DHS72HR8?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DHS72HR8",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer",
      "noise-cancelling-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "blue"
  },
  {
    "id": "belkin-soundform-mini",
    "title": "Belkin SoundForm Mini",
    "category": "Kinderkopfhörer",
    "shortDescription": "Kinderfreundlicher Bluetooth-Kopfhörer mit integriertem Mikrofon und leichter Form.",
    "bestFor": "Unterricht, Tablet-Zeit und Reisen",
    "highlights": [
      "Lautstärkebegrenzung",
      "Integriertes Mikrofon",
      "30 Stunden Wiedergabe",
      "Weiche Polster"
    ],
    "image": "/audio-product-images/belkin-soundform-mini.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D4ZNWLKL?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D4ZNWLKL",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "cyan"
  },
  {
    "id": "philips-tak4206",
    "title": "Philips TAK4206",
    "category": "Kinderkopfhörer",
    "shortDescription": "Kabelloser Kinderkopfhörer mit App-Kontrolle, LEDs und Lautstärkebegrenzung.",
    "bestFor": "Kinderzimmer, Reisen und kontrollierte Hörzeiten",
    "highlights": [
      "85-dB-Begrenzung",
      "App mit Kindersicherung",
      "LED-Leuchten",
      "Weiche Ohrpolster"
    ],
    "image": "/audio-product-images/philips-tak4206.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09313H1MS?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09313H1MS",
    "buttonText": "Zum Angebot",
    "collections": [
      "kopfhoerer",
      "over-ear-kopfhoerer"
    ],
    "kind": "overear",
    "tone": "purple"
  },
  {
    "id": "jbl-charge-5",
    "title": "JBL Charge 5",
    "category": "Bluetooth-Lautsprecher",
    "shortDescription": "Robuster Bluetooth-Speaker mit Powerbank-Funktion und druckvollem Sound.",
    "bestFor": "Balkon, Küche, Garten und Wochenendtrips",
    "highlights": [
      "IP67",
      "Powerbank-Funktion",
      "Bis zu 20 Stunden",
      "Kräftiger Bass"
    ],
    "image": "/audio-product-images/jbl-charge-5.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B08VDNCZT9?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B08VDNCZT9",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "blue"
  },
  {
    "id": "jbl-flip-6",
    "title": "JBL Flip 6",
    "category": "Bluetooth-Lautsprecher",
    "shortDescription": "Kompakter, wasserfester Allrounder mit gutem Format für unterwegs.",
    "bestFor": "Reisen, Bad, Küche und kleine Outdoor-Runden",
    "highlights": [
      "IP67",
      "2-Wege-System",
      "Bis zu 12 Stunden",
      "Sehr transportabel"
    ],
    "image": "/audio-product-images/jbl-flip-6.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09HGRXXTM?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09HGRXXTM",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "cyan"
  },
  {
    "id": "jbl-go-4",
    "title": "JBL Go 4",
    "category": "Mini-Lautsprecher",
    "shortDescription": "Sehr kleiner Bluetooth-Lautsprecher für Tasche, Bad und spontane Musik.",
    "bestFor": "minimalistische Setups und kurze Ausflüge",
    "highlights": [
      "Mini-Format",
      "Wasser- und staubfest",
      "Playtime-Boost",
      "Viele Farben"
    ],
    "image": "/audio-product-images/jbl-go-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CX5C6WP3?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CX5C6WP3",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "purple"
  },
  {
    "id": "sony-srs-xb100",
    "title": "Sony SRS-XB100",
    "category": "Mini-Lautsprecher",
    "shortDescription": "Leichter Outdoor-Mini mit Trageriemen und IP67-Schutz.",
    "bestFor": "Rucksack, Reise, Dusche und kleine Räume",
    "highlights": [
      "IP67",
      "Trageriemen",
      "16 Stunden Akku",
      "Freisprechfunktion"
    ],
    "image": "/audio-product-images/sony-srs-xb100.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CCYFP62W?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CCYFP62W",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "teal"
  },
  {
    "id": "bose-soundlink-flex-2",
    "title": "Bose SoundLink Flex 2. Gen.",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Wasserdichter Premium-Speaker mit natürlichem Klang und kompaktem Gehäuse.",
    "bestFor": "Terrasse, Reise und hochwertige Hintergrundmusik",
    "highlights": [
      "Wasser- und staubdicht",
      "Bis zu 12 Stunden",
      "Robustes Gehäuse",
      "Klarer Klangfokus"
    ],
    "image": "/audio-product-images/bose-soundlink-flex-2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D6WD2QSQ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D6WD2QSQ",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "gray"
  },
  {
    "id": "ultimate-ears-wonderboom-4",
    "title": "Ultimate Ears WONDERBOOM 4",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Schwimmfähiger 360-Grad-Speaker für Wasser, Picknick und Festivalcamp.",
    "bestFor": "Pool, Strand und unkomplizierte Outdoor-Musik",
    "highlights": [
      "Schwimmfähig",
      "360-Grad-Klang",
      "Staubdicht",
      "Outdoor-Modus"
    ],
    "image": "/audio-product-images/ultimate-ears-wonderboom-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D3X3YKVF?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D3X3YKVF",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "violet"
  },
  {
    "id": "soundcore-motion-300",
    "title": "Soundcore Motion 300",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Mobiler Hi-Res-Speaker mit SmartTune, Stereo-Leistung und IPX7.",
    "bestFor": "Camping, Wandern und flexible Raumpositionen",
    "highlights": [
      "30 Watt Stereo",
      "SmartTune",
      "IPX7",
      "13 Stunden Laufzeit"
    ],
    "image": "/audio-product-images/soundcore-motion-300.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CGDL42CT?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CGDL42CT",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "blue"
  },
  {
    "id": "soundcore-motion-plus",
    "title": "Soundcore Motion+",
    "category": "Bluetooth-Lautsprecher",
    "shortDescription": "Klangstarker Bluetooth-Speaker mit Hi-Res-Fokus, App-EQ und IPX7.",
    "bestFor": "Wohnzimmer, Terrasse und detailreicheren Bluetooth-Sound",
    "highlights": [
      "30 Watt",
      "App-EQ",
      "IPX7",
      "USB-C"
    ],
    "image": "/audio-product-images/soundcore-motion-plus.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B07P39MLKH?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B07P39MLKH",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "cyan"
  },
  {
    "id": "soundcore-boom-2",
    "title": "Soundcore Boom 2",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Kräftiger Outdoor-Speaker mit Subwoofer, Licht und langer Akkulaufzeit.",
    "bestFor": "Garten, Camping, Strand und kleine Partys",
    "highlights": [
      "80 Watt",
      "IPX7 und schwimmfähig",
      "24 Stunden Akku",
      "LED-Licht"
    ],
    "image": "/audio-product-images/soundcore-boom-2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CQ53RVTW?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CQ53RVTW",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "party-lautsprecher"
    ],
    "kind": "party",
    "tone": "purple"
  },
  {
    "id": "soundcore-boom-2-plus",
    "title": "Soundcore Boom 2 Plus",
    "category": "Party-Lautsprecher",
    "shortDescription": "Größerer Outdoor- und Party-Speaker mit hoher Leistung und Powerbank-Funktion.",
    "bestFor": "Gartenpartys, Campingplätze und laute Outdoor-Sessions",
    "highlights": [
      "140 Watt",
      "IPX7",
      "RGB-Lichter",
      "Powerbank"
    ],
    "image": "/audio-product-images/soundcore-boom-2-plus.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CZ7DY692?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CZ7DY692",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "party-lautsprecher"
    ],
    "kind": "party",
    "tone": "violet"
  },
  {
    "id": "ultimate-ears-boom-4",
    "title": "Ultimate Ears BOOM 4",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Schwimmfähiger 360-Grad-Lautsprecher mit kompaktem, partyfestem Format.",
    "bestFor": "Strand, Park und Gruppenmusik unterwegs",
    "highlights": [
      "360-Grad-Klang",
      "Schwimmfähig",
      "15 Stunden Akku",
      "45 Meter Reichweite"
    ],
    "image": "/audio-product-images/ultimate-ears-boom-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D3WLCJSJ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D3WLCJSJ",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "teal"
  },
  {
    "id": "ultimate-ears-megaboom-4",
    "title": "Ultimate Ears MEGABOOM 4",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Größerer UE-Speaker mit kräftigem 360-Grad-Sound und robustem Gehäuse.",
    "bestFor": "größere Picknicks, Garten und längere Outdoor-Tage",
    "highlights": [
      "360-Grad-Sound",
      "Schwimmfähig",
      "20 Stunden Akku",
      "Kräftige Tiefen"
    ],
    "image": "/audio-product-images/ultimate-ears-megaboom-4.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D3WMD9C4?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D3WMD9C4",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "party-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "blue"
  },
  {
    "id": "bose-soundlink-max",
    "title": "Bose SoundLink Max",
    "category": "Bluetooth-Lautsprecher",
    "shortDescription": "Große tragbare Bose-Box mit kräftigem Klang und wetterfestem Gehäuse.",
    "bestFor": "hochwertige Musik auf Terrasse, Balkon und unterwegs",
    "highlights": [
      "Bis zu 20 Stunden",
      "USB-C",
      "AUX-Eingang",
      "Wasserdichtes Gehäuse"
    ],
    "image": "/audio-product-images/bose-soundlink-max.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0D1CSN1QR?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0D1CSN1QR",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "gray"
  },
  {
    "id": "sony-ult-field-1",
    "title": "Sony ULT Field 1",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Kompakter Sony-Speaker mit Bassfokus, IP67 und stoßfester Ausrichtung.",
    "bestFor": "Rucksack, Bad, Park und kleine Outdoor-Sessions",
    "highlights": [
      "IP67",
      "Stoßfest",
      "12 Stunden Akku",
      "Freisprechfunktion"
    ],
    "image": "/audio-product-images/sony-ult-field-1.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CX1WXP8M?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CX1WXP8M",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "cyan"
  },
  {
    "id": "sony-ult-field-3",
    "title": "Sony ULT Field 3",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Tragbarer Sony-Speaker mit Schulterriemen, Bassmodus und langer Laufzeit.",
    "bestFor": "Outdoor-Tage, Grillabende und mobile Setups",
    "highlights": [
      "24 Stunden Akku",
      "IP67",
      "Schulterriemen",
      "ULT Power Sound"
    ],
    "image": "/audio-product-images/sony-ult-field-3.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DZ76B7XQ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DZ76B7XQ",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "purple"
  },
  {
    "id": "marshall-emberton-iii",
    "title": "Marshall Emberton III",
    "category": "Bluetooth-Lautsprecher",
    "shortDescription": "Designstarker Speaker im Marshall-Stil mit wasserfestem Gehäuse.",
    "bestFor": "Wohnzimmer, Regal, Balkon und Design-Setups",
    "highlights": [
      "IP67",
      "Über 32 Stunden",
      "Kompaktes Gehäuse",
      "Klassische Bedienung"
    ],
    "image": "/audio-product-images/marshall-emberton-iii.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0GXH3N61Z?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0GXH3N61Z",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "copper"
  },
  {
    "id": "marshall-willen-ii",
    "title": "Marshall Willen II",
    "category": "Mini-Lautsprecher",
    "shortDescription": "Kleiner, robuster Marshall-Speaker mit markanter Form und langer Laufzeit.",
    "bestFor": "Schreibtisch, Küche, Rucksack und Bad",
    "highlights": [
      "IP67",
      "Kompakt",
      "17+ Stunden Akku",
      "Befestigungsband"
    ],
    "image": "/audio-product-images/marshall-willen-ii.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DD7T8H2Q?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DD7T8H2Q",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "copper"
  },
  {
    "id": "tribit-stormbox-micro-2",
    "title": "Tribit StormBox Micro 2",
    "category": "Mini-Lautsprecher",
    "shortDescription": "Sehr kompakter Outdoor-Speaker mit Befestigungsband und Powerbank-Funktion.",
    "bestFor": "Fahrrad, Rucksack und minimalistische Ausflüge",
    "highlights": [
      "Kompaktes Format",
      "Befestigungsriemen",
      "IP67",
      "Powerbank-Funktion"
    ],
    "image": "/audio-product-images/tribit-stormbox-micro-2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09Q59321N?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09Q59321N",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "teal"
  },
  {
    "id": "tribit-stormbox-blast",
    "title": "Tribit StormBox Blast",
    "category": "Party-Lautsprecher",
    "shortDescription": "Großer Bluetooth-Speaker mit Licht, Bass und viel Reserven für draußen.",
    "bestFor": "Partys, Garten und lautere Gruppen",
    "highlights": [
      "Großes Gehäuse",
      "Lichteffekte",
      "Bassmodus",
      "Lange Laufzeit"
    ],
    "image": "/audio-product-images/tribit-stormbox-blast.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B09PMYTJD2?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B09PMYTJD2",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "party-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "party",
    "tone": "red"
  },
  {
    "id": "teufel-rockster-go-2",
    "title": "Teufel ROCKSTER GO 2",
    "category": "Outdoor-Lautsprecher",
    "shortDescription": "Kompakter, robuster Lautsprecher für Outdoor, Bad und kleine Räume.",
    "bestFor": "deutschsprachige Nutzer, die robuste Markenalternativen suchen",
    "highlights": [
      "Outdoor-Gehäuse",
      "Kompakte Form",
      "Stereopairing möglich",
      "Kräftige Abstimmung"
    ],
    "image": "/audio-product-images/teufel-rockster-go-2.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CW1FDMPR?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CW1FDMPR",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "red"
  },
  {
    "id": "jbl-clip-5",
    "title": "JBL Clip 5",
    "category": "Mini-Lautsprecher",
    "shortDescription": "Kleiner Speaker mit Karabinerform, wasserfestem Gehäuse und gutem Packmaß.",
    "bestFor": "Rucksack, Dusche, Fahrradkorb und Kurztrips",
    "highlights": [
      "Clip-Design",
      "IP67",
      "12 Stunden Laufzeit",
      "Playtime-Boost"
    ],
    "image": "/audio-product-images/jbl-clip-5.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CX97B418?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CX97B418",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "violet"
  },
  {
    "id": "jbl-partybox-club-120",
    "title": "JBL PartyBox Club 120",
    "category": "Party-Lautsprecher",
    "shortDescription": "Großer Party-Lautsprecher mit Lichtshow und kräftiger Leistung.",
    "bestFor": "Feiern, Proberaum, Garten und große Räume",
    "highlights": [
      "160 Watt RMS",
      "Lichtshow",
      "Spritzwasserschutz",
      "Mikrofon-/Instrumentenoptionen"
    ],
    "image": "/audio-product-images/jbl-partybox-club-120.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DJ1QNM1R?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DJ1QNM1R",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "party-lautsprecher"
    ],
    "kind": "party",
    "tone": "purple"
  },
  {
    "id": "sony-ult-tower-9",
    "title": "Sony ULT Tower 9",
    "category": "Party-Lautsprecher",
    "shortDescription": "Großer Party-Speaker für hohe Pegel, Bassdruck und Lichtstimmung.",
    "bestFor": "Wohnzimmerpartys, Events und sehr große Räume",
    "highlights": [
      "Tower-Format",
      "Bassmodus",
      "Lichteffekte",
      "Mikrofonoptionen"
    ],
    "image": "/audio-product-images/sony-ult-tower-9.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DZ767WLZ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DZ767WLZ",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "party-lautsprecher"
    ],
    "kind": "party",
    "tone": "blue"
  },
  {
    "id": "lg-xboom-go-xg2t",
    "title": "LG XBOOM Go XG2T",
    "category": "Mini-Lautsprecher",
    "shortDescription": "Handlicher Outdoor-Speaker mit robuster Ausrichtung und modernem Look.",
    "bestFor": "kleine Taschen, Bad und gelegentliche Outdoor-Musik",
    "highlights": [
      "Kompaktes Format",
      "Outdoor-Fokus",
      "Bluetooth",
      "Tragefreundliches Gehäuse"
    ],
    "image": "/audio-product-images/lg-xboom-go-xg2t.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0CX4KQF17?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0CX4KQF17",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher",
      "outdoor-lautsprecher",
      "mini-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "cyan"
  },
  {
    "id": "denon-home-150",
    "title": "Denon Home 150",
    "category": "Bluetooth-Lautsprecher",
    "shortDescription": "Kompakter WLAN- und Bluetooth-Lautsprecher für hochwertigeres Multiroom-Audio.",
    "bestFor": "Küche, Arbeitszimmer und Musikstreaming zuhause",
    "highlights": [
      "Multiroom-Fokus",
      "Kompakte Form",
      "Streamingdienste",
      "Stereo-Pairing möglich"
    ],
    "image": "/audio-product-images/denon-home-150.webp",
    "affiliateUrl": "https://www.amazon.de/dp/B0DT213TBL?tag=epic05e-21",
    "affiliateStatus": "ready",
    "asin": "B0DT213TBL",
    "buttonText": "Zum Angebot",
    "collections": [
      "bluetooth-lautsprecher"
    ],
    "kind": "speaker",
    "tone": "gray"
  }
];

export const readyProducts = audioProducts.filter((product) => product.affiliateStatus === "ready");
export const placeholderProducts = audioProducts.filter((product) => product.affiliateStatus === "placeholder");
export const headphoneProducts = audioProducts.filter((product) => product.collections.includes("kopfhoerer"));
export const speakerProducts = audioProducts.filter((product) => product.collections.includes("bluetooth-lautsprecher"));

export function productsForCollection(collection: string) {
  return audioProducts.filter((product) => product.collections.includes(collection));
}
