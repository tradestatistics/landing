import React from "react";
import Avatar from "./Avatar";

const Testimonial = ({avatar, name, testimonial, side = "left"}) => (
	<div className="testimonial d-flex wrap">
		{	side === "left" &&
			<div className="d-flex justify-center col-12-xs col-4-lg col-5-md" key="avatar">
				<Avatar src={avatar} description={name}/>
			</div>
		}
		<div className="section-right col-12-xs col-8-lg col-7-md"  key="testimonial">
			<p className="testimonial-text serif italic">
				{testimonial}
			</p>
			<p className="name color-primary">
				{name}
			</p>
		</div>
		{	side === "right" &&
			<div className="d-flex justify-center col-12-xs col-4-lg col-5-md"  key="avatar">
				<Avatar src={avatar} description={name}/>
			</div>
		}
	</div>
);

export default Testimonial;