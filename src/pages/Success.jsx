// Success.jsx
import { Link } from "@nextui-org/react";

export default function Success() {
  return (
    <>
      <section id="msg-section" className="py-16 grid gap-8 justify-center">
        <h1 className="text-4xl">Form Successfully Submitted</h1>
        <p className="text-2xl">I will get back to you as soon as possible (I promise!)</p>
        <Link className="text-xl" href="/">
          Return to Home
        </Link>
      </section>
    </>
  );
}
