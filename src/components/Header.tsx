import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img className="w-[200px] h-[100px]" src={logo} alt="" />
          <button className="btn btn-sm">
            <Link to="contact" smooth={true}>
              Kontakt
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};
