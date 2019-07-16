import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./components/SectionTitle";
import { PrismCode } from "react-prism";

const GettingStarted = () => {
	return <section className="ts-getting-started d-flex wrap" id="getting-started">
				<div className="col-5 d-flex justify-center padding-4">
					<ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
						<SectionTitle text="Getting Started ."/>
						<p>
							Getting Started with Open Trade Statistics is easy.
							Our Api is open and doesn´t require you to register
							or pay any fee.
						</p>
						<p>
							For more detailed explanation, please check our <a href="https://docs.tradestatistics.io/">docs</a>
						</p>
					</ScrollAnimation>
				</div>
				<div className="d-flex col-7 direction-column align-center padding-4">
					<div className="col-12 code-instruction">
						<div className="step">Add required libraries</div>
						<pre className="lang-r" style={{ width: "100%" }}>
	                        <PrismCode className="lang-r">
	                            {
	                                `
library(jsonlite)
library(dplyr)
library(stringr)
	                                `
	                            }
	                        </PrismCode>
	                    </pre>
	                </div>
	                <div className="col-12 code-instruction">
						<div className="step">List available tables</div>
						<pre className="lang-r" style={{ width: "100%" }}>
	                        <PrismCode className="lang-r">
	                            {
	                                `as_tibble(fromJSON("https://api.tradestatistics.io/tables"))`
	                            }
	                        </PrismCode>
	                    </pre>
	                </div>
	                <div className="col-12 code-instruction">
						<div className="step">Load some data</div>
						<pre className="lang-r" style={{ width: "100%" }}>
	                        <PrismCode className="lang-r">
	                            {
	                                `
## Countries (no filter)
rda_countries <- "countries.rda"

if (!file.exists(rda_countries)) {
  countries <- as_tibble(fromJSON(
    "https://api.tradestatistics.io/countries"
  ))
  
  save(countries, file = rda_countries, compress = "xz")
  
  countries
} else {
  load(rda_countries)
  
  countries
}
	                                `
	                            }
	                        </PrismCode>
	                    </pre>
	                </div>
				</div>
			</section>
}

export default GettingStarted;