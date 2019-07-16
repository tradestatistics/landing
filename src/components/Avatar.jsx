import React from "react";
import { ReactComponent as AvatarHolder } from "../assets/avatar.svg";

const Avatar = ({ src, description }) => (
	<div className="ts-avatar">
		<img className="ts-avatar-img" src={src} alt={description}/>
		<AvatarHolder className="ts-avatar-holder"/>
	</div>
)

export default Avatar;