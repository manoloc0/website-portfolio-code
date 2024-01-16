import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/experiences.css";

const Experiences = () => {
	return (
		<div className="experiences">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="experiences-body">
						<div className="experience">
							<img
								src="./Forthright-Films_Profile.jpg"
								alt="forthright-films"
								className="experience-image"
							/>
							<div className="experience-title">Forthright Films</div>
							<div className="experience-subtitle">
								Business Owner, Video Producer
							</div>
							<div className="experience-duration">2014 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Experiences;
