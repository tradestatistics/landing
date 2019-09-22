import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./components/SectionTitle";
import ubuntuIcon from "./assets/ubuntu.svg";
import rIcon from "./assets/r.svg";
import rstudioIcon from "./assets/rstudio.svg";
import postgresqlIcon from "./assets/postgresql.svg";
import reactIcon from "./assets/react.svg";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Stack = () => {
	return <section className="ts-stack d-flex justify-center wrap" id="stack">
				<div className="col-12-xs col-7-lg d-flex justify-center padding-4">
					<ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
						<SectionTitle text="Software Stack"/>
						<p>
							We ❤️ Open Source!
						</p>

						<Grid>
        			<Row>
          		<Col sm={12} md={6} lg={3}>
								<figure>
									<a href="https://ubuntu.com/"><img src={ubuntuIcon} alt="ubuntu" height="100" width="auto" className="stack-image"/></a>
									<figcaption className="stack-caption">Ubuntu</figcaption>
								</figure>
          		</Col>

							<Col sm={12} md={6} lg={3}>
								<figure>
									<a href="https://www.r-project.org/"><img src={rIcon} alt="r" height="100" width="auto" className="stack-image"/></a>
									<figcaption className="stack-caption">R</figcaption>
								</figure>
          		</Col>

							<Col sm={12} md={6} lg={3}>
								<figure>
									<a href="https://www.rstudio.com/"><img src={rstudioIcon} alt="rstudio" height="100" width="auto" className="stack-image"/></a>
									<figcaption className="stack-caption">RStudio</figcaption>
								</figure>
          		</Col>
        			</Row>

							<Row>
          		<Col sm={12} md={6} lg={3}>
								<figure>
									<a href="https://www.postgresql.org/"><img src={postgresqlIcon} alt="postgresql" height="100" width="auto" className="stack-image"/></a>
									<figcaption className="stack-caption">PostgreSQL</figcaption>
								</figure>
          		</Col>

							<Col sm={12} md={6} lg={3}>
								<figure>
									<a href="https://reactjs.org/"><img src={reactIcon} alt="react" height="100" width="auto" className="stack-image"/></a>
									<figcaption className="stack-caption">React</figcaption>
								</figure>
          		</Col>
        			</Row>
      			</Grid>
					</ScrollAnimation>
				</div>
			</section>
}

export default Stack;
