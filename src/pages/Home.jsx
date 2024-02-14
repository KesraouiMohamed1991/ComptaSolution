import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Formations from "./Formations";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Testimonial />
      <Services />
      <Formations />
    </div>
  );
}

export default Home;
