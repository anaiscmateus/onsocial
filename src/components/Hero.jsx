// Hero.jsx
import { Button, Link } from "@nextui-org/react";
import MessageIcon from "../assets/icons/MessageIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid items-center justify-center text-center w-full"
    >
      <div>
        <h1 className="melodrama text-7xl mb-12">
          Providing businesses with well-rounded Social Media Management
        </h1>
        <div>
          <Button
            as={Link}
            href="/contact"
            className="font-semibold text-2xl"
            variant="flat"
            size="lg"
            radius="none"
            endContent={<MessageIcon />}
          >
            Let&apos;s Chat
          </Button>
        </div>
      </div>
    </section>
  );
}
