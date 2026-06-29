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
  image: `/audio-product-images/${id}.svg`,
  affiliateUrl: status === "ready" ? link(asin) : "",
  affiliateStatus: status,
  asin: status === "ready" ? asin : "",
  buttonText: status === "ready" ? "Bei Amazon ansehen" : "Amazon-Link folgt",
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

const bg = (product, [a, b, c]) => `
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${c}"/>
      <stop offset="46%" stop-color="#172033"/>
      <stop offset="100%" stop-color="#eff6ff"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="35%" r="55%">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.75"/>
      <stop offset="58%" stop-color="${b}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${b}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="body" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#f8fbff"/>
      <stop offset="44%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <linearGradient id="darkBody" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#273247"/>
      <stop offset="100%" stop-color="#060b14"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="34" stdDeviation="28" flood-color="#020617" flood-opacity="0.38"/>
    </filter>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect width="1200" height="900" rx="58" fill="url(#bg)"/>
  <circle cx="340" cy="150" r="250" fill="url(#halo)"/>
  <circle cx="920" cy="220" r="260" fill="${a}" opacity="0.18" filter="url(#soft)"/>
  <ellipse cx="600" cy="764" rx="365" ry="66" fill="#020617" opacity="0.28" filter="url(#soft)"/>
`;

const overearSvg = ([a, b]) => `
  <g filter="url(#shadow)" transform="translate(0 12)">
    <path d="M344 486 C344 235 856 235 856 486" fill="none" stroke="url(#darkBody)" stroke-width="82" stroke-linecap="round"/>
    <path d="M386 466 C386 286 814 286 814 466" fill="none" stroke="${a}" stroke-width="22" stroke-linecap="round" opacity="0.75"/>
    <rect x="235" y="424" width="235" height="305" rx="88" fill="url(#darkBody)"/>
    <rect x="730" y="424" width="235" height="305" rx="88" fill="url(#darkBody)"/>
    <rect x="280" y="475" width="145" height="202" rx="54" fill="url(#body)"/>
    <rect x="775" y="475" width="145" height="202" rx="54" fill="url(#body)"/>
    <path d="M472 530 C548 567 652 567 728 530" stroke="${b}" stroke-width="18" stroke-linecap="round" opacity="0.55"/>
  </g>
`;

const headsetSvg = ([a, b]) => `
  <g filter="url(#shadow)" transform="translate(0 10)">
    <path d="M330 486 C330 230 870 230 870 486" fill="none" stroke="url(#darkBody)" stroke-width="78" stroke-linecap="round"/>
    <path d="M378 450 C410 304 790 304 822 450" fill="none" stroke="${a}" stroke-width="16" stroke-linecap="round"/>
    <rect x="214" y="430" width="238" height="306" rx="74" fill="url(#darkBody)"/>
    <rect x="748" y="430" width="238" height="306" rx="74" fill="url(#darkBody)"/>
    <rect x="263" y="485" width="140" height="196" rx="48" fill="url(#body)"/>
    <rect x="797" y="485" width="140" height="196" rx="48" fill="url(#body)"/>
    <path d="M868 636 C940 656 998 690 1030 744" fill="none" stroke="${b}" stroke-width="22" stroke-linecap="round"/>
    <circle cx="1040" cy="763" r="28" fill="${a}"/>
  </g>
`;

const earbudsSvg = ([a, b]) => `
  <g filter="url(#shadow)">
    <rect x="315" y="472" width="570" height="236" rx="118" fill="url(#darkBody)"/>
    <rect x="360" y="512" width="480" height="150" rx="75" fill="url(#body)" opacity="0.88"/>
    <path d="M455 376 C408 405 391 470 420 518 C445 559 512 553 530 507 C554 446 513 397 455 376Z" fill="url(#body)"/>
    <path d="M745 376 C792 405 809 470 780 518 C755 559 688 553 670 507 C646 446 687 397 745 376Z" fill="url(#body)"/>
    <rect x="502" y="486" width="54" height="140" rx="27" fill="${b}" opacity="0.72"/>
    <rect x="644" y="486" width="54" height="140" rx="27" fill="${b}" opacity="0.72"/>
    <circle cx="462" cy="455" r="48" fill="#f8fbff" opacity="0.92"/>
    <circle cx="738" cy="455" r="48" fill="#f8fbff" opacity="0.92"/>
  </g>
`;

