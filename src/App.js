import React from "react";
import "./App.css";
import Header from "./components/Header";
import ServiceCards from "./components/ServiceCards";
import ContactForm from "./components/ContactForm";

const App = () => (
  <div className="app">
    <div className="main">
      <Header />
      <ContactForm />
    </div>
    <div>
      <ServiceCards />
    </div>
  </div>
);

export default App;
