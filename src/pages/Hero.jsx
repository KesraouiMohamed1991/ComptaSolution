import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="mb-24  mt-8 w-full sm:w-4/5 lg:w-4/5  mx-auto flex flex-col justify-start items-center ">
      <div className=" w-full p-4 overflow-hidden flex flex-col   text-center mt-4 sm:mt-16">
        <p className="py-4 uppercase text-sm sm:text-lg">
          ComptaSolutions votre partenaire freelance
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-16 overflow-hidden text-center text-2xl sm:text-5xl  lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-800 to-blue-900"
        >
          Votre partenaire de confiance pour une gestion administrative et
          financière simplifiée et efficace
        </motion.h1>

        <p className="text-sm md:w-4/6 mx-auto sm:text-base">
          Simplifiez et optimisez la gestion administrative et financière de
          votre entreprise avec ComptaSolutions. Notre expertise en
          comptabilité, fiscalité et conseils vous offre un partenariat fiable
          pour assurer votre succès financier.
        </p>
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-8 overflow-hidden flex flex-col   sm:flex-row justify-center items-center w-full "
        >
          <Link
            className="px-6 py-3  mx-2 rounded-lg text-xs sm:text-base font-semibold  bg-blue-800 text-white "
            to={"/contact"}
          >
            Nous contacter
          </Link>
        </motion.div>
        <span className="text-sm sm:text-lg">
          Pas de carte de crédit nécessaire ✌🏻
        </span>
      </div>
    </div>
  );
}

export default Hero;
