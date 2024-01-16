import React from "react";
import { Link } from "react-scroll";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}>
								<Link to="id-top" spy={true} smooth = {true} offset = {-40} duration = {500}> Home
								</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}>
								<Link to="id-projects" spy={true} smooth = {true} offset = {-50} duration = {500}> Projects
								</Link>
							</li>

							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}>
								<Link to="id-education" spy={true} smooth = {true} offset = {-50} duration = {700}> Education
								</Link>
							</li>

							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}>
								<Link to="id-articles" spy={true} smooth = {true} offset = {-50} duration = {500}> Articles
								</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}>
								<Link to="id-contact" spy={true} smooth = {true} offset = {-50} duration = {700}> Contact
								</Link>
							</li>


						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
