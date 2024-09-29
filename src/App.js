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
import PromptGenerator from "./Components/PromptGenerator";
import Signin from "./Components/Signin";
import ImageResize from "./Components/ImageResize";
import BackgroundChange from "./Components/BackgroundChange";
import ChangeColor from "./Components/ChangeColor";
import AddPayment from "./Components/AddPayment";
import Admin from "./Components/Admin";
import AdminPanel from "./Components/AdminPanel";
import AdminGraph from "./Components/AdminGraph.js";
import UserList from "./Components/UserList.js";
import ChangeDress from "./Components/ChangeDress.js";
import ImageToImageTransform from "./Components/ImageToImageTransform.js"; 
import PaymentList from "./Components/Adminpaymentlist.js"; // Ensure correct name here
import Settings from "./Components/Adminsettings.js"; // Ensure correct name here
import ServiceManagement from "./Components/AdminServiceManagement.js"; // Ensure correct name here
import TeamManagement from "./Components/AdminTeamManagement.js"; // Ensure correct name here

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribeNow" element={<SubscribeNow />} />
          <Route path="/promptGenerator" element={<PromptGenerator />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/imageResize" element={<ImageResize />} />
          <Route path="/backgroundChange" element={<BackgroundChange />} />
          <Route path="/changeColor" element={<ChangeColor />} />
          <Route path="/addPayment" element={<AddPayment />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/adminGraph" element={<AdminGraph />} />
          <Route path="/userList" element={<UserList />} /> 
          <Route path="/changeDress" element={<ChangeDress />} />
          <Route path="/imageToImageTransform" element={<ImageToImageTransform />} />
          
          {/* Corrected route names */}
          <Route path="/paymentList" element={<PaymentList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/serviceManagement" element={<ServiceManagement />} />
          <Route path="/teamManagement" element={<TeamManagement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
