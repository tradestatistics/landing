import React, { useCallback } from "react";
import logo from "./assets/logo.svg";
import Navbar from "./Navbar";
import ScrollInvitation from "./components/ScrollInvitation";

const Hero = () => {

	const scrollToGettingStarted = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		const el = document.getElementsByClassName("ts-getting-started")[0];
		if(!el)
			return;
		el.scrollIntoView();
	}, []);

	return <section className="ts-hero">
				<div className="hero-content">
					<Navbar/>
				  	<img className="logo" alt="logo" src={logo}/>
				  	<div className="title">
				  		An Independent project that values reproducible research and provides tidy trade data.
				  	</div>
				  	<button className="cta-button" onClick={scrollToGettingStarted}>
				  		Get Started
				  	</button>
				  	<ScrollInvitation style={{
				  		position: "absolute",
				  		bottom: 0
				  	}}/>
				</div>
		   </section>
}

export default Hero;