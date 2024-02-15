import Avis from "../components/Avis";

function Testimonial() {
  const testimonialInfo = [
    {
      stars: 5,
      name: "Tania Andrew",
      job: "Frontend Lead @ Google",
      testimonialText:
        "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
      imageSrc:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
    },
    {
      stars: 3,
      name: "mohamed ali",
      job: "devOps @ facebook",
      testimonialText:
        "I found solution to all my code needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      stars: 3,
      name: "mohamed soulayman",
      job: "Designer @ Uber",
      testimonialText:
        "I found solution to all my code needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
      imageSrc:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto flex items-center p-8 justify-center flex-col">
      <h1 className="text-blue-800 text-3xl font-extrabold text-center mb-4">
        Témoignages
      </h1>
      <p className="text-center sm:w-3/4 mx-auto text-2xl p-4">
        Plongez dans les témoignages de nos clients et découvrez pourquoi notre
        plateforme de services est votre meilleur choix !
      </p>
      <div className="flex w-full flex-wrap justify-center items-center gap-5 py-8">
        {testimonialInfo.map((testimonial, index) => (
          <Avis
            key={index}
            stars={testimonial.stars}
            name={testimonial.name}
            job={testimonial.job}
            avis={testimonial.testimonialText}
            img={testimonial.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
