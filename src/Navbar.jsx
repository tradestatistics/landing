import React, { useCallback } from "react";
import SocialNetworks from "./components/SocialNetworks";
// import ScrollInvitation from "./components/ScrollInvitation";

const Navbar = () => {

	const scrollToPhilosophy = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		const el = document.getElementsByClassName("ts-philosophy")[0];
		if(!el)
			return;
		el.scrollIntoView({behavior: "smooth"});
	}, []);

	const scrollToGettingStarted = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		const el = document.getElementsByClassName("ts-getting-started")[0];
		if(!el)
			return;
		el.scrollIntoView({behavior: "smooth"});
	}, []);

	const scrollToContributions = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		const el = document.getElementsByClassName("ts-contributions")[0];
		if(!el)
			return;
		el.scrollIntoView({behavior: "smooth"});
	}, []);

	return(
      <div className="ts-navbar">
        <div className="ts-navbar-wrapper d-flex col-12 space-between">
        	<div className="ts-menu d-flex align-start">
						<div className="menu-item">
							<a href="#philosophy" onClick={scrollToPhilosophy}>Philosophy</a>
						</div>
						<div className="menu-item">
              <a href="#getting-started" onClick={scrollToGettingStarted}>Getting Started</a>
            </div>
        		{/*
							<div className="menu-item">
              <a href="#testimonials">Testimonials</a>
             	</div>
						*/}
						<div className="menu-item">
              <a href="#contributions" onClick={scrollToContributions}>Team</a>
            </div>
        		<div className="menu-item">
              <a href="https://docs.tradestatistics.io/" target="_blank" rel="noopener noreferrer">Docs</a>
            </div>
        	</div>
          <div className="d-flex align-end" style={{ paddingRight: "2rem" }}>
            <SocialNetworks/>
          </div>
        </div>
      </div>)
}

export default Navbar;
