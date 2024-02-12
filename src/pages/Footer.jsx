import { Link } from "react-router-dom";
import { socialMediaLinks } from "../components/Social.jsx";
import { Social } from "../components/Social.jsx";

const links = [
  { to: "/", label: "A propos" },
  { to: "/services", label: "Services" },
  { to: "/creation", label: "Création d'entreprise" },
  { to: "/Formation", label: "Formations" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <div className="h-16 flex flex-col p-4 sm:p-0 w-full sm:w-3/5 lg:w-4/5 mx-auto  items-center justify-between">
      <h1>ComptaSolutions</h1>
      <div className="flex justify-between items-center">
        <ul className="hidden sm:flex sm:justify-between items-center sm:mx-2 gap-4">
          {links.map((link, index) => (
            <li key={index} className="px-8 py-2 text-xs sm:text-sm">
              <Link to={link.to} className="text-blue-900 font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="gap-2 hidden md:flex">
          {socialMediaLinks.map((socialMedia, index) => (
            <Social key={index} index={index} {...socialMedia} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
