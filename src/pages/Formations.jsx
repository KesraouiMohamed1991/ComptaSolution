import Formation from "../components/Formation";
function Formations() {
  const FormationsData = [
    {
      title: "Logiciel de comptabilité",
      description: [
        "Suivi rigoureux des transactions financières.",
        "Gestion des comptes clients et fournisseurs.",
        "Comment faire un rapprochement bancaire et faire les analyses des comptes.",
        "Comment comptabiliser les consommations.",
        "Établissement des bilans comptables.",
        "Élaboration des G50.",
        "Élaboration de toutes les déclarations fiscales : IBS, IRG, TVA, et Timbre.",
        "Comptabilisation des états de paie conformes à la législation en vigueur.",
        "Préparation des déclarations forfaitaires adaptées aux spécificités de chaque entreprise.",
      ],
    },
    {
      title: "Logiciel de paie",
      description: [
        "Préparation et calcul de la paie.",
        "Déclarations sociales liées aux salariés.",
        "Assistance dans la préparation et le dépôt des déclarations parafiscales (déclarations sociales)",
        "Suivi des cotisations sociales.",
      ],
    },
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto min-h-screen flex-col">
      <div className="sm:py-16 py-8  ">
        <h1 className="text-blue-800 text-3xl font-extrabold text-center mb-4">
          Nos Formations
        </h1>
        <p className="text-center sm:w-3/4 mx-auto text-2xl p-4">
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
