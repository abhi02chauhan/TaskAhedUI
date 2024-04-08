import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { navLinks } from "../constants";
import { headerlogo } from "../assets/image";

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const downloadBtnRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;
    const logoElement = logoRef.current;
    const downloadBtnElement = downloadBtnRef.current;

    // Animate the navigation items and download button with GSAP
    TweenMax.fromTo(
      [logoElement, navElement, downloadBtnElement],
      1, // Duration
      { opacity: 0, y: -50 }, // From
      { opacity: 1, y: 0, ease: Power3.easeInOut, stagger: 0.2 } // To
    );
  }, []);

  return (
    <header className="padding-x py-8  z-10  w-full">
      <nav ref={navRef} className="flex justify-between items-center max-container">
        <a href="/">
          <img
            ref={logoRef}
            src={headerlogo}
            alt="Logo"
            width={110}
            height={25}
            className="ml-10"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-10 font-medium">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div ref={downloadBtnRef} className="bg-black text-lg text-white rounded-full px-6 py-3.5 mr-10">
          <button>
            Download Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
