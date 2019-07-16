import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialNetworks = () => {

	return <div className="ts-social-networks">
				<FontAwesomeIcon key="github" icon={faGithub} size="lg" color="white"/>
				<FontAwesomeIcon key="twitter" icon={faTwitter} size="lg" color="white"/>
				<FontAwesomeIcon key="mail" icon={faEnvelope} size="lg" color="white"/>
		   </div>

}

export default SocialNetworks;