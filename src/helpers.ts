import { WorkTileScheme } from "./components/tiles/WorkTile";
import { MotionServicesTileScheme } from "./components/tiles/MotionServicesTile";

export const GITHUB_LINK = "https://github.com/KamilJustynski";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/kamil-justy%C5%84ski/";

export const HEADER_LINKS = [
  { title: "Strona główna", link: "home" },
  { title: "Usługi", link: "services" },
  { title: "Projekty", link: "work" },
];

export const SERVICES_DATA: MotionServicesTileScheme[] = [
  {
    title: "UI/UX Design",
    description:
      "W procesie projektowania UI/UX skupiam się na użytkowniku. Stawiam na intuicyjne interfejsy, które prowadzą użytkownika przez stronę w sposób naturalny i bez zbędnych komplikacji. Moje projekty łączą estetykę z funkcjonalnością, aby użytkownicy mogli w łatwy sposób znaleźć to, czego potrzebują. Zawsze testuję i dostosowuję projekty, aby były one jak najbardziej dostępne i wygodne w użytkowaniu na różnych urządzeniach.",
    animation: "right",
    image: "/design.png",
  },
  {
    title: "Developer",
    description:
      "Tworzę nowoczesne i responsywne aplikacje internetowe, wykorzystując technologie takie jak React, Next, TailwindCSS i TypeScript. Dbam o to, by kod był optymalny, łatwy w utrzymaniu oraz skalowalny. Zawsze stawiam na wysoką wydajność i bezpieczeństwo aplikacji, by zapewnić użytkownikom jak najlepsze doświadczenia. Śledzę nowinki technologiczne, aby w swoich projektach korzystać z najnowszych rozwiązań i najlepszych praktyk programistycznych.",
    animation: "left",
    image: "/developer.png",
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
    delay: 0.5,
    link: "https://www.meblimar.com/",
  },
  {
    title: "Amper",
    image: "/amper.png",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    button: "Zobacz projekt",
    animation: "up",
    delay: 0.6,
    link: "https://www.pomiaryit.pl/",
  },
  {
    title: "Omnifood",
    image: "/omnifood.png",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    button: "Zobacz projekt",
    animation: "up",
    delay: 0.7,
    link: "https://kamiljustynski.github.io/Omnifood-Page/",
  },
];
