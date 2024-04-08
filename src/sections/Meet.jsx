import { Container } from "@mui/material";
import { img2 } from "../assets/image";
import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

const Meet = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    const handleScroll = () => {
      // Check if the section is in view
      if (sectionElement.getBoundingClientRect().top < window.innerHeight) {
        // Animate the text and image with GSAP
        TweenMax.fromTo(
          textElement,
          1, // Duration
          { opacity: 0, x: -100 }, // From
          { opacity: 1, x: 0, ease: Power3.easeInOut } // To
        );
        TweenMax.fromTo(
          imageElement,
          1, // Duration
          { opacity: 0, y: 100 }, // From
          { opacity: 1, y: 0, ease: Power3.easeInOut, delay: 0.5 } // To
        );
        // Remove the scroll event listener after animating
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <Container fixed className="bg-pink-50 rounded-2xl">
        <div className="grid grid-cols-2 ml-8 mb-24">
          <div className="left flex flex-col mt-8">
            <p ref={textRef} className="mt-8 text-xl font-semibold text-gray-900">
              Built out of frustration
            </p>
            <h1 className="text-6xl font-bold leading-tight">
              Meet the Ahed app
            </h1>
            <img
              ref={imageRef}
              src={img2} 
              alt="feature-logo"
              height={200}
              width={200}
              className="m-10 ml-32"
            />
          </div>
          <div className="right m-8 flex flex-col justify-center items-center text-slate-600 text-xl font-semibold">
            <p className="mr-8 mt-10 leading-relaxed">A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
            <p className="mr-5 mt-6 leading-relaxed">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Meet;
