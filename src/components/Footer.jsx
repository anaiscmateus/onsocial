// Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@nextui-org/react";

function Footer() {
  return (
    <footer id="footer" className="pt-16">
      <nav>
        <span>
          Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" />{" "}
          by{" "}
          <Link href="https://anaiscodes.netlify.app" target="_blank">
            Anaïs Mateus
          </Link>
        </span>
        <section id="footer-socials">
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
      </nav>
    </footer>
  );
}

export default Footer;
