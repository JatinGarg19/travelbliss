import Hero from "../components/Hero"
import aboutImg from "../assets/3.jpg"
import Navbar from "../components/Navbar";
import Trip from "../components/Trip"
import Footer from "../components/Footer";


function Services() {
  return (
    <>
      <Navbar />
      <Hero cName = "hero-about" heroImg = {aboutImg} title = "Services" btnClass = "hide" />
      <Trip />
      <Footer />
    </>
  );
}

export default Services;
