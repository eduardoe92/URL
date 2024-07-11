import { useState, useEffect } from "react";
import { socialLinks } from "./SocialIcons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    if (year !== currentYear) {
      setCurrentYear(year);
    }
  }, [currentYear]);

  return (
    <footer className="relative flex flex-col items-center justify-between w-full max-w-screen-xl py-4 pt-8 pb-8 mx-auto md:flex-row md:justify-between md:pt-16">
      <hr className="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />

      <span className="flex flex-col gap-2 text-center text-white md:flex-row lg:gap-6 md:pl-16 lg:pl-6">
        <strong>&copy; {currentYear}</strong>{" "}
        <span aria-hidden className="hidden font-semibold md:inline">
          |
        </span>{" "}
        <br aria-hidden className="block md:hidden" />
        Diseñado por Eduardo Chacon
      </span>

      <hr
        aria-hidden="true"
        className="my-8 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"
      ></hr>

      <ul className="flex flex-row items-center mt-0 text-white gap-x-6 md:pr-16 lg:pr-6">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block transition hover:scale-125 hover:opacity-70"
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
