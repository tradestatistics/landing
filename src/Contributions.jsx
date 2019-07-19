import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./components/SectionTitle";

const Contributions = () => {
	return <section className="ts-contributions d-flex justify-center wrap" id="contributions">
				<div className="col-12-xs col-7-lg d-flex justify-center padding-4">
					<ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
						<SectionTitle text="Team & Contributions"/>
							<figure>
								<a href="https://github.com/pachamaltese">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/10091065?s=460&v=4" alt="pacha"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Pachá</p>
									<p className="ts-contributions-detail">Project Lead</p>
								</figcaption>
							</figure>

							<figure>
								<a href="https://github.com/emilyriederer">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/19798371?s=460&v=4" alt="emily"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Emily Riederer</p>
									<p className="ts-contributions-detail">Software Review</p>
								</figcaption>
							</figure>

							<figure>
								<a href="https://github.com/mpadge">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/6697851?s=460&v=4" alt="mark"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Mark Padgham</p>
									<p className="ts-contributions-detail">Software Review</p>
								</figcaption>
							</figure>

							<figure>
								<a href="https://github.com/aedobbyn">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/4908283?s=460&v=4" alt="amanda"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Amanda Dobbyn</p>
									<p className="ts-contributions-detail">Software Review</p>
								</figcaption>
							</figure>

							<figure>
								<a href="https://github.com/cimentadaj">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/8180025?s=460&v=4" alt="jorge"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Jorge Cimentada</p>
									<p className="ts-contributions-detail">Software Review</p>
								</figcaption>
							</figure>

							<figure>
								<a href="https://github.com/jbkunst">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/56481?s=460&v=4" alt="joshua"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Joshua Kunst</p>
									<p className="ts-contributions-detail">Data Wrangling</p>
								</figcaption>
							</figure>

							<figure>
								<a href="https://github.com/erasmo-marin">
									<img className="col-12-xs col-4-md col-3-lg ts-contributions-img" src="https://avatars1.githubusercontent.com/u/8242873?s=460&v=4" alt="erasmo"/>
								</a>
								<figcaption>
									<p className="ts-contributions-name">Erasmo Marín</p>
									<p className="ts-contributions-detail">Design</p>
								</figcaption>
							</figure>
					</ScrollAnimation>
				</div>
			</section>
}

export default Contributions;
