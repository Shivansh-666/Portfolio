import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

const Navbar = () => (
  <nav className="Navbar">
    <div className="logo">Shivansh <span>Portfolio</span></div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const HeroSection = () => (
  <section id="home" className="HeroSection">
    <h1>Welcome to <span>Shivansh's</span> Portfolio</h1>
    <p>I am a React Native developer dedicated to building intuitive and scalable applications.</p>
    <a href="#contact" className="cta-button">Hire Me</a>
  </section>
);

const AboutSection = () => (
  <section id="about" className="AboutSection">
    <h2>About Me</h2>
    <p>
      I am a passionate React Native developer with expertise in creating cross-platform mobile applications that deliver exceptional user experiences.
    </p>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="ServicesSection">
    <h2>Services</h2>
    <div className="service-list">
      <ServiceCard
        title="Mobile App Development"
        description="Building robust and scalable mobile apps with React Native."
      />
      <ServiceCard
        title="UI/UX Design"
        description="Crafting intuitive designs for seamless user experiences."
      />
      <ServiceCard
        title="API Integration"
        description="Integrating APIs to enhance app functionality efficiently."
      />
    </div>
  </section>
);

const ServiceCard = ({ title, description }) => (
  <div className="ServiceCard">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ContactSection = () => (
  <section id="contact" className="ContactSection">
    <h2>Contact Me</h2>
    <p>Feel free to reach out for collaborations or inquiries!</p>
    <a href="mailto:shivansh@example.com" className="cta-button">Email Me</a>
  </section>
);

const Footer = () => (
  <footer className="Footer">
    <p>© 2024 Shivansh. All rights reserved.</p>
  </footer>
);

export default App;
