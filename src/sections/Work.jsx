import React, { useEffect, useRef, useState } from 'react';
import { Container } from "@mui/material";
import { Csaw, logo } from '../assets/image';
import Card from "../components/Card";
import { cardUI } from '../constants';
import { TweenMax, Power3 } from 'gsap';

const Work = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Animate left content
          TweenMax.fromTo(
            left,
            1,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, ease: Power3.easeInOut }
          );

          // Animate right content
          TweenMax.fromTo(
            right,
            1,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, ease: Power3.easeInOut, delay: 0.5 }
          );

          setHasAnimated(true);
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is in view
    });

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div ref={sectionRef}>
      <Container fixed className="bg-slate-200 rounded-2xl">
        <div className="grid grid-cols-2 ml-8 pt-20">
          <div className="left" ref={leftRef}>
            <h1 className="text-5xl font-bold">Work with us</h1>
            <Container fixed className="mt-10 bg-white rounded-2xl">
              <div className="ml-1 p-1">
                <img src={Csaw} alt="aboutLogo" width={150} height={150} className="-translate-x-9" />
                <h2 className="text-2xl font-semibold mb-2">About</h2>
                <p className="text-xl text-gray-700 leading-loose mb-12">At ahed our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
              </div>
            </Container>
            <Container fixed className="bg-pink-50 rounded-2xl -translate-y-6">
              <div className="ml-1 p-1">
                <h2 className="text-2xl font-semibold mb-2">Product</h2>
                <p className="text-xl text-gray-700 leading-loose mb-8">Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager-like we did...</p>
              </div>
            </Container>
          </div>
          <div className="right" ref={rightRef}>
            <h1 className="flex flex-row-reverse mr-10"><img src={logo} alt="logo" width={150} height={150} /></h1>
            <div className="overflow-y-scroll ... h-screen mt-10">
              <section className="max-container grid justify-center">
                {cardUI.map((cardUI) => (
                  <Card key={cardUI.label} {...cardUI} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Work;
