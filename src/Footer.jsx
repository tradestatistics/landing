import React from 'react';

const Footer = () => {
	return <footer className="ts-footer text-center">
				<div className="links d-flex space-evenly col-12">
					<div className="links-col">
						<h5>References</h5>
						<ul>
							<li><a href="https://docs.tradestatistics.io/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
							<li><a href="https://docs.tradestatistics.io/datasets.html#api" target="_blank" rel="noopener noreferrer">API</a></li>
						</ul>
					</div>
					<div className="links-col">
						<h5>Resources</h5>
						<ul>
							<li><a href="https://docs.tradestatistics.io/datasets.html#compressed-data" target="_blank" rel="noopener noreferrer">Datasets</a></li>
							<li><a href="https://docs.tradestatistics.io/datasets.html#r-package" target="_blank" rel="noopener noreferrer">R Package</a></li>
							<li><a href="https://marketplace.digitalocean.com/apps/rstudio" target="_blank" rel="noopener noreferrer">RStudio 1-Click Droplet</a></li>
						</ul>
					</div>
					<div className="links-col">
						<h5>Organization</h5>
						<ul>
							<li><a href="https://docs.tradestatistics.io/datasets.html#code-of-conduct" target="_blank" rel="noopener noreferrer">Code of Conduct</a></li>
						</ul>
					</div>
					<div className="links-col">
						<h5>Contact</h5>
						<ul>
							<li><a href="https://twitter.com/opentradestats" target="_blank" rel="noopener noreferrer">Github</a></li>
							<li><a href="https://github.com/tradestatistics" target="_blank" rel="noopener noreferrer">Twitter</a></li>
							<li><a href="mailto:contact@tradestatistics.io">Email</a></li>
						</ul>
					</div>
				</div>
				<div className="copyright d-flex justify-center align-center direction-column">
					<div>
						Except where otherwise noted, content on this site is licensed under the <a href="https://creativecommons.org/licenses/by-nc/4.0/" class="footer-link">CC-BY-NC license</a>.
					</div>
					<div>Designed by <a href="https://github.com/erasmo-marin" class="footer-link">erasmo-marin</a> with ❤️</div>
				</div>
			</footer>
}

export default Footer;
