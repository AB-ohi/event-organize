import Contact from "@/Component/HomeComponent/Contact/Contact";
import Dresses from "@/Component/HomeComponent/Dresses/Dresses";
import Services from "@/Component/HomeComponent/Services/Services";
import Venue from "@/Component/HomeComponent/Venue/Venue";



const Body = () => {
  return (
    <div>
      <section id="hero">
        {/* Banner/hero content */}
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="venue">
        <Venue />
      </section>

      <section id="dresses">
        <Dresses />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;