import React from "react";
import Avatar from "./Avatar";

const Contribution = ({avatar, name, contribution, github, side = "left"}) => (
	<div className="contribution d-flex wrap">
			<div className="d-flex justify-center col-12-xs col-12-lg col-12-md" key="avatar">
				<Avatar src={avatar} description={name}/>
				<div className="avatar-text">
					<p className="contribution-text">
						<a href={github}>{name}</a>
					</p>
					<p className="name">
						{contribution}
					</p>
				</div>
			</div>
	</div>
);

export default Contribution;
