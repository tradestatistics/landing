import React from "react";
import Avatar from "./Avatar";

const Contribution = ({avatar, name, contribution, github, side = "left"}) => (
	<div className="contribution d-flex wrap">
			<div className="d-flex justify-center col-5-xs col-5-lg col-5-md" key="avatar">
				<Avatar src={avatar} description={name}/>
			</div>
			<div className="section-right col-7-xs col-7-lg col-7-md" key="contribution">
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
