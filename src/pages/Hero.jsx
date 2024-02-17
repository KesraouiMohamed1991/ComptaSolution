import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="mb-24 mt-16 w-screen flex flex-col justify-start items-center ">
      <div className=" w-full p-4 sm:w-4/5 flex flex-col   text-center mt-4 sm:mt-16">
        <p className="py-4 uppercase text-sm sm:text-lg">
          ComptaSolutions votre partenaire freelance
        </p>

        <h1 className="pb-16 text-center text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-800 to-blue-900">
          Votre partenaire de confiance pour une gestion administrative et
          financière simplifiée et efficace
        </h1>

        <p className="text-sm w-4/6 mx-auto sm:text-base">
          Simplifiez et optimisez la gestion administrative et financière de
          votre entreprise avec ComptaSolutions. Notre expertise en
          comptabilité, fiscalité et conseils vous offre un partenariat fiable
          pour assurer votre succès financier
        </p>
        <div className="py-8 flex justify-center items-center w-full ">
          <Link
            className="px-6 py-3 rounded-lg text-xs sm:text-base font-semibold  bg-blue-800 text-white "
            to={"/"}
          >
            Nous contacter
          </Link>

          <Link
            className="px-6 py-3 text-xs sm:text-base font-semibold rounded-lg border mx-8 border-blue-700 bg-white text-whiblue-800te "
            to={"/services"}
          >
            Nos services
          </Link>
        </div>
        <span className="text-sm sm:text-lg">
          15 jours d&apos;essai gratuit - Pas de carte de crédit nécessaire ✌🏻
        </span>
      </div>
    </div>
  );
}

export default Hero;
