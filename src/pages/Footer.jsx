import { Link } from "react-router-dom";
import { socialMediaLinks } from "../components/Social.jsx";
import { Social } from "../components/Social.jsx";

const links = [
  { to: "/", label: "A propos" },
  { to: "/services", label: "Services" },
  { to: "/Formation", label: "Formations" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <div className="h-56 flex flex-col p-4 sm:p-0 w-full  bg-blue-50  items-center justify-evenly">
      <h1 className="font-bold">ComptaSolutions</h1>
      <div className="flex justify-between items-center">
        <ul className="hidden lg:flex sm:justify-between items-center sm:mx-2 gap-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="px-8 py-2 border-r border-yellow-400 text-xs "
            >
              <Link to={link.to} className="text-blue-900 font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="gap-2 hidden lg:flex">
          {socialMediaLinks.map((socialMedia, index) => (
            <Social key={index} index={index} {...socialMedia} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between p-6">
        <p className="text-xs">
          @ {new Date().getFullYear()} Tous droits réservés
        </p>

        <p className="text-xs ">
          <Link target="_blank" to={"https://kesraouicreative.com/"}>
            Designed by Kesraoui Mohamed
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
