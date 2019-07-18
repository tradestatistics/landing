import React from 'react';
import "animate.css/animate.min.css";
import "./style.scss";
import "./prism.css";
import Footer from "./Footer";
import Hero from "./Hero";
import Philosophy from "./Philosophy";
import GettingStarted from "./GettingStarted";
// import Testimonials from "./Testimonials";
import Contributions from "./Contributions";

const App = () => {
  return (
    <div className="layout">
      <div className="content">
        <Hero/>
        <Philosophy/>
        {/* <Testimonials/> */}
        <GettingStarted/>
        <Contributions/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
