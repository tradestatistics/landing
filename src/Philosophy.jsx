import React from "react";
import SectionTitle from "./components/SectionTitle";
import ScrollAnimation from 'react-animate-on-scroll';

const Philosophy = () => {

	return <div className="ts-philosophy" id="philosophy">
				<div className="wrapper d-flex wrap align-center">
					<div className="text-center col-4-lg col-12-md d-flex align-center">
						<ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce>
							<SectionTitle text="Our Philosophy ."/>
						</ScrollAnimation>
					</div>
					<div className="description col-8-lg col-12-md serif padding-2">
						<ScrollAnimation animateIn="fadeIn" animateOnce>
							<p>
								Open Trade Statistics is an independent project that values
								reproducible research and provides tidy trade data. We are
								heavily inspired by R community values and Open Licenses views
								on freedom. 
							</p>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" delay={250} animateOnce>
							<p>
								We focus on commodities data and our added value, unlike many
								other good trade data projects, is that we focus on data processing
								and reproducibility instead of data visualization.
							</p>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" delay={500} animateOnce>
							<p>
								Our goal is to ease data analysis and promote a reproducibility culture.
							</p>
						</ScrollAnimation>
					</div>
				</div>
			</div>

}

export default Philosophy;