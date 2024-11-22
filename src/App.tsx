import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Work } from "./components/Work";

const App = () => (
  <div className="bg-[#070F2B]">
    <Header />
    <Banner />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
  </div>
);

export default App;
