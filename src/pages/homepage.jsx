import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faVimeo,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import Courses from "../components/homepage/courses";
import AllProjects from "../components/projects/allProjects";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import Experiences from "../components/homepage/experiences";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(130);
	const [oldLogoSize, setOldLogoSize] = useState(130);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 130 - (scroll * 10) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const handleClick = (link) => {
		window.open(link, "_blank");
	  };

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};


	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container" id ='id-top'>
						<div className="homepage-first-area" >
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle" style={{ whiteSpace: 'pre-line' }}>
								<div>
									<p >
										Tyler is a passionate business owner with a strong foundation in <strong style={{ fontWeight: 800, color: 'black' }}>problem-solving, client relations, and analytical skills</strong>.
									</p>
									<p>
										As a self-starter, Tyler has successfully <strong style={{ fontWeight: 800, color: 'black' }}>managed projects from conception to completion</strong>, both independently and within teams. His <strong style={{ fontWeight: 800, color: 'black' }}>technical expertise</strong> in Java, Python, and web development, along with <strong style={{ fontWeight: 800, color: 'black' }}>creative and communication skills</strong> in video production and design, make him a well-rounded candidate for roles within software and technology.
									</p>
									<p>
										Tyler is seeking a <strong style={{ fontWeight: 800, color: 'black' }}>Summer 2024 internship in Product Management</strong> and similar roles where he aims to further develop his skills and make a meaningful impact.
									</p>
								</div>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.vimeo}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faVimeo}
									className="homepage-social-icon"
								/>
							</a>


							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
								style={{ marginBottom: '3px'}}
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
							
							<a href={`mailto:${INFO.main.email}`} className="homepage-mail-text " style={{ color: 'black', marginBottom: '5px' }}>
    							{INFO.main.email}
								
  							</a>
						</div>

						<div className="homepage-projects" id ='id-projects'>
							<div className="title articles-title">
								Projects
								</div>
							<AllProjects />
						</div>


						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding: '20px 0' }}>
						<p style={{ fontWeight: 'bolder', fontSize: '18px', marginBottom: '10px' }}>
        Featured Video: AutomatedTire
    </p>
    <iframe
        src="https://vimeo.com/903136209/8f54359f62?share=copy"
        width="80%"
        height="80%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="video"
    ></iframe>
</div>



						<div className="homepage-after-title" id = 'id-articles'>
							<div className="homepage-articles">
							<div className="title articles-title">
								Articles
								</div>
								{myArticles.map((article, index) => (
									<div
									className="homepage-articles" onClick={() => handleClick(myArticles[0]().linkedinUrl)}
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={article().linkedinUrl}
										/>
									</div>
								))}

							<div className="homepage-works">
								<div style={{ marginTop: '20px', marginRight: '120px'}}>
								<Courses />
							</div>

							</div>
							</div>
						

							<div className="homepage-works" id = 'id-education'>
								<Works />
								<div style={{ marginTop: '20px' }}>
								<Experiences />
							</div>

							</div>

						</div>


						<div className="contact-container" style={{ paddingTop: '40px', paddingBottom: '40px' }} id ='id-contact'>
							<div className="title contact-title">
							Contact
							<div className="about-socials"style={{ paddingTop: '20px' }}>
									<Socials />
						</div>
						</div>	
						</div>

						

						
					
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
