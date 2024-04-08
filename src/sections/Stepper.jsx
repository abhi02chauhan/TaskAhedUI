import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { ghost } from "../assets/image";
import VerticalLinearStepper from "../components/StepperUI";

const Stepper = () => {
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
    <>
      <div ref={sectionRef} className="flex flex-col m-24">
        <p ref={textRef} className="text-xl ">Wrong with self-improvement & how we're fixing it.</p>
        <h1 ref={textRef} className="flex text-5xl mt-2 mb-10 font-bold">Self-improvement. Ugh. <span className="ml-5"><img ref={imageRef} src={ghost} alt="gifImg" width={70} height={70} /></span></h1>
        <div className="flex justify-center items-center mt-5"><VerticalLinearStepper /></div>
      </div>
    </>
  );
};

export default Stepper;
