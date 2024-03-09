// Home.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <ContactCTA />
    </>
  );
}
