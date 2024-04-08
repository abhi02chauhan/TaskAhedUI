import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { Container } from "@mui/material";
import CustomizedSteppers from "../components/Stepper2UI";

const Stepper2 = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const textElements = textRefs.current;

    const handleScroll = () => {
      // Check if the section is in view
      if (sectionElement.getBoundingClientRect().top < window.innerHeight) {
        // Animate each text element with GSAP
        textElements.forEach((textElement, index) => {
          TweenMax.fromTo(
            textElement,
            1, // Duration
            { opacity: 0, y: 100 }, // From
            { opacity: 1, y: 0, ease: Power3.easeInOut, delay: index * 0.5 } // To
          );
        });
        // Remove the scroll event listener after animating
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Call handleScroll once on component mount to check initial state
    handleScroll();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={sectionRef}>
        <Container fixed className="bg-green-50 rounded-2xl h-screen ">
          <div className="flex  flex-col justify-center items-center"> 
            <p ref={(element) => textRefs.current[0] = element} className="text-xl font-medium mt-20">Let your friends,family,and co-workers (anonymously) rate your social skills.</p>
            <h1 ref={(element) => textRefs.current[1] = element} className="text-5xl font-bold mt-6">Ever wondered what other think of you?</h1>
            <div ref={(element) => textRefs.current[2] = element} className="mt-20 "> <CustomizedSteppers/></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Stepper2;
