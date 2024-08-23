import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SubscribeNow from "./Components/SubscribeNow";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "./App.css";
import PromptGenerator from "./Components/PromptGenerator"; // Ensure this path is correct
import Signin from "./Components/Signin";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribeNow" element={<SubscribeNow />} /> {/* Ensure the route path matches your component's naming convention */}
          <Route path="/promptGenerator" element={<PromptGenerator />} /> {/* Ensure the route path matches your component's naming convention */}
          <Route path="/Signin" element={<Signin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
