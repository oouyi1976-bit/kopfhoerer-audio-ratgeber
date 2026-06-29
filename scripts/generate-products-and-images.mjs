import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const tag = "epic05e-21";
const link = (asin) => (asin ? `https://www.amazon.de/dp/${asin}?tag=${tag}` : "");

const product = ({
  id,
  title,
  category,
  shortDescription,
  bestFor,
  highlights,
  asin = "",
  status = "placeholder",
  collections,
  kind,
  tone = "blue",
}) => ({
  id,
  title,
  category,
  shortDescription,
  bestFor,
  highlights,
  image: `/audio-product-images/${id}.webp`,
  affiliateUrl: status === "ready" ? link(asin) : "",
  affiliateStatus: status,
  asin: status === "ready" ? asin : "",
  buttonText: status === "ready" ? "Zum Angebot" : "Link folgt",
  collections,
  kind,
  tone,
});

const products = [
  product({
    id: "sony-wf-1000xm5",
    title: "Sony WF-1000XM5",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Premium-In-Ears mit starkem Noise Cancelling und sehr kompaktem Case.",
    bestFor: "Pendeln, Fokuszeiten und hochwertige Alltagsmusik",
    highlights: ["Aktives Noise Cancelling", "Multipoint-Bluetooth", "IPX4-Schutz", "Schnellladefunktion"],
    asin: "B0C4TLFZSZ",
    status: "ready",
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
  }),
  product({
    id: "sony-wf-c710n",
    title: "Sony WF-C710N",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Leichte True-Wireless-Earbuds mit ANC und alltagstauglicher Akkulaufzeit.",
    bestFor: "kompakte ANC-Kopfhörer für Bahn, Büro und Uni",
    highlights: ["Touch-Bedienung", "Multipoint-Verbindung", "IPX4", "Lange Case-Laufzeit"],
    asin: "B0DZ6Z6T1C",
    status: "ready",
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "violet",
  }),
  product({
    id: "jabra-elite-8-active",
    title: "Jabra Elite 8 Active",
    category: "Sportkopfhörer",
    shortDescription: "Robuste Sport-In-Ears mit sicherem Sitz und adaptiver Geräuschunterdrückung.",
    bestFor: "Training, Laufstrecken und aktive Pendler",
    highlights: ["Wasser- und schweißresistent", "Adaptives ANC", "Stabiler Halt", "Sechs Mikrofone"],
    asin: "B0CB6DZX79",
    status: "ready",
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "sportkopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "cyan",
  }),
  product({
    id: "jbl-live-beam-3",
    title: "JBL Live Beam 3",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Moderne Earbuds mit adaptivem ANC, starkem Case-Konzept und IP55-Schutz.",
    bestFor: "Vielnutzer, die Bedienkomfort und lange Laufzeit wollen",
    highlights: ["True Adaptive Noise Cancelling", "IP55", "Lange Akkulaufzeit", "Schnelles Pairing"],
    asin: "B0D44H2RG3",
    status: "ready",
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "purple",
  }),
  product({
    id: "soundcore-liberty-4-nc",
    title: "Soundcore Liberty 4 NC",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Beliebte ANC-Earbuds mit App-EQ und starkem Preis-Leistungs-Fokus.",
    bestFor: "preisbewusste Nutzer mit ANC-Wunsch",
    highlights: ["App-Equalizer", "Adaptives ANC", "Transparenzmodus", "Mehrere Farben"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "teal",
  }),
  product({
    id: "soundcore-p40i",
    title: "Soundcore P40i",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Kompakte Earbuds für Alltag, Calls und Streaming ohne Premium-Aufpreis.",
    bestFor: "günstige Bluetooth-In-Ears für jeden Tag",
    highlights: ["Kompaktes Ladecase", "App-Steuerung", "Mikrofone für Telefonie", "Solide Akkulaufzeit"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer"],
    kind: "earbuds",
    tone: "blue",
  }),
  product({
    id: "nothing-ear-a",
    title: "Nothing Ear (a)",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Designstarke Earbuds mit transparentem Look und flexiblem Alltagsprofil.",
    bestFor: "Nutzer, die Technikoptik und kompakte Maße mögen",
    highlights: ["Auffälliges Case-Design", "ANC-Modi", "App-Anpassung", "Leichte Bauweise"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "yellow",
  }),
  product({
    id: "bose-quietcomfort-earbuds",
    title: "Bose QuietComfort Earbuds",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Komfortorientierte ANC-Earbuds für ruhige Arbeitsphasen und Reisen.",
    bestFor: "lange Hörsessions mit möglichst wenig Umgebungslärm",
    highlights: ["Komfort-Fokus", "ANC und Transparenz", "Stimmige App-Bedienung", "Alltags-Case"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "gray",
  }),
  product({
    id: "beats-fit-pro",
    title: "Beats Fit Pro",
    category: "Sportkopfhörer",
    shortDescription: "Sportliche In-Ears mit Flügelspitzen und nahtloser Smartphone-Integration.",
    bestFor: "Training, Apple-Nutzer und mobile Workouts",
    highlights: ["Stabilisierende Flügel", "ANC", "Transparenzmodus", "Kompaktes Case"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "sportkopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "red",
  }),
  product({
    id: "shokz-openrun-pro-2",
    title: "Shokz OpenRun Pro 2",
    category: "Sportkopfhörer",
    shortDescription: "Open-Ear-Sportkopfhörer, bei denen Umgebung und Verkehr hörbar bleiben.",
    bestFor: "Laufen, Radfahren und Outdoor-Training mit Umgebungswahrnehmung",
    highlights: ["Open-Ear-Prinzip", "IP55", "USB-C-Schnellladung", "Reflektierende Details"],
    asin: "B0D2HKCMBP",
    status: "ready",
    collections: ["kopfhoerer", "sportkopfhoerer"],
    kind: "openear",
    tone: "cyan",
  }),
  product({
    id: "shokz-openfit-air",
    title: "Shokz OpenFit Air",
    category: "Sportkopfhörer",
    shortDescription: "Offene Earbuds für Sport, Spaziergänge und calls ohne abgeschottetes Gefühl.",
    bestFor: "Nutzer, die keine In-Ear-Abdichtung mögen",
    highlights: ["Offenes Tragegefühl", "Leichte Bügel", "Bluetooth-Multipoint", "Alltagstaugliches Case"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "sportkopfhoerer"],
    kind: "openear",
    tone: "teal",
  }),
  product({
    id: "sennheiser-momentum-true-wireless-4",
    title: "Sennheiser Momentum True Wireless 4",
    category: "In-Ear-Kopfhörer",
    shortDescription: "Klangorientierte Premium-Earbuds für detailreiche Musik und moderne Codecs.",
    bestFor: "Musikhörer, die kompaktes Format und Klangfokus suchen",
    highlights: ["Klangprofil per App", "ANC", "Transparenzmodus", "Premium-Case"],
    collections: ["kopfhoerer", "in-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "earbuds",
    tone: "silver",
  }),
  product({
    id: "sony-wh-1000xm5",
    title: "Sony WH-1000XM5",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Sehr beliebter Over-Ear mit starkem ANC, leichtem Sitz und langer Laufzeit.",
    bestFor: "Reisen, konzentriertes Arbeiten und leise Pendelwege",
    highlights: ["Premium-ANC", "Bis zu 30 Stunden Akku", "Transparenzmodus", "Bluetooth-Multipoint"],
    asin: "B09Y2MYL5C",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
  }),
  product({
    id: "sony-wh-1000xm4",
    title: "Sony WH-1000XM4",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Bewährter ANC-Over-Ear mit faltbarem Design und komfortabler App-Steuerung.",
    bestFor: "Reisende, die ein ausgereiftes ANC-Modell suchen",
    highlights: ["Faltbares Design", "ANC", "Touch-Bedienung", "Schnellladefunktion"],
    asin: "B08C7KG5LP",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "violet",
  }),
  product({
    id: "sennheiser-momentum-4",
    title: "Sennheiser Momentum 4 Wireless",
    category: "Over-Ear-Kopfhörer",
    shortDescription: "Klangstarker Bluetooth-Over-Ear mit langer Akkulaufzeit und adaptivem ANC.",
    bestFor: "Musikfans, die Laufzeit und warmen Klang priorisieren",
    highlights: ["60-Stunden-Akku", "Adaptives ANC", "Klarer Call-Modus", "Faltbares Case"],
    asin: "B0CCRZPKR1",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "copper",
  }),
  product({
    id: "soundcore-q30",
    title: "Soundcore by Anker Q30",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Preisbewusster Over-Ear mit ANC-Modi, App-EQ und bequemer Polsterung.",
    bestFor: "Homeoffice, Studium und günstigen ANC-Einstieg",
    highlights: ["Hybrid-ANC", "App-EQ", "40 Stunden mit ANC", "Zwei Geräte koppelbar"],
    asin: "B08HMWZBXC",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "blue",
  }),
  product({
    id: "jbl-live-770nc",
    title: "JBL Live 770NC",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Over-Ear mit adaptivem Noise Cancelling und kräftigem JBL-Klangbild.",
    bestFor: "lange Playlists, Serien und tägliche Wege",
    highlights: ["Adaptives ANC", "Bis zu 65 Stunden", "Sprachassistent", "Multipoint"],
    asin: "B0CHMN4KVN",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "purple",
  }),
  product({
    id: "sony-ult-wear",
    title: "Sony ULT Wear",
    category: "Over-Ear-Kopfhörer",
    shortDescription: "Bassbetonter Over-Ear mit Noise Cancelling und kräftigem Klangcharakter.",
    bestFor: "Pop, Hip-Hop, elektronische Musik und unterwegs",
    highlights: ["ULT-Bassmodus", "ANC", "30 Stunden Akku", "Klare Anrufe"],
    asin: "B0CX1TJXKV",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "red",
  }),
  product({
    id: "bose-quietcomfort-ultra-headphones",
    title: "Bose QuietComfort Ultra Headphones",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Komfortabler Premium-Over-Ear mit sehr ruhigem Hörgefühl und Raumklang-Fokus.",
    bestFor: "Vielflieger, Bahnfahrten und lange Bürotage",
    highlights: ["Premium-Komfort", "Starkes ANC", "Transparenzmodus", "Immersive-Audio-Modus"],
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "gray",
  }),
  product({
    id: "soundcore-space-one",
    title: "Soundcore Space One",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Leichter ANC-Over-Ear mit LDAC, App-Steuerung und langem Akku.",
    bestFor: "viel Klangkontrolle ohne Premium-Preis",
    highlights: ["LDAC", "App-EQ", "40 Stunden ANC", "Bequemer Sitz"],
    asin: "B0C6KFZC9Z",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "teal",
  }),
  product({
    id: "marshall-major-v",
    title: "Marshall Major V",
    category: "Over-Ear-Kopfhörer",
    shortDescription: "Kompakter On-Ear/Over-Ear-Allrounder mit ikonischer Optik und sehr langer Laufzeit.",
    bestFor: "Alltag, Reisen und Fans eines rockigen Designs",
    highlights: ["Sehr lange Akkulaufzeit", "Faltbare Form", "Bluetooth", "Robuster Bügel"],
    asin: "B0D1VN2VB7",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer"],
    kind: "overear",
    tone: "copper",
  }),
  product({
    id: "beats-solo-4",
    title: "Beats Solo 4",
    category: "Over-Ear-Kopfhörer",
    shortDescription: "Leichter Bluetooth-Kopfhörer mit schnellem Pairing und knackigem Klangprofil.",
    bestFor: "mobile Playlists, Pendeln und Apple-Android-Mix",
    highlights: ["Bis zu 50 Stunden Akku", "Schnelles Pairing", "USB-C", "Leichte Bauweise"],
    asin: "B0CZPMXGSH",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer"],
    kind: "overear",
    tone: "red",
  }),
  product({
    id: "audio-technica-ath-m50xbt2",
    title: "Audio-Technica ATH-M50xBT2",
    category: "Over-Ear-Kopfhörer",
    shortDescription: "Bluetooth-Version eines bekannten Studiokopfhörer-Konzepts mit neutralem Fokus.",
    bestFor: "Musikproduktion, Editing und konzentriertes Hören",
    highlights: ["Studio-inspirierter Klang", "Bluetooth", "Faltbares Design", "Kabeloption"],
    asin: "B09BYFHL25",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer"],
    kind: "overear",
    tone: "silver",
  }),
  product({
    id: "beyerdynamic-dt-770-pro",
    title: "beyerdynamic DT 770 PRO 80 Ohm",
    category: "Over-Ear-Kopfhörer",
    shortDescription: "Kabelgebundener Studioklassiker für Recording, Monitoring und ruhige Arbeitsplätze.",
    bestFor: "Studio, Schnittplatz und detailbewusstes Hören am Schreibtisch",
    highlights: ["Geschlossene Bauweise", "80-Ohm-Variante", "Weiche Velours-Polster", "Made in Germany"],
    asin: "B0016MNAAI",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer"],
    kind: "overear",
    tone: "gray",
  }),
  product({
    id: "jbl-tour-one-m2",
    title: "JBL Tour One M2",
    category: "Noise-Cancelling-Kopfhörer",
    shortDescription: "Business-tauglicher ANC-Over-Ear mit kräftigem Sound und vielen Komfortfunktionen.",
    bestFor: "Calls, Reisen und hybride Arbeit",
    highlights: ["Adaptives ANC", "Call-Mikrofone", "App-Steuerung", "Lange Laufzeit"],
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "blue",
  }),
  product({
    id: "steelseries-arctis-nova-7-gen2",
    title: "SteelSeries Arctis Nova 7 Wireless Gen 2",
    category: "Gaming-Headsets",
    shortDescription: "Multiplattform-Gaming-Headset mit 2,4 GHz und Bluetooth parallel.",
    bestFor: "PC, Konsole, Switch und Discord neben dem Spielsound",
    highlights: ["2,4 GHz plus Bluetooth", "Über 50 Stunden Akku", "App-Steuerung", "Multiplattform"],
    asin: "B0FS7JXWJG",
    status: "ready",
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "cyan",
  }),
  product({
    id: "hyperx-cloud-iii-s-wireless",
    title: "HyperX Cloud III S Wireless",
    category: "Gaming-Headsets",
    shortDescription: "Kabelloses Headset mit langer Laufzeit und abnehmbarem Mikrofon.",
    bestFor: "lange PC- und Konsolensessions",
    highlights: ["2,4 GHz und Bluetooth", "Bis zu 120 Stunden", "53-mm-Treiber", "Abnehmbares Mikrofon"],
    asin: "B0F844LMG3",
    status: "ready",
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "silver",
  }),
  product({
    id: "logitech-g-astro-a50-lightspeed",
    title: "Logitech G Astro A50 Lightspeed",
    category: "Gaming-Headsets",
    shortDescription: "Premium-Headset mit Basisstation und schnellem Wechsel zwischen mehreren Systemen.",
    bestFor: "Setup mit PC, Konsole und Switch am gleichen Platz",
    highlights: ["Basisstation", "LIGHTSPEED", "Bluetooth", "PRO-G Graphene-Treiber"],
    asin: "B0DBJ5PBLT",
    status: "ready",
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "violet",
  }),
  product({
    id: "razer-blackshark-v2-hyperspeed",
    title: "Razer BlackShark V2 HyperSpeed",
    category: "Gaming-Headsets",
    shortDescription: "Leichtes E-Sport-Headset mit breitem Mikrofon-Fokus und kabellosem Komfort.",
    bestFor: "kompetitive Shooter und lange Voice-Sessions",
    highlights: ["Leichtes Gehäuse", "HyperClear-Mikrofon", "TriForce-Treiber", "Bluetooth"],
    asin: "B0CBRTBSNV",
    status: "ready",
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "green",
  }),
  product({
    id: "corsair-hs80-max",
    title: "Corsair HS80 MAX Wireless",
    category: "Gaming-Headsets",
    shortDescription: "Bequemes Multiplattform-Headset mit Dolby-Atmos-Fokus und solidem Mikrofon.",
    bestFor: "PC-Gaming, Konsole und lange Sessions mit Voicechat",
    highlights: ["Multiplattform", "Dolby Atmos", "Omnidirektionales Mikrofon", "iCUE-Kompatibilität"],
    asin: "B0D5Z1C5TB",
    status: "ready",
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "blue",
  }),
  product({
    id: "logitech-g-pro-x-2-lightspeed",
    title: "Logitech G PRO X 2 Lightspeed",
    category: "Gaming-Headsets",
    shortDescription: "Pro-orientiertes Gaming-Headset mit kabellosem Fokus und klarer Abstimmung.",
    bestFor: "kompetitives Gaming mit nüchternem Setup",
    highlights: ["LIGHTSPEED-Funk", "Abnehmbares Mikrofon", "Solider Bügel", "PC- und Konsolenfokus"],
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "gray",
  }),
  product({
    id: "sony-inzone-h5",
    title: "Sony INZONE H5",
    category: "Gaming-Headsets",
    shortDescription: "Kabelloses Gaming-Headset mit räumlichem Fokus für PC und PlayStation.",
    bestFor: "PS5- und PC-Spieler mit leichtem Headset-Wunsch",
    highlights: ["2,4-GHz-Funk", "Spatial-Audio-Fokus", "Leichtes Design", "Ausklappbares Mikrofon"],
    collections: ["kopfhoerer", "gaming-headsets"],
    kind: "headset",
    tone: "silver",
  }),
  product({
    id: "jbl-junior-470nc",
    title: "JBL Junior 470NC",
    category: "Kinderkopfhörer",
    shortDescription: "Kabelloser Kinder-Over-Ear mit Safe-Sound-Fokus und aktivem Noise Cancelling.",
    bestFor: "Schulweg, Reisen und ruhiges Hören für Kinder",
    highlights: ["Lautstärkebegrenzung", "ANC", "50 Stunden Wiedergabe", "Einfache Bedienung"],
    asin: "B0DHS72HR8",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer", "noise-cancelling-kopfhoerer"],
    kind: "overear",
    tone: "blue",
  }),
  product({
    id: "belkin-soundform-mini",
    title: "Belkin SoundForm Mini",
    category: "Kinderkopfhörer",
    shortDescription: "Kinderfreundlicher Bluetooth-Kopfhörer mit integriertem Mikrofon und leichter Form.",
    bestFor: "Unterricht, Tablet-Zeit und Reisen",
    highlights: ["Lautstärkebegrenzung", "Integriertes Mikrofon", "30 Stunden Wiedergabe", "Weiche Polster"],
    asin: "B0D4ZNWLKL",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer"],
    kind: "overear",
    tone: "cyan",
  }),
  product({
    id: "philips-tak4206",
    title: "Philips TAK4206",
    category: "Kinderkopfhörer",
    shortDescription: "Kabelloser Kinderkopfhörer mit App-Kontrolle, LEDs und Lautstärkebegrenzung.",
    bestFor: "Kinderzimmer, Reisen und kontrollierte Hörzeiten",
    highlights: ["85-dB-Begrenzung", "App mit Kindersicherung", "LED-Leuchten", "Weiche Ohrpolster"],
    asin: "B09313H1MS",
    status: "ready",
    collections: ["kopfhoerer", "over-ear-kopfhoerer"],
    kind: "overear",
    tone: "purple",
  }),
  product({
    id: "jbl-charge-5",
    title: "JBL Charge 5",
    category: "Bluetooth-Lautsprecher",
    shortDescription: "Robuster Bluetooth-Speaker mit Powerbank-Funktion und druckvollem Sound.",
    bestFor: "Balkon, Küche, Garten und Wochenendtrips",
    highlights: ["IP67", "Powerbank-Funktion", "Bis zu 20 Stunden", "Kräftiger Bass"],
    asin: "B08VDNCZT9",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "blue",
  }),
  product({
    id: "jbl-flip-6",
    title: "JBL Flip 6",
    category: "Bluetooth-Lautsprecher",
    shortDescription: "Kompakter, wasserfester Allrounder mit gutem Format für unterwegs.",
    bestFor: "Reisen, Bad, Küche und kleine Outdoor-Runden",
    highlights: ["IP67", "2-Wege-System", "Bis zu 12 Stunden", "Sehr transportabel"],
    asin: "B09HGRXXTM",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "cyan",
  }),
  product({
    id: "jbl-go-4",
    title: "JBL Go 4",
    category: "Mini-Lautsprecher",
    shortDescription: "Sehr kleiner Bluetooth-Lautsprecher für Tasche, Bad und spontane Musik.",
    bestFor: "minimalistische Setups und kurze Ausflüge",
    highlights: ["Mini-Format", "Wasser- und staubfest", "Playtime-Boost", "Viele Farben"],
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "purple",
  }),
  product({
    id: "sony-srs-xb100",
    title: "Sony SRS-XB100",
    category: "Mini-Lautsprecher",
    shortDescription: "Leichter Outdoor-Mini mit Trageriemen und IP67-Schutz.",
    bestFor: "Rucksack, Reise, Dusche und kleine Räume",
    highlights: ["IP67", "Trageriemen", "16 Stunden Akku", "Freisprechfunktion"],
    asin: "B0CCYFP62W",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "teal",
  }),
  product({
    id: "bose-soundlink-flex-2",
    title: "Bose SoundLink Flex 2. Gen.",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Wasserdichter Premium-Speaker mit natürlichem Klang und kompaktem Gehäuse.",
    bestFor: "Terrasse, Reise und hochwertige Hintergrundmusik",
    highlights: ["Wasser- und staubdicht", "Bis zu 12 Stunden", "Robustes Gehäuse", "Klarer Klangfokus"],
    asin: "B0D6WD2QSQ",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "gray",
  }),
  product({
    id: "ultimate-ears-wonderboom-4",
    title: "Ultimate Ears WONDERBOOM 4",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Schwimmfähiger 360-Grad-Speaker für Wasser, Picknick und Festivalcamp.",
    bestFor: "Pool, Strand und unkomplizierte Outdoor-Musik",
    highlights: ["Schwimmfähig", "360-Grad-Klang", "Staubdicht", "Outdoor-Modus"],
    asin: "B0D3X3YKVF",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "violet",
  }),
  product({
    id: "soundcore-motion-300",
    title: "Soundcore Motion 300",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Mobiler Hi-Res-Speaker mit SmartTune, Stereo-Leistung und IPX7.",
    bestFor: "Camping, Wandern und flexible Raumpositionen",
    highlights: ["30 Watt Stereo", "SmartTune", "IPX7", "13 Stunden Laufzeit"],
    asin: "B0CGDL42CT",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "blue",
  }),
  product({
    id: "soundcore-motion-plus",
    title: "Soundcore Motion+",
    category: "Bluetooth-Lautsprecher",
    shortDescription: "Klangstarker Bluetooth-Speaker mit Hi-Res-Fokus, App-EQ und IPX7.",
    bestFor: "Wohnzimmer, Terrasse und detailreicheren Bluetooth-Sound",
    highlights: ["30 Watt", "App-EQ", "IPX7", "USB-C"],
    asin: "B07P39MLKH",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "cyan",
  }),
  product({
    id: "soundcore-boom-2",
    title: "Soundcore Boom 2",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Kräftiger Outdoor-Speaker mit Subwoofer, Licht und langer Akkulaufzeit.",
    bestFor: "Garten, Camping, Strand und kleine Partys",
    highlights: ["80 Watt", "IPX7 und schwimmfähig", "24 Stunden Akku", "LED-Licht"],
    asin: "B0CQ53RVTW",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "party-lautsprecher"],
    kind: "party",
    tone: "purple",
  }),
  product({
    id: "soundcore-boom-2-plus",
    title: "Soundcore Boom 2 Plus",
    category: "Party-Lautsprecher",
    shortDescription: "Größerer Outdoor- und Party-Speaker mit hoher Leistung und Powerbank-Funktion.",
    bestFor: "Gartenpartys, Campingplätze und laute Outdoor-Sessions",
    highlights: ["140 Watt", "IPX7", "RGB-Lichter", "Powerbank"],
    asin: "B0CZ7DY692",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "party-lautsprecher"],
    kind: "party",
    tone: "violet",
  }),
  product({
    id: "ultimate-ears-boom-4",
    title: "Ultimate Ears BOOM 4",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Schwimmfähiger 360-Grad-Lautsprecher mit kompaktem, partyfestem Format.",
    bestFor: "Strand, Park und Gruppenmusik unterwegs",
    highlights: ["360-Grad-Klang", "Schwimmfähig", "15 Stunden Akku", "45 Meter Reichweite"],
    asin: "B0D3WLCJSJ",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "teal",
  }),
  product({
    id: "ultimate-ears-megaboom-4",
    title: "Ultimate Ears MEGABOOM 4",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Größerer UE-Speaker mit kräftigem 360-Grad-Sound und robustem Gehäuse.",
    bestFor: "größere Picknicks, Garten und längere Outdoor-Tage",
    highlights: ["360-Grad-Sound", "Schwimmfähig", "20 Stunden Akku", "Kräftige Tiefen"],
    asin: "B0D3WMD9C4",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "party-lautsprecher"],
    kind: "speaker",
    tone: "blue",
  }),
  product({
    id: "bose-soundlink-max",
    title: "Bose SoundLink Max",
    category: "Bluetooth-Lautsprecher",
    shortDescription: "Große tragbare Bose-Box mit kräftigem Klang und wetterfestem Gehäuse.",
    bestFor: "hochwertige Musik auf Terrasse, Balkon und unterwegs",
    highlights: ["Bis zu 20 Stunden", "USB-C", "AUX-Eingang", "Wasserdichtes Gehäuse"],
    asin: "B0D1CSN1QR",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "gray",
  }),
  product({
    id: "sony-ult-field-1",
    title: "Sony ULT Field 1",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Kompakter Sony-Speaker mit Bassfokus, IP67 und stoßfester Ausrichtung.",
    bestFor: "Rucksack, Bad, Park und kleine Outdoor-Sessions",
    highlights: ["IP67", "Stoßfest", "12 Stunden Akku", "Freisprechfunktion"],
    asin: "B0CX1WXP8M",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "cyan",
  }),
  product({
    id: "sony-ult-field-3",
    title: "Sony ULT Field 3",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Tragbarer Sony-Speaker mit Schulterriemen, Bassmodus und langer Laufzeit.",
    bestFor: "Outdoor-Tage, Grillabende und mobile Setups",
    highlights: ["24 Stunden Akku", "IP67", "Schulterriemen", "ULT Power Sound"],
    asin: "B0DZ76B7XQ",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "purple",
  }),
  product({
    id: "marshall-emberton-iii",
    title: "Marshall Emberton III",
    category: "Bluetooth-Lautsprecher",
    shortDescription: "Designstarker Speaker im Marshall-Stil mit wasserfestem Gehäuse.",
    bestFor: "Wohnzimmer, Regal, Balkon und Design-Setups",
    highlights: ["IP67", "Über 32 Stunden", "Kompaktes Gehäuse", "Klassische Bedienung"],
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "copper",
  }),
  product({
    id: "marshall-willen-ii",
    title: "Marshall Willen II",
    category: "Mini-Lautsprecher",
    shortDescription: "Kleiner, robuster Marshall-Speaker mit markanter Form und langer Laufzeit.",
    bestFor: "Schreibtisch, Küche, Rucksack und Bad",
    highlights: ["IP67", "Kompakt", "17+ Stunden Akku", "Befestigungsband"],
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "copper",
  }),
  product({
    id: "tribit-stormbox-micro-2",
    title: "Tribit StormBox Micro 2",
    category: "Mini-Lautsprecher",
    shortDescription: "Sehr kompakter Outdoor-Speaker mit Befestigungsband und Powerbank-Funktion.",
    bestFor: "Fahrrad, Rucksack und minimalistische Ausflüge",
    highlights: ["Kompaktes Format", "Befestigungsriemen", "IP67", "Powerbank-Funktion"],
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "teal",
  }),
  product({
    id: "tribit-stormbox-blast",
    title: "Tribit StormBox Blast",
    category: "Party-Lautsprecher",
    shortDescription: "Großer Bluetooth-Speaker mit Licht, Bass und viel Reserven für draußen.",
    bestFor: "Partys, Garten und lautere Gruppen",
    highlights: ["Großes Gehäuse", "Lichteffekte", "Bassmodus", "Lange Laufzeit"],
    collections: ["bluetooth-lautsprecher", "party-lautsprecher", "outdoor-lautsprecher"],
    kind: "party",
    tone: "red",
  }),
  product({
    id: "teufel-rockster-go-2",
    title: "Teufel ROCKSTER GO 2",
    category: "Outdoor-Lautsprecher",
    shortDescription: "Kompakter, robuster Lautsprecher für Outdoor, Bad und kleine Räume.",
    bestFor: "deutschsprachige Nutzer, die robuste Markenalternativen suchen",
    highlights: ["Outdoor-Gehäuse", "Kompakte Form", "Stereopairing möglich", "Kräftige Abstimmung"],
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher"],
    kind: "speaker",
    tone: "red",
  }),
  product({
    id: "jbl-clip-5",
    title: "JBL Clip 5",
    category: "Mini-Lautsprecher",
    shortDescription: "Kleiner Speaker mit Karabinerform, wasserfestem Gehäuse und gutem Packmaß.",
    bestFor: "Rucksack, Dusche, Fahrradkorb und Kurztrips",
    highlights: ["Clip-Design", "IP67", "12 Stunden Laufzeit", "Playtime-Boost"],
    asin: "B0CX97B418",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "violet",
  }),
  product({
    id: "jbl-partybox-club-120",
    title: "JBL PartyBox Club 120",
    category: "Party-Lautsprecher",
    shortDescription: "Großer Party-Lautsprecher mit Lichtshow und kräftiger Leistung.",
    bestFor: "Feiern, Proberaum, Garten und große Räume",
    highlights: ["160 Watt RMS", "Lichtshow", "Spritzwasserschutz", "Mikrofon-/Instrumentenoptionen"],
    asin: "B0DJ1QNM1R",
    status: "ready",
    collections: ["bluetooth-lautsprecher", "party-lautsprecher"],
    kind: "party",
    tone: "purple",
  }),
  product({
    id: "sony-ult-tower-9",
    title: "Sony ULT Tower 9",
    category: "Party-Lautsprecher",
    shortDescription: "Großer Party-Speaker für hohe Pegel, Bassdruck und Lichtstimmung.",
    bestFor: "Wohnzimmerpartys, Events und sehr große Räume",
    highlights: ["Tower-Format", "Bassmodus", "Lichteffekte", "Mikrofonoptionen"],
    collections: ["bluetooth-lautsprecher", "party-lautsprecher"],
    kind: "party",
    tone: "blue",
  }),
  product({
    id: "lg-xboom-go-xg2t",
    title: "LG XBOOM Go XG2T",
    category: "Mini-Lautsprecher",
    shortDescription: "Handlicher Outdoor-Speaker mit robuster Ausrichtung und modernem Look.",
    bestFor: "kleine Taschen, Bad und gelegentliche Outdoor-Musik",
    highlights: ["Kompaktes Format", "Outdoor-Fokus", "Bluetooth", "Tragefreundliches Gehäuse"],
    collections: ["bluetooth-lautsprecher", "outdoor-lautsprecher", "mini-lautsprecher"],
    kind: "speaker",
    tone: "cyan",
  }),
  product({
    id: "denon-home-150",
    title: "Denon Home 150",
    category: "Bluetooth-Lautsprecher",
    shortDescription: "Kompakter WLAN- und Bluetooth-Lautsprecher für hochwertigeres Multiroom-Audio.",
    bestFor: "Küche, Arbeitszimmer und Musikstreaming zuhause",
    highlights: ["Multiroom-Fokus", "Kompakte Form", "Streamingdienste", "Stereo-Pairing möglich"],
    collections: ["bluetooth-lautsprecher"],
    kind: "speaker",
    tone: "gray",
  }),
];

const tones = {
  blue: ["#2dd4ff", "#2563eb", "#0f172a"],
  violet: ["#a78bfa", "#7c3aed", "#111827"],
  purple: ["#8b5cf6", "#22d3ee", "#0b1120"],
  cyan: ["#19f4c7", "#0ea5e9", "#0f172a"],
  teal: ["#5eead4", "#0f766e", "#111827"],
  red: ["#fb7185", "#dc2626", "#111827"],
  green: ["#86efac", "#16a34a", "#0f172a"],
  yellow: ["#fde68a", "#f59e0b", "#1f2937"],
  copper: ["#f59e0b", "#92400e", "#1f1309"],
  silver: ["#f8fafc", "#94a3b8", "#0f172a"],
  gray: ["#e5e7eb", "#64748b", "#111827"],
};

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const hashOf = (value) =>
  [...value].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 9973, 7);

const meshDots = (x0, y0, cols, rows, gap, color, opacity = 0.18) =>
  Array.from({ length: rows }, (_, row) =>
    Array.from(
      { length: cols },
      (_, col) =>
        `<circle cx="${x0 + col * gap}" cy="${y0 + row * gap}" r="${row % 2 ? 2.1 : 1.7}" fill="${color}" opacity="${opacity + ((row + col) % 3) * 0.03}"/>`,
    ).join(""),
  ).join("");

const bg = (product, [a, b, c]) => `
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#07111f"/>
      <stop offset="52%" stop-color="${c}"/>
      <stop offset="100%" stop-color="#e8eef7"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#0b1220"/>
      <stop offset="45%" stop-color="#223047"/>
      <stop offset="100%" stop-color="#dbe6f0"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="35%" r="55%">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.68"/>
      <stop offset="58%" stop-color="${b}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${b}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="body" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="14%" stop-color="#f3f7fb"/>
      <stop offset="48%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <linearGradient id="darkBody" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#3a465a"/>
      <stop offset="42%" stop-color="#141d2d"/>
      <stop offset="100%" stop-color="#04070d"/>
    </linearGradient>
    <linearGradient id="rubber" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#374151"/>
      <stop offset="48%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
    <linearGradient id="cushion" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="40%" stop-color="#1f2937"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="36%" stop-color="#b6c2d1"/>
      <stop offset="66%" stop-color="#5b6b80"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.88"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="32" stdDeviation="24" flood-color="#020617" flood-opacity="0.45"/>
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#ffffff" flood-opacity="0.08"/>
    </filter>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <filter id="texture" x="-8%" y="-8%" width="116%" height="116%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="${hashOf(product.id)}" result="noise"/>
      <feColorMatrix in="noise" type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.12"/>
      </feComponentTransfer>
      <feBlend in="SourceGraphic" mode="soft-light"/>
    </filter>
    <pattern id="fineMesh" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M0 14H28M14 0V28" stroke="#e2e8f0" stroke-width="1.2" opacity="0.12"/>
      <circle cx="14" cy="14" r="1.7" fill="#e2e8f0" opacity="0.2"/>
    </pattern>
  </defs>
  <rect width="1200" height="900" rx="58" fill="url(#bg)"/>
  <circle cx="315" cy="150" r="278" fill="url(#halo)"/>
  <circle cx="925" cy="218" r="246" fill="${a}" opacity="0.14" filter="url(#soft)"/>
  <path d="M0 635 C210 590 392 585 596 636 C815 690 1004 682 1200 628 V900 H0 Z" fill="url(#floor)" opacity="0.92"/>
  <path d="M95 675 C358 625 828 632 1098 684" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.16"/>
  <ellipse cx="600" cy="752" rx="380" ry="70" fill="#020617" opacity="0.32" filter="url(#soft)"/>
`;

const overearSvg = (item, [a, b]) => {
  const tilt = (hashOf(item.id) % 9) - 4;
  return `
  <g filter="url(#shadow)" transform="rotate(${tilt} 600 520) translate(0 4)">
    <path d="M337 492 C337 198 863 198 863 492" fill="none" stroke="url(#rubber)" stroke-width="96" stroke-linecap="round"/>
    <path d="M382 466 C402 280 798 280 818 466" fill="none" stroke="url(#metal)" stroke-width="30" stroke-linecap="round" opacity="0.92"/>
    <path d="M416 432 C470 314 730 314 784 432" fill="none" stroke="${a}" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
    <rect x="214" y="408" width="260" height="330" rx="96" fill="url(#rubber)" filter="url(#texture)"/>
    <rect x="726" y="408" width="260" height="330" rx="96" fill="url(#rubber)" filter="url(#texture)"/>
    <rect x="258" y="452" width="172" height="242" rx="62" fill="url(#cushion)"/>
    <rect x="770" y="452" width="172" height="242" rx="62" fill="url(#cushion)"/>
    <rect x="292" y="486" width="104" height="172" rx="42" fill="url(#body)" opacity="0.96"/>
    <rect x="804" y="486" width="104" height="172" rx="42" fill="url(#body)" opacity="0.96"/>
    <path d="M300 482 C334 462 374 462 410 488" fill="none" stroke="url(#glass)" stroke-width="14" stroke-linecap="round"/>
    <path d="M812 482 C846 462 886 462 922 488" fill="none" stroke="url(#glass)" stroke-width="14" stroke-linecap="round"/>
    <path d="M458 548 C532 586 668 586 742 548" stroke="${b}" stroke-width="14" stroke-linecap="round" opacity="0.5"/>
  </g>
`;
};

const headsetSvg = (item, [a, b]) => {
  const tilt = (hashOf(item.id) % 7) - 3;
  return `
  <g filter="url(#shadow)" transform="rotate(${tilt} 600 520) translate(0 8)">
    <path d="M322 490 C322 210 878 210 878 490" fill="none" stroke="url(#rubber)" stroke-width="88" stroke-linecap="round"/>
    <path d="M380 458 C415 306 785 306 820 458" fill="none" stroke="${a}" stroke-width="18" stroke-linecap="round" opacity="0.82"/>
    <rect x="206" y="424" width="258" height="322" rx="78" fill="url(#rubber)" filter="url(#texture)"/>
    <rect x="736" y="424" width="258" height="322" rx="78" fill="url(#rubber)" filter="url(#texture)"/>
    <rect x="260" y="482" width="150" height="204" rx="52" fill="url(#cushion)"/>
    <rect x="790" y="482" width="150" height="204" rx="52" fill="url(#cushion)"/>
    <rect x="286" y="512" width="98" height="144" rx="40" fill="url(#body)"/>
    <rect x="816" y="512" width="98" height="144" rx="40" fill="url(#body)"/>
    <path d="M865 638 C930 650 1004 687 1046 744" fill="none" stroke="url(#metal)" stroke-width="24" stroke-linecap="round"/>
    <path d="M872 638 C938 657 997 688 1026 728" fill="none" stroke="${b}" stroke-width="8" stroke-linecap="round" opacity="0.78"/>
    <rect x="1018" y="724" width="88" height="46" rx="23" fill="url(#rubber)" transform="rotate(20 1062 747)"/>
    <circle cx="1047" cy="747" r="13" fill="${a}" opacity="0.85"/>
  </g>
`;
};

const earbudsSvg = (item, [a, b]) => {
  const tilt = (hashOf(item.id) % 8) - 4;
  return `
  <g filter="url(#shadow)" transform="rotate(${tilt} 600 570)">
    <rect x="282" y="478" width="636" height="232" rx="112" fill="url(#rubber)" filter="url(#texture)"/>
    <path d="M320 555 C380 498 820 498 880 555" fill="none" stroke="#f8fafc" stroke-width="7" opacity="0.22"/>
    <rect x="344" y="526" width="512" height="126" rx="63" fill="url(#body)" opacity="0.9"/>
    <path d="M455 344 C399 373 382 454 419 515 C451 566 525 546 543 488 C561 431 518 362 455 344Z" fill="url(#body)"/>
    <path d="M745 344 C801 373 818 454 781 515 C749 566 675 546 657 488 C639 431 682 362 745 344Z" fill="url(#body)"/>
    <ellipse cx="455" cy="451" rx="54" ry="64" fill="url(#rubber)" opacity="0.88"/>
    <ellipse cx="745" cy="451" rx="54" ry="64" fill="url(#rubber)" opacity="0.88"/>
    <circle cx="454" cy="434" r="32" fill="#f8fafc" opacity="0.92"/>
    <circle cx="746" cy="434" r="32" fill="#f8fafc" opacity="0.92"/>
    <path d="M501 505 C526 545 525 594 506 626" fill="none" stroke="${b}" stroke-width="42" stroke-linecap="round" opacity="0.82"/>
    <path d="M699 505 C674 545 675 594 694 626" fill="none" stroke="${b}" stroke-width="42" stroke-linecap="round" opacity="0.82"/>
    <rect x="430" y="332" width="68" height="160" rx="34" fill="url(#glass)" opacity="0.28"/>
    <rect x="702" y="332" width="68" height="160" rx="34" fill="url(#glass)" opacity="0.28"/>
    <circle cx="600" cy="592" r="10" fill="${a}" opacity="0.8"/>
  </g>
`;
};

const openearSvg = (item, [a, b]) => {
  const tilt = (hashOf(item.id) % 9) - 4;
  return `
  <g filter="url(#shadow)" transform="rotate(${tilt} 600 540) translate(0 12)">
    <path d="M342 514 C374 322 526 318 560 486" fill="none" stroke="url(#rubber)" stroke-width="54" stroke-linecap="round"/>
    <path d="M858 514 C826 322 674 318 640 486" fill="none" stroke="url(#rubber)" stroke-width="54" stroke-linecap="round"/>
    <path d="M392 567 C486 650 714 650 808 567" fill="none" stroke="url(#metal)" stroke-width="30" stroke-linecap="round"/>
    <path d="M426 568 C510 618 690 618 774 568" fill="none" stroke="${a}" stroke-width="12" stroke-linecap="round" opacity="0.82"/>
    <ellipse cx="520" cy="526" rx="104" ry="126" fill="url(#body)" filter="url(#texture)"/>
    <ellipse cx="680" cy="526" rx="104" ry="126" fill="url(#body)" filter="url(#texture)"/>
    <ellipse cx="520" cy="526" rx="52" ry="64" fill="url(#rubber)" opacity="0.92"/>
    <ellipse cx="680" cy="526" rx="52" ry="64" fill="url(#rubber)" opacity="0.92"/>
    <circle cx="520" cy="515" r="22" fill="${b}" opacity="0.82"/>
    <circle cx="680" cy="515" r="22" fill="${b}" opacity="0.82"/>
  </g>
`;
};

const speakerSvg = (item, [a, b]) => {
  const tilt = (hashOf(item.id) % 7) - 3;
  const compact = item.collections.includes("mini-lautsprecher");
  const width = compact ? 620 : 760;
  const x = (1200 - width) / 2;
  return `
  <g filter="url(#shadow)" transform="rotate(${tilt} 600 552) translate(0 8)">
    <rect x="${x}" y="${compact ? 384 : 342}" width="${width}" height="${compact ? 290 : 350}" rx="${compact ? 92 : 116}" fill="url(#rubber)" filter="url(#texture)"/>
    <rect x="${x + 52}" y="${compact ? 432 : 400}" width="${width - 104}" height="${compact ? 178 : 230}" rx="${compact ? 62 : 86}" fill="#111827"/>
    <rect x="${x + 52}" y="${compact ? 432 : 400}" width="${width - 104}" height="${compact ? 178 : 230}" rx="${compact ? 62 : 86}" fill="url(#fineMesh)"/>
    <g opacity="0.86">${meshDots(x + 86, compact ? 462 : 435, compact ? 15 : 18, compact ? 5 : 7, 31, a, 0.16)}</g>
    <circle cx="${x + width * 0.25}" cy="${compact ? 520 : 515}" r="${compact ? 58 : 78}" fill="url(#body)"/>
    <circle cx="${x + width * 0.75}" cy="${compact ? 520 : 515}" r="${compact ? 58 : 78}" fill="url(#body)"/>
    <circle cx="${x + width * 0.25}" cy="${compact ? 520 : 515}" r="${compact ? 28 : 39}" fill="${b}" opacity="0.84"/>
    <circle cx="${x + width * 0.75}" cy="${compact ? 520 : 515}" r="${compact ? 28 : 39}" fill="${b}" opacity="0.84"/>
    <rect x="532" y="${compact ? 472 : 466}" width="136" height="${compact ? 82 : 104}" rx="41" fill="${a}" opacity="0.18"/>
    <path d="M${x + 85} ${compact ? 406 : 366} H${x + width - 85}" stroke="url(#glass)" stroke-width="18" stroke-linecap="round" opacity="0.33"/>
    <circle cx="548" cy="${compact ? 396 : 360}" r="12" fill="#e5e7eb" opacity="0.55"/>
    <circle cx="600" cy="${compact ? 396 : 360}" r="12" fill="#e5e7eb" opacity="0.55"/>
    <circle cx="652" cy="${compact ? 396 : 360}" r="12" fill="#e5e7eb" opacity="0.55"/>
  </g>
`;
};

const partySvg = (item, [a, b]) => {
  const tilt = (hashOf(item.id) % 5) - 2;
  return `
  <g filter="url(#shadow)" transform="rotate(${tilt} 600 520) translate(0 4)">
    <rect x="376" y="184" width="448" height="590" rx="90" fill="url(#rubber)" filter="url(#texture)"/>
    <rect x="432" y="244" width="336" height="470" rx="58" fill="#101827"/>
    <rect x="432" y="244" width="336" height="470" rx="58" fill="url(#fineMesh)" opacity="0.9"/>
    <circle cx="600" cy="397" r="126" fill="url(#body)"/>
    <circle cx="600" cy="397" r="84" fill="#0b1120"/>
    <circle cx="600" cy="397" r="48" fill="${b}" opacity="0.88"/>
    <circle cx="600" cy="614" r="102" fill="url(#body)"/>
    <circle cx="600" cy="614" r="68" fill="#0b1120"/>
    <circle cx="600" cy="614" r="38" fill="${b}" opacity="0.88"/>
    <circle cx="600" cy="397" r="142" fill="none" stroke="${a}" stroke-width="10" opacity="0.65"/>
    <circle cx="600" cy="614" r="116" fill="none" stroke="${a}" stroke-width="9" opacity="0.52"/>
    <path d="M462 304 H738" stroke="url(#metal)" stroke-width="18" stroke-linecap="round"/>
    <path d="M466 734 H734" stroke="${a}" stroke-width="16" stroke-linecap="round" opacity="0.65"/>
    <circle cx="472" cy="398" r="17" fill="${a}" opacity="0.95"/>
    <circle cx="728" cy="612" r="17" fill="${a}" opacity="0.9"/>
    <path d="M430 215 C470 196 730 196 770 215" fill="none" stroke="url(#glass)" stroke-width="16" stroke-linecap="round" opacity="0.32"/>
  </g>
`;
};

const svgFor = (item) => {
  const palette = tones[item.tone] ?? tones.blue;
  const scale =
    item.kind === "party"
      ? 1.08
      : item.kind === "speaker"
        ? 1.2
        : item.kind === "earbuds"
          ? 1.23
          : item.kind === "openear"
            ? 1.16
            : 1.1;
  const shape =
    item.kind === "overear"
      ? overearSvg(item, palette)
      : item.kind === "headset"
        ? headsetSvg(item, palette)
        : item.kind === "earbuds"
          ? earbudsSvg(item, palette)
          : item.kind === "openear"
            ? openearSvg(item, palette)
            : item.kind === "party"
              ? partySvg(item, palette)
              : speakerSvg(item, palette);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(item.title)}</title>
  <desc id="desc">Eigene realistische Studio-Produktvisualisierung fuer KlangFinder, keine Hersteller- oder Amazon-Grafik.</desc>
  ${bg(item, palette)}
  <g transform="translate(600 535) scale(${scale}) translate(-600 -535)">
    ${shape}
  </g>
</svg>
`;
};

const dataFile = `export type AffiliateStatus = "ready" | "placeholder";

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

export const amazonPartnerTag = "${tag}";

export const audioProducts: AudioProduct[] = ${JSON.stringify(products, null, 2)};

export const readyProducts = audioProducts.filter((product) => product.affiliateStatus === "ready");
export const placeholderProducts = audioProducts.filter((product) => product.affiliateStatus === "placeholder");
export const headphoneProducts = audioProducts.filter((product) => product.collections.includes("kopfhoerer"));
export const speakerProducts = audioProducts.filter((product) => product.collections.includes("bluetooth-lautsprecher"));

export function productsForCollection(collection: string) {
  return audioProducts.filter((product) => product.collections.includes(collection));
}
`;

mkdirSync(join(root, "src/data"), { recursive: true });
writeFileSync(join(root, "src/data/audioProducts.ts"), dataFile);

console.log(`Generated ${products.length} products. Run scripts/create_realistic_audio_assets.py to refresh local WebP images.`);
