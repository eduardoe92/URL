import { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="w-full text-secondary border-t-secondary border-t-2 flex flex-col md:flex-row justify-center items-center text-center md:justify-between pt-8 pb-8 mx-auto mt-10 md:mt-0">
      <span className= "text-lg">
        <strong>&copy; {currentYear}</strong>{" "}
        <span aria-hidden className="font-semibold hidden md:inline">
          |
        </span>{" "}
        <br aria-hidden className="block md:hidden" />
        Diseñado por Eduardo Chacon
      </span>
      <ul className="flex flex-row gap-x-6 items-center mt-5 md:mt-0">
        <li>
          <a
            href="https://eduardoeliaschacon-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <span className="sr-only">WebSite</span>
            <FaGlobe size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/eduardoe92/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <span className="sr-only">Linkedin</span>
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/eduardoe92"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <span className="sr-only">Github</span>
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eduardo.e"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
