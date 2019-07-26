import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./components/SectionTitle";
import SectionSubTitle from "./components/SectionSubTitle";
import { PrismCode } from "react-prism";

const GettingStarted = () => {
	return <section className="ts-getting-started d-flex wrap" id="getting-started">
				<div className="col-12-xs col-5-lg d-flex justify-center padding-4">
					<ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
						<SectionTitle text="Getting Started"/>
						<p>
							We provide data for the period 1962-2017 covering all countries that report
							to the United Nations.
						</p>
						<p>
							Our datasets provide detailed and aggregated information about what countries export
							to specific partners and to the world.
						</p>
						<p>
							You can see reporting countries in 2017 <a href="https://api.tradestatistics.io/countries?y=2017">here</a>,
							and our available tables <a href="https://api.tradestatistics.io/tables">here</a>.
						</p>
						<p>
							Our API is open and doesn't require you to register
							or pay any fee.
						</p>
						<p>
							If you don't like APIs we also provide compressed CSV files for downloading, or if you are just
							feeling curious or scared about APIs, we have a <a href="https://shiny.tradestatistics.io">Shiny Dashboard</a> (in beta)
							that is a graphical interface to the API with export to Excel option but it lacks the full API flexibilibty.
						</p>
						<p>
							We have a single using restriction: Follow our <a href="https://docs.tradestatistics.io/index.html#code-of-conduct">Code of Conduct</a>.
						</p>
						<p>
							For details about using the API, links to datasets, and more, please check our <a href="https://docs.tradestatistics.io/datasets.html">documentation</a>.
						</p>
						<p>
							We also have specific documentation for our R Package  <a href="https://ropensci.github.io/tradestatistics/">tradestatistics.</a>.
						</p>
					</ScrollAnimation>
				</div>
				<div className="d-flex col-12-xs col-7-lg direction-column align-center padding-4">
					<div className="col-12 code-instruction">
						<SectionSubTitle text="Using the API from R"/>
						<pre className="lang-r" style={{ width: "100%" }}>
	                        <PrismCode className="lang-r">
	                            {
	                                `
# load the package
# install.packages("tradestatistics")
library(tradestatistics)

# available tables
ots_attributes_tables

# bilateral and product detailed data
ots_create_tidy_data(years = 2017, reporters = "chl", partners = "arg")
	                                `
	                            }
	                        </PrismCode>
	                    </pre>
	         </div>

					 <div className="col-12 code-instruction">
 						<SectionSubTitle text="Using the API from Python"/>
 						<pre className="lang-r" style={{ width: "100%" }}>
 	                        <PrismCode className="lang-r">
 	                            {
 	                                `
 # load libraries
 import pandas
 import requests, json

 # available tables
 tables = json.loads(requests.get("https://api.tradestatistics.io/tables").text)
 pandas.DataFrame.from_dict(tables, orient='columns')

 # bilateral and product detailed data
 trade = json.loads(
	 requests.get("https://api.tradestatistics.io/yrpc?y=2017&r=chl&p=arg").text)
 pandas.DataFrame.from_dict(trade, orient='columns')
 	                                `
 	                            }
 	                        </PrismCode>
 	                    </pre>
 	         </div>
				</div>
			</section>
}

export default GettingStarted;
