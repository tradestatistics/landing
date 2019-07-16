import React from "react";
import Avatar from "./Avatar";

const Testimonial = ({avatar, name, testimonial, side = "left"}) => (
	<div className="testimonial">
		{	side === "left" &&
			<div className="d-flex justify-center col-4" key="avatar">
				<Avatar src={avatar} description={name}/>
			</div>
		}
		<div className="section-right col-8"  key="testimonial">
			<p className="testimonial-text serif italic">
				{testimonial}
			</p>
			<p className="name color-primary">
				{name}
			</p>
		</div>
		{	side === "right" &&
			<div className="d-flex justify-center col-4"  key="avatar">
				<Avatar src={avatar} description={name}/>
			</div>
		}
	</div>
);

export default Testimonial;