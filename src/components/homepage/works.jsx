import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./uva.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">University of Virginia</div>
							<div className="work-subtitle">
								Computer Science B.A.  |  GPA: 3.569
								
							</div>
							<div className="work-duration">2022 - 2025</div>
						</div>

						<div className="work">
							<img
								src="./pvcc.jpeg"
								alt="pvcc"
								className="work-image"
							/>
							<div className="work-title">Piedmont Virginia Community College</div>
							<div className="work-subtitle">
								GPA: 4.0
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>


						<div className="work">
							<img
								src="./camino.jpg"
								alt="camino"
								className="work-image"
							/>
							<div className="work-title">Camino Spanish School</div>
							<div className="work-subtitle">
								Barcelona, Spain  |  Bilingual Proficiency
							</div>
							<div className="work-duration">July 2023</div>
						</div>

						<div className="work">
							<img
								src="./lyon.png"
								alt="lyon"
								className="work-image"
							/>
							<div className="work-title">Université Lumière Lyon 2</div>
							<div className="work-subtitle">
								Lyon, France  |  Urban Sustainability Bootcamp
							</div>
							<div className="work-duration">June 2022</div>
						</div>




					</div>
				}
			/>
		</div>
	);
};

export default Works;
