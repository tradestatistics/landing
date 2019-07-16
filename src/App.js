import React from 'react';
import "animate.css/animate.min.css";
import "./style.scss";
import "./prism.css";
import Footer from "./Footer";
import Hero from "./Hero";
import GettingStarted from "./GettingStarted";
import Testimonials from "./Testimonials";
import Philosophy from "./Philosophy";

const App = () => {
  return (
    <div className="layout">
      <div className="content">
        <Hero/>
        <Philosophy/>
        <Testimonials/>
        <GettingStarted/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
