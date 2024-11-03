import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";
import { Work } from "./components/Work";

const App = () => (
  <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
    <Header />
    <Banner />
    <Nav />
    <About />
    <Services />
    <Work />
    <Contact />
    <Info />
  </div>
);

export default App;
