import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import aboutImg from "../assets/night.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName = "hero-about" heroImg = {aboutImg} title = "About" btnClass = "hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;