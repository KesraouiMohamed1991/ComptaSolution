import { Link, useLocation } from "react-router-dom";
import { socialMediaLinks } from "../components/Social.jsx";
import { Social } from "../components/Social.jsx";
import menu from "../assets/Icons/menu.svg";
import cross from "../assets/Icons/cross.svg";
import { useState } from "react";

// Define an array of link objects
const links = [
  { to: "/", label: "A propos" },
  { to: "/services", label: "Services" },
  // { to: "/creation", label: "Création d'entreprise" },
  { to: "/Formation", label: "Formations" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="h-16  relative p-4 w-full md:w-5/6 lg:w-4/5  mx-auto flex items-center justify-between">
      <div className="flex z-20 overflow-hidden items-center justify-center">
        <p className="sm:font-bold px-4 py-2 rounded-lg sm:text-lg flex items-center justify-center">
          <Link to={"/"}> ComptaSolutions </Link>

          <img className="h-8 w-8 px-2" src="./icon.svg" alt="" />
        </p>
      </div>
      <ul className="hidden sm:flex sm:justify-evenly items-center  gap-4">
        {links.map((link, index) => (
          <li key={index} className="px-4 py-2 text-xs sm:text-sm ">
            <Link
              to={link.to}
              className={
                location.pathname === link.to
                  ? "text-blue-900 underline font-medium"
                  : null
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className=" hidden lg:flex">
        {socialMediaLinks.slice(0, 2).map((socialMedia, index) => (
          <Social key={index} index={index} {...socialMedia} />
        ))}
      </div>
      <div className="flex gap-2 sm:hidden">
        <img
          className="py-4 z-20 hover:scale-125 h-12 w-12"
          src={!toggle ? menu : cross}
          alt="menu icon"
          onClick={handleToggle}
        />
      </div>
      {toggle && (
        <div className="h-screen z-10 p-16 w-full absolute inset-0 bg-blue-100">
          <ul className="flex flex-col h-full  w-full sm:hidden justify-center items-start">
            {links.map((link, index) => (
              <li
                key={index}
                className="px-6 text-blue-900 py-4 my-2 rounded-xl text-4xl bg-slate-100  "
              >
                <Link
                  onClick={handleToggle}
                  to={link.to}
                  className={
                    location.pathname === link.to ? "  font-semibold" : null
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
