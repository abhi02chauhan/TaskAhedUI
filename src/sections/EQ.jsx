import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

const EQ = () => {
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
            { opacity: 0, x: -100 }, // From
            { opacity: 1, x: 0, ease: Power3.easeInOut, delay: index * 0.5 } // To
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
      <div ref={sectionRef} className="grid grid-cols-3 justify-items-center items-center h-80">
        <h2 ref={(element) => textRefs.current[0] = element} className="text-3xl font-semibold">Be the best you with EQ</h2>
        <p ref={(element) => textRefs.current[1] = element} className="text-xl text-gray-600 flex leading-relaxed ">
          Not having your own emotions <br />under control might be holding <br /> you back.
        </p>
        <p ref={(element) => textRefs.current[2] = element} className="text-xl text-gray-600 flex leading-relaxed">
          Additionally, not understanding <br /> those of others stops you from <br /> being parent, friend you can be.
        </p>
      </div>
    </>
  );
}

export default EQ;
