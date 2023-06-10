import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName = "hero"
        heroImg = "https://images.unsplash.com/photo-1593118960299-4818285df788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title = "Your Journey Your Story"
        text = "Choose your Favourite Destination"
        btnText = "Travel Plan"
        url = "/"
        btnClass = "show"
      />

      <Destination />

      <Trip />

      <Footer />
    </>
  );
}

export default Home;
