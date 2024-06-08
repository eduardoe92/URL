import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

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
        navColour ? "bg-[#1b1a2ea9] shadow-[0_10px_10px_0_rgba(9,5,29,0.171)] backdrop-blur-[15px]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-[0.3rem_2rem] text-[1.2rem]">
        <Link to="/" className="text-white text-2xl font-bold">
          QR Create
        </Link>
        <button
          className="relative bg-transparent border-none outline-none md:hidden"
          onClick={() => setExpand(!expand)}
        >
          <span className="block bg-[#ffffff] h-[4px] w-[27px] mt-[5px] mb-[5px] rotate-0 left-0 opacity-100"></span>
          <span className="block bg-[#ffffff] h-[4px] w-[27px] mt-[5px] mb-[5px] rotate-0 left-0 opacity-100"></span>
          <span className="block bg-[#ffffff] h-[4px] w-[27px] mt-[5px] mb-[5px] rotate-0 left-0 opacity-100"></span>
        </button>
        <div
          className={`${
            expand ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-4 text-white">
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
