import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import IQ from "./sections/IQ";
import TCard from "./sections/Familiar";
import Meet from "./sections/Meet";
import Stepper from "./sections/Stepper";
import EQ from "./sections/EQ";
import Stepper2 from "./sections/Stepper2";
import Privacy from "./sections/Privacy";
import Work from "./sections/Work";
import Vacancies from "./sections/Vacancies";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <IQ />
      <TCard />
      <Meet />
      <Stepper />
      <EQ/>
      <Stepper2/>
      <Privacy/>
      <Work/>
      <Vacancies/>
      <Footer/>
    </main>
  );
};

export default App;
