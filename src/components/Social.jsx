import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/Icons/LinkedIn.svg";
import facebook from "../assets/Icons/facebook.svg";
// import twitter from "../assets/Icons/twitter.svg";
// import Instagram from "../assets/Icons/Instagram.svg";

// Define social media links
// eslint-disable-next-line react-refresh/only-export-components
export const socialMediaLinks = [
  {
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/compta-solutions-2816402aa/",
    label: "LinkedIn",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100090934077268&mibextid=JRoKGi",
    label: "Facebook",
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

// Define Social component
// eslint-disable-next-line react/prop-types
export function Social({ icon, link, label, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, easing: "ease", delay: 0.25 * index }}
      className="text-xs flex items-center justify-center flex-col  hover:text-bold cursor-pointer"
    >
      <Link
        className="hover:text-purple-500 flex flex-col items-center justify-center"
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="py-4 hover:scale-125 h-12 w-12"
          src={icon}
          alt={`${label} Icon`}
        />
      </Link>
    </motion.li>
  );
}
