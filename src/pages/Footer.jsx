import { Link } from "react-router-dom";
import { socialMediaLinks } from "../components/Social.jsx";
import { Social } from "../components/Social.jsx";
import { motion } from "framer-motion";

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
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                easing: "ease",
                delay: 0.25 * index,
              }}
              key={index}
              className="px-8 py-2 border-r border-yellow-400 text-xs "
            >
              <Link to={link.to} className="text-blue-900 font-medium">
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="gap-2 flex">
          {socialMediaLinks.map((socialMedia, index) => (
            <Social key={index} index={index} {...socialMedia} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 p-6">
        <p className="w-1/2 text-xs text-end ">
          @ {new Date().getFullYear()} Tous droits réservés
        </p>

        <p className="w-1/2 text-xs ">
          <Link target="_blank" to={"https://kesraouicreative.com/"}>
            Designed by Kesraoui Mohamed
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
