import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img className="w-[200px] h-[100px]" src={logo} alt="" />
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-10">
            <Link
              className="text-gradient cursor-pointer"
              to="home"
              activeClass="active"
              smooth={true}
            >
              Strona główna
            </Link>
            <Link
              className="text-gradient cursor-pointer"
              to="about"
              smooth={true}
            >
              O mnie
            </Link>
            <Link
              className="text-gradient cursor-pointer"
              to="services"
              smooth={true}
            >
              Oferta
            </Link>
            <Link
              className="text-gradient cursor-pointer"
              to="work"
              smooth={true}
            >
              Projekty
            </Link>
          </div>
          <button className="btn btn-sm hidden lg:block">
            <Link to="contact" smooth={true}>
              Kontakt
            </Link>
          </button>
          <button
            className="flex w-[30px]
          h-[20px] lg:hidden"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
