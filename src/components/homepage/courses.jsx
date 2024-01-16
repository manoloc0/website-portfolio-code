import React from "react";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/courses.css";

const Courses = () => {
	const courses = [
	  "Data Structures and Algorithms I & II",
	  "Discrete Mathematics I",
	  "Computer Structure & Organization I",
	  "Commercial Law I & II"
	];

	return (
		<div className="courses">
		  <Card
			icon={faPencil}
			title="Related Coursework"
			body={
			  <div className="courses-body">
				{courses.map((course, index) => (
				  <div className="course" key={index}>
					<div className="course-title">{course}</div>
				  </div>
				))}
			  </div>
			}
		  />
		</div>
	  );
	};
	
	export default Courses;
