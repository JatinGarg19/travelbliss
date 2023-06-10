import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ContactUs from "./routes/ContactUs";
import Services from "./routes/Services";
import About from "./routes/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;