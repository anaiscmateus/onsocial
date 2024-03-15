// Hero.jsx
import { Button } from "@nextui-org/react";
import MessageIcon from "../assets/icons/MessageIcon";

export default function Hero() {
  return (
    <section id="hero">
      <h1>Providing businesses with well-rounded Social Media Management</h1>
      <Button
        className="font-semibold"
        variant="flat"
        size="lg"
        radius="none"
        endContent={<MessageIcon />}
      >
        Let&apos;s Chat
      </Button>
    </section>
  );
}