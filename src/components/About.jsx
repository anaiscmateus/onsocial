// About.jsx
import { Image, Divider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="pt-16 px-6 grid justify-center">
      <section className="grid md:grid-cols-4 gap-8 max-w-7xl">
        <section className="md:col-span-3">
          <h3 className="text-2xl font-semibold">About Us</h3>
          <Divider className="my-3" />
          <p className="tracking-wider">
            OnSocial Marketing Solutions is revolutionizing social media for
            small businesses, taking the weight off of business owners&lsquo;
            shoulders so they can focus on what matters most. The founder of
            OnSocial is Mateo Souada. They are a dynamic social media manager,
            copywriter, and email marketer with four years of experience in
            their field. Coming from an extensive creative writing and social
            media background, Mateo molds their skills into a detailed,
            well-rounded digital marketing package crafted to meet your business
            goals. They are particularly adept at utilizing analytics and trend
            data to explain complicated marketing concepts in an accessible
            fashion. Using automation tools such as Sprout Social, Hootsuite,
            and Later, as well as Meta Business Suite, Mateo can bring your
            sales goals to fruition by appealing to modern digital audiences.
          </p>
        </section>
        <section className="md:col-span-1">
          <Image
            width={300}
            src="/images/mateo.jpg"
            alt="Mateo the founder of OnSocial Marketing Solutions"
            className="mb-4"
          />
          <p>Mateo Souada // Founder</p>
          <section id="about-socials">
            <ul className="flex gap-3 text-xl">
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
