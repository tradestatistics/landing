import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./components/SectionTitle";
import { PrismCode } from "react-prism";

const GettingStarted = () => {
	return <section className="ts-getting-started d-flex wrap" id="getting-started">
				<div className="col-12-xs col-5-lg d-flex justify-center padding-4">
					<ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
						<SectionTitle text="Getting Started"/>
						<p>
							Getting Started with Open Trade Statistics is easy.
							Our API is open and doesn't require you to register
							or pay any fee.
						</p>
						<p>
							We have just two restrictions:
							<ul>
								<li>Follow our <a href="https://docs.tradestatistics.io/index.html#code-of-conduct">Code of Conduct</a></li>
								<li>No more restrictions</li>
							</ul>
						</p>
						<p>
							For a more detailed explanation, please check our <a href="https://docs.tradestatistics.io/">documentation</a>.
						</p>
					</ScrollAnimation>
				</div>
				<div className="d-flex col-12-xs col-7-lg direction-column align-center padding-4">
					<div className="col-12 code-instruction">
						<SectionTitle text="Using the API from R"/>
						<pre className="lang-r" style={{ width: "100%" }}>
	                        <PrismCode className="lang-r">
	                            {
	                                `
# load the package
# install.packages("tradestatistics")
library(tradestatistics)

# list available tables
ots_attributes_tables

# download some data
ots_create_tidy_data(years = 2017, reporters = "chl", partners = "arg")
	                                `
	                            }
	                        </PrismCode>
	                    </pre>
	         </div>

					 <div className="col-12 code-instruction">
 						<SectionTitle text="Using the API from Python"/>
 						<pre className="lang-r" style={{ width: "100%" }}>
 	                        <PrismCode className="lang-r">
 	                            {
 	                                `
 # load libraries
 import pandas
 import requests, json

 # list available tables
 tables = json.loads(requests.get("https://api.tradestatistics.io/tables").text)
 pandas.DataFrame.from_dict(tables, orient='columns')

 # download some data
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
