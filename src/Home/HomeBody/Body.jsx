import Contact from "@/Component/HomeComponet/Contact/Contact";
import Dresses from "@/Component/HomeComponet/Dresses/Dresses";
import Services from "@/Component/HomeComponet/Services/Services";
import Venue from "@/Component/HomeComponet/Venue/Venue";


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