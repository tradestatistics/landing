import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialNetworks = () => {

	return <div className="ts-social-networks">
				<a href="https://github.com/tradestatistics" className="ts-social-networks">
					<FontAwesomeIcon key="github" icon={faGithub} size="lg" color="white"/>
				</a>
				<a href="https://twitter.com/opentradestats" className="ts-social-networks">
				<FontAwesomeIcon key="twitter" icon={faTwitter} size="lg" color="white"/>
				</a>
				<a href="mailto:contact@tradestatistics.io" className="ts-social-networks">
				<FontAwesomeIcon key="mail" icon={faEnvelope} size="lg" color="white"/>
				</a>
		   </div>

}

export default SocialNetworks;
