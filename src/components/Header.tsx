import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinks } from "./tiles/NavLinks";
import { HEADER_LINKS } from "../helpers";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#1E2A47] sticky top-0 z-10">
      <div className="flex justify-between items-center container mx-auto">
        <img className="w-[200px] h-[100px]" src={logo} alt="Logo" />
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-10">
          {HEADER_LINKS.map((data, index) => (
            <NavLinks key={index} {...data} onClick={handleLinkClick} />
          ))}
        </div>
        <button
          className="bg-[#535C91] hover-button font-primary font-bold btn-sm rounded-full hidden lg:block"
          onClick={handleLinkClick}
        >
          <Link
            offset={-80}
            to="contact"
            smooth={true}
            onClick={handleLinkClick}
          >
            Kontakt
          </Link>
        </button>
        <button
          className="flex w-[30px] h-[20px] lg:hidden"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/60 z-10"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`lg:hidden fixed top-0 right-0 w-[250px] h-full bg-[#070F2B] transition-transform duration-300 z-20 ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-3xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col pl-10 mt-10">
          {HEADER_LINKS.map((data, index) => (
            <NavLinks key={index} {...data} onClick={handleLinkClick} />
          ))}
          <button
            className="bg-[#535C91] hover-button font-primary w-[150px] font-bold btn-sm rounded-full mt-5"
            onClick={handleLinkClick}
          >
            <Link
              to="contact"
              offset={-80}
              smooth={true}
              onClick={handleLinkClick}
            >
              Kontakt
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};
