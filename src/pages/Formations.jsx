import Formation from "../components/formation";
function Formations() {
  const FormationsData = [
    {
      title: "Logiciel de comptabilité (Winalco SCF)",
      description: [
        "Suivi rigoureux des transactions financières.",
        "Gestion des comptes clients et fournisseurs.",
        "Établissement des bilans comptables.",
        "Élaboration des fiches de paie conformes à la législation en vigueur.",
        "Gestion des déclarations sociales liées aux salaires.",
        "Préparation des déclarations forfaitaires adaptées aux spécificités de chaque entreprise.",
      ],
    },
    {
      title: "Logiciel de paie (Winalco Paie)",
      description: [
        "Assistance dans la préparation et le dépôt des déclarations fiscales annuelles.",
        "Optimisation fiscale pour maximiser les avantages légaux.",
        "Gestion des déclarations sociales.",
        "Suivi des cotisations sociales.",
      ],
    },
  ];

  return (
    <div className="w-full sm:w-4/5 mx-auto min-h-screen flex-col">
      <div className="sm:py-16 py-8  ">
        <h1 className="text-blue-800 text-3xl font-extrabold text-center mb-4">
          Nos Formations
        </h1>
        <p className="text-center text-2xl p-4">
          Nos formations sont conçues et animées par des experts en gestion
          financière, offrant des solutions sur mesure adaptées aux besoins
          spécifiques de votre entreprise.
        </p>
      </div>

      <div className="p-4">
        {FormationsData.map((formation, index) => (
          <Formation key={index} formation={formation} />
        ))}
      </div>
    </div>
  );
}

export default Formations;
