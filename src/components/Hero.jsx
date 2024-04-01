// Hero.jsx
import { Button, Link } from "@nextui-org/react";
import MessageIcon from "../assets/icons/MessageIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid items-center justify-center text-center w-full"
    >
      <div className="px-6">
        <h1 className="melodrama text-7xl mb-12">
          Providing small businesses with well-rounded and accessible Social Media Management services
        </h1>
        <p className="mb-12 text-4xl italic">Based in Philly, Serving Everywhere</p>
        <div>
          <Button
            as={Link}
            href="/contact"
            className="text-2xl bg-indigo-500 font-semibold"
            size="lg"
            radius="none"
            endContent={<MessageIcon />}
          >
            Let&apos;s Collab!
          </Button>
        </div>
      </div>
    </section>
  );
}
