import Avis from "../components/Avis";
import { motion } from "framer-motion";

function Testimonial() {
  const testimonialInfo = [
    {
      stars: 5,
      name: "Ouksir Ouali",
      job: "Douanier @ DGD",
      testimonialText:
        "ComptaSolution a rendu la gestion de mes finances si simple et efficace. Je recommande fortement leurs services !",
      imageSrc: "/wali.jpg",
    },
    {
      stars: 4,
      name: "Ait Bachir Hamza",
      job: "Ingénieur @  ABHCLIM ",
      testimonialText:
        "ComptaSolution offre un service professionnel et personnalisé. Je suis très satisfait de leur travail.",
      imageSrc: "./Hamza.png",
    },
    {
      stars: 3,
      name: " Amirat Boukhalfa",
      job: "Consultant @ ABL CONSULTING",
      testimonialText:
        "ComptaSolution a dépassé mes attentes en matière de comptabilité. Je les recommande vivement à tous ceux qui cherchent un comptable fiable.",
      imageSrc: "/boukhalfa.png",
    },
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto flex items-center p-8 justify-center flex-col">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-800 text-3xl font-extrabold text-center mb-4"
      >
        Témoignages
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, easing: "ease" }}
        className="text-center sm:w-3/4 mx-auto sm:text-2xl  p-4"
      >
        Plongez dans les témoignages de nos clients et découvrez pourquoi notre
        plateforme de services est votre meilleur choix !
      </motion.p>
      <div className="flex w-full flex-wrap justify-center items-center gap-5 py-8">
        {testimonialInfo.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index, easing: "ease" }}
            key={index}
          >
            <Avis
              stars={testimonial.stars}
              name={testimonial.name}
              job={testimonial.job}
              avis={testimonial.testimonialText}
              img={testimonial.imageSrc}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
