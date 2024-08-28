import React from "react";
import presentationImg from "../Assets/Presentation.png";
import audioVisualImg from "../Assets/Audio-Visual.png";
import translationImg from "../Assets/Translation.png";
import graphicDesignImg from "../Assets/Graphic.png";
import researchAnalyticsImg from "../Assets/Research.png";
import dataProcessingImg from "../Assets/Data Processing.png";
import "./ServiceCards.css";

const services = [
  {
    title: "Presentation Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: presentationImg,
  },
  {
    title: "Audio - Visual Production",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: audioVisualImg,
  },
  {
    title: "Translation Services",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: translationImg,
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: graphicDesignImg,
  },
  {
    title: "Research & Analytics",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: researchAnalyticsImg,
  },
  {
    title: "Data Processing",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dataProcessingImg,
  },
];

const ServiceCards = () => (
  <div className="service-cards">
    {services.map((service) => (
      <div className="card" key={service.title}>
        <div className="in-card">
          <img src={service.image} alt={service.title} className="card-image" />
          <h2>{service.title}</h2>
        </div>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
);

export default ServiceCards;
