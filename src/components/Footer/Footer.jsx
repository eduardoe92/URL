import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://eduardoeliaschacon-portfolio.vercel.app/",
    label: "WebSite",
    icon: FaGlobe,
  },
  {
    href: "https://www.linkedin.com/in/eduardoe92/",
    label: "Linkedin",
    icon: FaLinkedin,
  },
  { href: "https://github.com/eduardoe92", label: "Github", icon: FaGithub },
  {
    href: "https://www.instagram.com/eduardo.e",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    if (year !== currentYear) {
      setCurrentYear(year);
    }
  }, [currentYear]);

  return (
    <footer className="relative mt-8 md:mt-0 flex w-full flex-col place-items-center pb-8 pt-8 md:flex-row md:justify-between md:pt-16">
      <hr className="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />

      <span className="flex flex-col gap-2 md:flex-row lg:gap-6 text-white text-center pl-0 md:pl-32 lg:pl-56">
        <strong>&copy; {currentYear}</strong>{" "}
        <span aria-hidden className="font-semibold hidden md:inline">
          |
        </span>{" "}
        <br aria-hidden className="block md:hidden" />
        Diseñado por Eduardo Chacon
      </span>

      <hr
        aria-hidden="true"
        className="my-8 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"
      ></hr>

      <ul className="flex flex-row gap-x-6 text-white items-center mt-0 md:mt-0 pr-0 md:pr-32 lg:pr-56">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:scale-125 hover:opacity-70 transition inline-block"
            >
              <span className="sr-only">{label}</span>
              <Icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
