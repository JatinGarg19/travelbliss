import Hero from "../components/Hero"
import aboutImg from "../assets/12.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function ContactUs() {
  return (
    <>
      <Navbar />
      <Hero cName = "hero-about" heroImg = {aboutImg} title = "Contact Us" btnClass = "hide" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactUs;
