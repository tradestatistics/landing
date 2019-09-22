import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./components/SectionTitle";
import digitalOceanIcon from "./assets/do.svg";
import rOpenSciIcon from "./assets/ropensci.svg";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Partners = () => {
	return <section className="ts-partners d-flex justify-center wrap" id="partners">
				<div className="col-12-xs col-7-lg d-flex justify-center padding-4">
					<ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
						<SectionTitle text="Partners"/>
						<p>
							Our API and R package greatly improved under <a href="https://ropensci.org/">rOpenSci</a> peer review.
						</p>
						<p>
							This project is hosted at <a href="https://www.digitalocean.com/">DigitalOcean</a> servers and qualified for an Open Source Sponsorship that
							covers a large part of the hosting cost.
						</p>
						<p>
							Thanks both to rOpenSci and DigitalOcean!
						</p>

						<Grid>
        			<Row>
          		<Col sm={12} md={12} lg={6}>
            		<img src={rOpenSciIcon} alt="ropensci" height="75" width="auto" className="partners-image"/>
          		</Col>

							<Col sm={12} md={12} lg={6}>
            		<img src={digitalOceanIcon} alt="digitalocean" height="75" width="auto" className="partners-image"/>
          		</Col>
        			</Row>
      			</Grid>
					</ScrollAnimation>
				</div>
			</section>
}

export default Partners;
