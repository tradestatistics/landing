import React, { useCallback } from "react";
import logo from "./assets/logo-white.svg";
import Navbar from "./Navbar";
import ScrollInvitation from "./components/ScrollInvitation";

const Hero = () => {

	const scrollToPhilosophy = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		const el = document.getElementsByClassName("ts-philosophy")[0];
		if(!el)
			return;
		el.scrollIntoView({behavior: "smooth"});
	}, []);

	return <section className="ts-hero">
				<div className="hero-content">
					<Navbar/>
				  	<img className="logo" alt="logo" src={logo}/>
				  	<div className="title text-center">
				  		An Independent project that values reproducible research and provides tidy trade data.
				  	</div>
				  	<button className="cta-button" onClick={scrollToPhilosophy}>
				  		Learn More
				  	</button>
				  	<ScrollInvitation style={{
				  		position: "absolute",
				  		bottom: 0
				  	}}/>
				</div>
		   </section>
}

export default Hero;
