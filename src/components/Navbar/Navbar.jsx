import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import LogoIcon from "../Logo/LogoIcon";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        navColour ? "bg-[black] shadow-[0_10px_10px_0_rgba(9,5,29,0.171)] backdrop-blur-[15px]" : "bg-black"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-[0.3rem_2rem] text-[1.2rem]">
        <div className="flex justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center text-white text-2xl font-bold">
            <LogoIcon/>
            QR Create
          </Link>
          <button
            className="md:hidden relative bg-transparent border-none outline-none"
            onClick={() => setExpand(!expand)}
          >
            <span className="block bg-[#ffffff] h-[4px] w-[27px] mt-[5px] mb-[5px]"></span>
            <span className="block bg-[#ffffff] h-[4px] w-[27px] mt-[5px] mb-[5px]"></span>
            <span className="block bg-[#ffffff] h-[4px] w-[27px] mt-[5px] mb-[5px]"></span>
          </button>
        </div>
        <div
          className={`${
            expand ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
        >
          <ul className={`md:flex md:space-x-4 text-white p-4 md:p-0 rounded-lg md:rounded-none ${
            navColour || expand ? "bg-[black]" : "md:bg-black"
          }`}>
            <li className="my-2 md:my-0">
              <Link to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome className="inline mr-1 mb-1" /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
