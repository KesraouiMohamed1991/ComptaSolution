import ServiceItem from "../components/ServiceItem";
import { motion } from "framer-motion";

function Services() {
  const servicesData = [
    {
      title: "Comptabilité Financière",
      category: "comptabilité",
      description: [
        ["Suivi rigoureux des transactions financières."],
        ["Gestion des comptes clients et fournisseurs."],
        ["Établissement des bilans comptables."],
        [
          "Élaboration des fiches de paie conformes à la législation en vigueur.",
        ],
        ["Gestion des déclarations sociales liées aux salaires."],
        [
          "Préparation des déclarations forfaitaires adaptées aux spécificités de chaque entreprise.",
        ],
        [
          "Élaboration des fiches de paie conformes à la législation en vigueur.",
        ],
        ["Gestion des déclarations sociales liées aux salaires."],
        [
          "Préparation des déclarations forfaitaires adaptées aux spécificités de chaque entreprise.",
        ],
      ],
    },
    {
      title: "Expertise Fiscale et Parafiscale",
      category: "fiscalité",
      description: [
        [
          "Assistance dans la préparation et le dépôt des déclarations fiscales annuelles.",
        ],
        ["Optimisation fiscale pour maximiser les avantages légaux."],
        ["Gestion des déclarations sociales."],
        ["Suivi des cotisations sociales."],
      ],
    },

    {
      title: "Conseil en Création de Comptes CNAS et CACOBATPH",
      category: "administration",
      description: [
        [
          "Accompagnement dans la création et la gestion des comptes CNAS et CACOBATPH.",
        ],
        ["Conseils personnalisés pour la création d'une entreprise."],
        ["Assistance dans le choix du statut juridique et fiscal."],
        ["Orientation stratégique pour la croissance de l'entreprise."],
      ],
    },

    {
      title: "Aide à la création d'Entreprise",
      category: "administration",
      description: [
        ["Choix du régime fiscal (réel ou forfaitaire)."],
        ["Création du statut d'auto-entrepreneur."],
        ["Création d'entreprise simplifiée pour les professions libérales."],
      ],
    },

    {
      title: "Consultation et Stratégie en Gestion d'Entreprise",
      category: "administration",
      description: [
        ["Conseils financiers et fiscaux pour une gestion optimale."],
        ["Orientation stratégique pour la croissance de l'entreprise."],
      ],
    },
  ];

  return (
    <div className="w-full sm:w-4/5 lg:w-4/5  mx-auto flex  min-h-screen flex-col">
      <div className="sm:py-16 py-8  ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-800 text-3xl font-extrabold text-center mb-4"
        >
          Nos services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center sm:w-3/4 mx-auto sm:text-2xl p-4"
        >
          Experts en gestion financière offrant des solutions sur mesure pour
          votre entreprise.
        </motion.p>
      </div>

      <div className="p-4">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
