// ContactCTA.jsx
import ContactModal from "./ContactModal";
import ScrollAnimation from "react-animate-on-scroll";

export default function ContactCTA() {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <section id="contact" className="grid justify-center py-28 px-6 gap-6">
        <h2 className="text-4xl">Let&apos;s Work Together!</h2>
        <ContactModal />
      </section>
    </ScrollAnimation>
  );
}
