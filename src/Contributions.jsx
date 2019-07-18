import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Contribution from "./components/Contributions";
import SectionTitle from "./components/SectionTitle";

const contributions = [
{
	avatar: "https://avatars1.githubusercontent.com/u/10091065?s=460&v=4",
	name: "Pachá",
	github: "https://github.com/pachamaltese",
	contribution: `Project Lead`,
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/19798371?s=460&v=4",
	name: "Emily Riederer",
	github: "https://github.com/emilyriederer",
	contribution: `Software review`,
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/6697851?s=460&v=4",
	name: "Mark Padgham",
	github: "https://github.com/mpadge",
	contribution: `Software review`,
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/4908283?s=460&v=4",
	name: "Amanda Dobbyn",
	contribution: `Software review`,
	github: "https://github.com/aedobbyn",
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/8180025?s=460&v=4",
	name: "Jorge Cimentada",
	github: "https://github.com/cimentadaj",
	contribution: `Software review`,
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/11927811?s=460&v=4",
	name: "Stefanie Butland",
	github: "https://github.com/stefaniebutland",
	contribution: `Proofreading`,
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/56481?s=460&v=4",
	name: "Joshua Kunst",
	github: "https://github.com/jbkunst",
	contribution: `Data wrangling`,
	side: "left"
},
{
	avatar: "https://avatars1.githubusercontent.com/u/8242873?s=460&v=4",
	name: "Erasmo Marin",
	github: "https://github.com/erasmo-marin",
	contribution: `Website`,
	side: "left"
}
]



const Testimonials = () => {
	return <section className="ts-contributions d-flex justify-center wrap" id="contributions">
				<div className="col-12 d-flex justify-center">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						<SectionTitle text="Team & Contributions"/>
					</ScrollAnimation>
				</div>
				{
					contributions.map((props) => (
						<ScrollAnimation animateIn="fadeIn" animateOnce>
							<Contribution {...props}/>
						</ScrollAnimation>
					))
				}
			</section>
}

export default Testimonials;
