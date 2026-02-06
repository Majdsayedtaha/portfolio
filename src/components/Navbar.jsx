import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] h-[10vh] sm:h-[12vh] min-h-[60px]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-1 sm:gap-2 flex-shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain"
            loading="lazy"
          />

          <img
            src={logotext}
            alt="logo text"
            className="w-16 h-16 sm:w-[90px] sm:h-[90px] -ml-1 sm:-ml-[0.6rem] object-contain"
            loading="lazy"
          />
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-8 md:gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[16px] md:text-[21px] font-medium font-mova 
                uppercase tracking-[1px] md:tracking-[3px] cursor-pointer nav-links whitespace-nowrap`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-4 sm:p-6 bg-flashWhite opacity-[0.98] absolute 
                top-[10vh] left-0 w-screen h-[calc(100vh-10vh)] z-10 menu overflow-y-auto ${
                toggle ? "menu-open" : "menu-close"
              }`}
            >
              <div className="flex justify-end mb-8">
                <img
                  src={close}
                  alt="close"
                  className="w-6 h-6 sm:w-[22px] sm:h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                  loading="lazy"
                />
              </div>
              <ul className="list-none flex flex-col gap-6 items-start justify-start">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title
                        ? "text-french"
                        : "text-eerieBlack"
                    } text-2xl sm:text-[40px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-7 h-7 sm:w-[34px] sm:h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
