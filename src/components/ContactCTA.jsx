// ContactCTA.jsx
import { Button, Link } from "@nextui-org/react";
import MessageIcon from "../assets/icons/MessageIcon";

export default function ContactCTA() {
  return (
    <section id="contact" className="pt-16 px-6">
      <h2>Let&apos;s Work Together!</h2>
      <Button
        as={Link}
        href="/contact"
        variant="flat"
        radius="none"
        className="font-semibold"
        endContent={<MessageIcon />}
      >
        Contact Us
      </Button>
    </section>
  );
}
