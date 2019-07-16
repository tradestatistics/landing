import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Testimonial from "./components/Testimonial";
import SectionTitle from "./components/SectionTitle";

const testimonials = [{
	avatar: "https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-500w.jpeg",
	name: "Jhon Doe - Ph.d. professsor at Columbia University",
	testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				  nisi ut aliquip ex ea commodo consequat.`,
	side: "left"
},
{
	avatar: "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-500w.jpeg",
	name: "Ameria Ford - Business Intelligence Engineer",
	testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				  nisi ut aliquip ex ea commodo consequat.`,
	side: "right"
},
{
	avatar: "https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-500w.jpeg",
	name: "Christopher Lee - Web Developer",
	testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				  nisi ut aliquip ex ea commodo consequat.`,
	side: "left"
}]



const Testimonials = () => {
	return <section className="ts-testimonials d-flex justify-center wrap" id="testimonials">
				<div className="col-12 d-flex justify-center">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						<SectionTitle text="Testimonials ."/>
					</ScrollAnimation>
				</div>
				{
					testimonials.map((props) => (
						<ScrollAnimation animateIn="fadeIn" animateOnce>
							<Testimonial {...props}/>
						</ScrollAnimation>
					))
				}
			</section>
}

export default Testimonials;