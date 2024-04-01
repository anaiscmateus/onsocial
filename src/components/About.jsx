// About.jsx
import { Divider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="pt-20 px-6 grid justify-center">
      <h3 className="text-4xl font-semibold">Who&lsquo;s OnSocial?</h3>
      <Divider className="my-6" />
      <section className="grid lg:grid-cols-12 gap-8 max-w-7xl items-center">
        <section className="lg:col-span-7">
          <p className="text-2xl tracking-wider mb-5">
            <span className="font-bold text-indigo-500">
              OnSocial Marketing Solutions
            </span>{" "}
            is <span className="font-bold italic">revolutionizing</span> social
            media for small businesses, taking the weight off of business
            owners&lsquo; shoulders so they can{" "}
            <span className="font-bold">focus on what matters most</span>.
          </p>
          <p className="text-2xl tracking-wider mb-5">
            The founder of OnSocial is{" "}
            <span className="text-indigo-500 font-bold">Mateo Souada</span>.
            They are a dynamic social media manager, copywriter, and email
            marketer with four years of experience in their field.
          </p>
          <p className="text-2xl tracking-wider">
            Coming from an extensive creative writing and social media
            background, Mateo molds their skills into a detailed, well-rounded
            digital marketing package{" "}
            <span className="font-bold italic">
              crafted to meet your business goals
            </span>
            . They are particularly adept at utilizing analytics and trend data
            to explain complicated marketing concepts in an accessible fashion.
            Using automation tools such as Sprout Social, Hootsuite, and Later,
            as well as Meta Business Suite,{" "}
            <span className="font-bold">
              Mateo can bring your sales goals to fruition by appealing to
              modern digital audiences
            </span>
            .
          </p>
        </section>
        <section className="lg:col-span-5">
          <img
            src="/images/mateo-graphic.png"
            alt="Mateo the founder of OnSocial Marketing Solutions"
          />
          <section id="about-socials" className="flex justify-center">
            <ul className="flex gap-3 text-3xl">
              <li>
                <a
                  href="https://www.linkedin.com/company/onsocial-marketing-solutions/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-gray-400"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/onsocialphl"
                  target="_blank"
                  className="hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:onsocialphl@gmail.com"
                  className="hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}
