// Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="flex justify-center px-6 pt-28 pb-8">
      <nav className="max-w-7xl w-full sm:flex sm:justify-between sm:items-center text-center sm:text-left">
        <div>
          <p>OnSocial Marketing Solutions LLC ©</p>
          <p className="text-sm pt-2">
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by{" "}
            <a className="underline" target="_blank" href="https://anaiscodes.netlify.app/">Anaïs Mateus</a>
          </p>
        </div>
        <section id="footer-socials" className="flex justify-center sm:py-0 py-3">
          <ul className="flex gap-3 text-2xl">
            <li>
              <a
                href="https://www.linkedin.com/company/onsocial-marketing-solutions/"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/onsocialphl/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-gray-400"
                />
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
