import { Link } from "react-scroll";
import React from "react";

interface NavLinksScheme {
  title: string;
  link: string;
  onClick?: () => void;
}

export const NavLinks: React.FC<NavLinksScheme> = ({
  title,
  link,
  onClick,
}) => {
  return (
    <Link
      className="cursor-pointer hover:scale-105 duration-300"
      to={link}
      activeClass="active"
      smooth={true}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};
