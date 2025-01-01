import React from "react";
import "./App.css";

// Main App Component
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// Navbar Component
const Navbar = () => (
  <nav className="Navbar">
    <div className="logo">
      Shivansh <span>Portfolio</span>
    </div>
    <ul className="nav-links">
      {["Home", "About", "Services", "Contact"].map((link) => (
        <li key={link}>
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  </nav>
);

// Hero Section Component
const HeroSection = () => (
  <section id="home" className="HeroSection">
    <h1>
      Welcome to <span>Shivansh's</span> Portfolio
    </h1>
    <p>
      I am a React Native developer dedicated to building intuitive and scalable
      applications.
    </p>
    <a href="#contact" className="cta-button">
      Hire Me
    </a>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="AboutSection">
    <h2>About Me</h2>
    <p>
      I am a passionate React Native developer with expertise in creating
      cross-platform mobile applications that deliver exceptional user
      experiences.
    </p>
  </section>
);

// Services Section Component
const ServicesSection = () => (
  <section id="services" className="ServicesSection">
    <h2>Services</h2>
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

const services = [
  {
    title: "Mobile App Development",
    description: "Building robust and scalable mobile apps with React Native.",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive designs for seamless user experiences.",
  },
  {
    title: "API Integration",
    description: "Integrating APIs to enhance app functionality efficiently.",
  },
];

// Reusable Service Card Component
const ServiceCard = ({ title, description }) => (
  <div className="ServiceCard">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Contact Section Component
const ContactSection = () => (
  <section id="contact" className="ContactSection">
    <h2>Contact Me</h2>
    <p>Feel free to reach out for collaborations or inquiries!</p>
    <a href="mailto:shivansh@example.com" className="cta-button">
      Email Me
    </a>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="Footer">
    <p>© {new Date().getFullYear()} Shivansh. All rights reserved.</p>
  </footer>
);

export default App;
