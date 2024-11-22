import { WorkTileScheme } from "./components/tiles/WorkTile";
import { MotionServicesTileScheme } from "./components/tiles/MotionServicesTile";
import { AboutTileScheme } from "./components/tiles/AboutTile";

export const GITHUB_LINK = "https://github.com/KamilJustynski";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/kamil-justy%C5%84ski/";

export const HEADER_LINKS = [
  { title: "Strona główna", link: "home" },
  { title: "O mnie", link: "about" },
  { title: "Usługi", link: "services" },
  { title: "Projekty", link: "work" },
];

export const SERVICES_DATA: MotionServicesTileScheme[] = [
  {
    title: "UI/UX Design",
    description:
      "W procesie projektowania UI/UX skupiam się na użytkowniku. Stawiam na intuicyjne interfejsy, które prowadzą użytkownika przez stronę w sposób naturalny i bez zbędnych komplikacji. Moje projekty łączą estetykę z funkcjonalnością, aby użytkownicy mogli w łatwy sposób znaleźć to, czego potrzebują. Zawsze testuję i dostosowuję projekty, aby były one jak najbardziej dostępne i wygodne w użytkowaniu na różnych urządzeniach.",
    animation: "up",
    image: "/design.png",
    delay: 0.4,
  },
  {
    title: "Strony internetowe",
    description:
      "Tworzę nowoczesne i responsywne aplikacje internetowe, wykorzystując technologie takie jak React, Next, TailwindCSS i TypeScript. Dbam o to, by kod był optymalny, łatwy w utrzymaniu oraz skalowalny. Zawsze stawiam na wysoką wydajność i bezpieczeństwo aplikacji, by zapewnić użytkownikom jak najlepsze doświadczenia. Śledzę nowinki technologiczne, aby w swoich projektach korzystać z najnowszych rozwiązań i najlepszych praktyk programistycznych.",
    animation: "up",
    image: "/developer.png",
    delay: 0.5,
  },
  {
    title: "SEO",
    description:
      "Optymalizuję strony internetowe, aby osiągały wysokie pozycje w wynikach wyszukiwania Google. Zaczynam od analizy słów kluczowych i audytu technicznego strony, by zidentyfikować obszary wymagające poprawy. Dbam o techniczne SEO, optymalizację treści oraz budowanie linków, aby zwiększyć widoczność strony i przyciągnąć wartościowy ruch. Regularnie monitoruję wyniki i dostosowuję strategię, aby zapewnić długotrwałe efekty i wzrost pozycji w wyszukiwarce.",
    animation: "up",
    image: "/SEO.png",
    delay: 0.6,
  },
];

export const WORK_DATA: WorkTileScheme[] = [
  {
    title: "Meblimar",
    image: "/meblimar.png",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    button: "Zobacz projekt",
    animation: "up",
    delay: 0.4,
    link: "https://www.meblimar.com/",
  },
  {
    title: "Amper",
    image: "/amper.png",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    button: "Zobacz projekt",
    animation: "up",
    delay: 0.5,
    link: "https://www.pomiaryit.pl/",
  },
  {
    title: "Omnifood",
    image: "/omnifood.png",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    button: "Zobacz projekt",
    animation: "up",
    delay: 0.6,
    link: "https://kamiljustynski.github.io/Omnifood-Page/",
  },
];

export const ABOUT_DATA: AboutTileScheme[] = [
  {
    text: "Jestem pasjonatem technologii webowych z kilkuletnim doświadczeniem w branży. Moją misją jest tworzenie stron internetowych, które są nie tylko estetyczne, ale także funkcjonalne i intuicyjne dla użytkowników.",
    animation: "right",
    delay: 0.4,
  },
  {
    text: "W swojej pracy kładę nacisk na zrozumienie potrzeb klienta oraz jego grupy docelowej. Dzięki wykorzystaniu nowoczesnych technologii, takich jak React, Next.js i TailwindCSS, tworzę aplikacje, które są szybkie, bezpieczne i zgodne z najlepszymi standardami programistycznymi.",
    animation: "right",
    delay: 0.5,
  },
  {
    text: "Wciąż rozwijam swoje umiejętności, śledząc nowości w branży i uczestnicząc w ciekawych projektach. Moim celem jest dostarczanie rozwiązań, które pomagają firmom wyróżniać się w internecie i przyciągać nowych klientów.",
    animation: "right",
    delay: 0.6,
  },
  {
    text: "Jeśli chcesz współpracować z kimś, kto stawia na jakość, innowacyjność i dbałość o detale, zapraszam do kontaktu!",
    animation: "right",
    delay: 0.7,
  },
];