const openearSvg = ([a, b]) => `
  <g filter="url(#shadow)" transform="translate(0 16)">
    <path d="M338 512 C380 340 522 340 550 492" fill="none" stroke="url(#darkBody)" stroke-width="52" stroke-linecap="round"/>
    <path d="M862 512 C820 340 678 340 650 492" fill="none" stroke="url(#darkBody)" stroke-width="52" stroke-linecap="round"/>
    <path d="M420 566 C500 618 700 618 780 566" fill="none" stroke="${a}" stroke-width="26" stroke-linecap="round"/>
    <ellipse cx="524" cy="525" rx="98" ry="124" fill="url(#body)"/>
    <ellipse cx="676" cy="525" rx="98" ry="124" fill="url(#body)"/>
    <circle cx="524" cy="525" r="44" fill="${b}" opacity="0.72"/>
    <circle cx="676" cy="525" r="44" fill="${b}" opacity="0.72"/>
  </g>
`;

const speakerSvg = ([a, b]) => `
  <g filter="url(#shadow)" transform="translate(0 8)">
    <rect x="224" y="350" width="752" height="330" rx="118" fill="url(#darkBody)"/>
    <rect x="280" y="405" width="640" height="220" rx="84" fill="#142033"/>
    <g opacity="0.9">
      ${Array.from({ length: 13 }, (_, i) => `<line x1="${328 + i * 45}" y1="424" x2="${328 + i * 45}" y2="606" stroke="${a}" stroke-width="8" stroke-linecap="round" opacity="${0.28 + (i % 3) * 0.14}"/>`).join("")}
    </g>
    <circle cx="404" cy="515" r="74" fill="url(#body)"/>
    <circle cx="796" cy="515" r="74" fill="url(#body)"/>
    <circle cx="404" cy="515" r="38" fill="${b}" opacity="0.85"/>
    <circle cx="796" cy="515" r="38" fill="${b}" opacity="0.85"/>
    <rect x="530" y="465" width="140" height="100" rx="50" fill="${a}" opacity="0.22"/>
  </g>
`;

const partySvg = ([a, b]) => `
  <g filter="url(#shadow)" transform="translate(0 8)">
    <rect x="385" y="205" width="430" height="560" rx="86" fill="url(#darkBody)"/>
    <rect x="438" y="260" width="324" height="450" rx="56" fill="#121c2d"/>
    <circle cx="600" cy="404" r="118" fill="url(#body)"/>
    <circle cx="600" cy="404" r="58" fill="${b}" opacity="0.82"/>
    <circle cx="600" cy="604" r="96" fill="url(#body)"/>
    <circle cx="600" cy="604" r="44" fill="${b}" opacity="0.82"/>
    <path d="M462 314 H738" stroke="${a}" stroke-width="16" stroke-linecap="round" opacity="0.86"/>
    <path d="M462 734 H738" stroke="${a}" stroke-width="16" stroke-linecap="round" opacity="0.6"/>
    <circle cx="473" cy="404" r="18" fill="${a}"/>
    <circle cx="727" cy="604" r="18" fill="${a}"/>
  </g>
`;

const svgFor = (item) => {
  const palette = tones[item.tone] ?? tones.blue;
  const shape =
    item.kind === "overear"
      ? overearSvg(palette)
      : item.kind === "headset"
        ? headsetSvg(palette)
        : item.kind === "earbuds"
          ? earbudsSvg(palette)
          : item.kind === "openear"
            ? openearSvg(palette)
            : item.kind === "party"
              ? partySvg(palette)
              : speakerSvg(palette);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(item.title)}</title>
  <desc id="desc">Eigene Produktvisualisierung fuer KlangFinder, keine Hersteller- oder Amazon-Grafik.</desc>
  ${bg(item, palette)}
  ${shape}
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
mkdirSync(join(root, "public/audio-product-images"), { recursive: true });
writeFileSync(join(root, "src/data/audioProducts.ts"), dataFile);

for (const item of products) {
  writeFileSync(join(root, "public/audio-product-images", `${item.id}.svg`), svgFor(item));
}

console.log(`Generated ${products.length} products and ${products.length} SVG images.`);
