import React from "react";
import "./App.css";
import Header from "./components/Header";
import ServiceCards from "./components/ServiceCards";
import ContactForm from "./components/ContactForm";

const App = () => (
  <div className="app">
    <div className="main">
      <Header />
      <ServiceCards />
    </div>
    <ContactForm />
  </div>
);

export default App;
