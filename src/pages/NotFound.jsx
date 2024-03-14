// NotFound.jsx
import { Link } from "@nextui-org/react";

export default function NotFound() {
  return (
    <>
      <section id="msg-section" className="py-16 grid gap-8 justify-center">
        <h1 className="text-4xl">Oops! Page not found</h1>
        <Link className="text-xl" href="/">
          Return to Home
        </Link>
      </section>
    </>
  );
}
