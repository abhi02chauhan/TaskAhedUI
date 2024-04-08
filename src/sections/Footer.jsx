import { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { headerlogo, logo, appleStore } from "../assets/image";
import { mail }  from '../assets/icons';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the footer elements when it becomes visible
          animateFooter();
        }
      });
    });

    footerObserver.observe(footerRef.current);

    // Cleanup observer on component unmount
    return () => {
      footerObserver.disconnect();
    };
  }, []);

  const animateFooter = () => {
    const headerLogo = document.querySelector('.header-logo');

    // Animate the header logo with GSAP
    TweenMax.fromTo(
      headerLogo,
      1,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, ease: Power3.easeInOut }
    );
  };

  return (
    <>
      <hr />
      <div className="flex flex-col justify-center items-center" ref={footerRef}>
        <img src={headerlogo} alt="logo" height={150} width={150} className="header-logo" />
        <img src={logo} alt="ahed" height={80} width={80} className="-translate-y-5" />
        <div className="flex gap-10 font-medium leading-tight">
          <p>AuguststraBe 26, 101117 Berlin</p>
          <p className="flex">
            <span><img src={mail} alt="mail" /></span>hi@ahed-app.com
          </p>
        </div>
       <a href="https://www.apple.com/in/app-store/"> <img src={appleStore} alt="appstore" width={130} height={130} /></a>
        <p className="-m-5 mb-5 text-gray-500">&#169;2024 Ahed app. All right reserved</p>
      </div>
    </>
  );
}

export default Footer;
