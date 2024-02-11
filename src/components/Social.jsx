import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/Icons/LinkedIn.svg";
import facebook from "../assets/Icons/facebook.svg";
// import twitter from "../assets/Icons/twitter.svg";
// import Instagram from "../assets/Icons/Instagram.svg";

// eslint-disable-next-line react-refresh/only-export-components
export const socialMediaLinks = [
  {
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/kesraoui-mohamed-298a6a147/",
    label: "LinkedIn",
  },
  {
    icon: facebook,
    link: "https://github.com/KesraouiMohamed1991",
    label: "facebook",
  },
  // {
  //   icon: twitter,
  //   link: "https://twitter.com/KesraouiMohame1",
  //   label: "Twitter",
  // },
  // {
  //   icon: Instagram,
  //   link: "https://www.instagram.com/massiliapixx",
  //   label: "Instagram",
  // },
];

// eslint-disable-next-line react/prop-types
export function Social({ icon, link, label, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, easing: "ease", delay: 0.25 * index }}
      className="text-xs flex items-center justify-center flex-col w-16   p-4 l hover:text-bold cursor-pointer"
    >
      <Link
        className="hover:text-purple-500 flex flex-col items-center justify-center "
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="py-4 hover:scale-125 h-12 w-12"
          src={icon}
          alt={`${label} Icon`}
        />

        {/* {label} */}
      </Link>
    </motion.li>
  );
}
