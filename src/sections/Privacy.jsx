import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

const Privacy = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const h1Element = h1Ref.current;
    const spanElement = spanRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the h1 tag with moving effect
          TweenMax.fromTo(
            h1Element,
            1, // Duration
            { x: -100, opacity: 0 }, // From
            { x: 0, opacity: 1, ease: Power3.easeInOut } // To
          );

          // Animate the span tag with typewriter effect
          TweenMax.fromTo(
            spanElement,
            2, // Duration
            { width: 0, opacity: 0 }, // From
            { width: spanElement.scrollWidth, opacity: 1, ease: Power3.easeInOut, delay: 1 } // To
          );

          observer.unobserve(sectionElement);
        }
      });
    });

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className='flex flex-col items-center mt-60 h-screen'>
      <p className='text-2xl font-medium'>We take privacy seriously</p>
      <h1 ref={h1Ref} className='text-4xl font-bold mt-4'>Before you get started</h1>
      <h2 className='text-2xl text-slate-600 mt-5 text-center '>
        "We won't share your answers with anyone (and won't ever tell
        <br /> you which friends said what about you)"
      </h2>
      <p className='mt-10 flex text-2xl'>with love, <span ref={spanRef} className='italic font-serif' style={{ whiteSpace: 'nowrap' }}>Team Ahead</span></p>
      <button className="bg-black hover:bg-gray-900 text-white font-bold mt-10 py-2 px-6 rounded-full">
        Start a test
      </button>
      <p className='mt-5 text-slate-600'>Take only 5 minutes</p>
    </div>
  );
};

export default Privacy;
