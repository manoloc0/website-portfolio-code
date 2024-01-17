import React from "react";

function article_1() {
	return {
		date: "6 January 2024",
		title: "How does Akinator AI Select Such Good Questions? Understanding Intelligent Question Selection Through Information Theory",
		description:
			"While coding my own version of the 20-question genie Akinator, I was curious how it was able to find the correct answer in such few questions. This is just one aspect that makes Akinator such an impressive AI.",
		linkedinUrl: "https://www.linkedin.com/pulse/how-does-akinator-ai-select-good-questions-question-through-cadenas-x6pje%3FtrackingId=VvKCgGAVRBKkPfBb7YfInw%253D%253D/?trackingId=VvKCgGAVRBKkPfBb7YfInw%3D%3D",
		keywords: [
			"Artificial Intelligence",
			"Akinator",
			"Intelligent Question Selection",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 January 2024",
		title: "This Common Medical School Advice is Wrong; Computer Science Says So",
		description:
			"New Medical School students are commonly taught studying is like eating a stack of pancakes. But, this is wrong. In this article, I set the record straight by giving time management advice from the perspective of Computer Science.",
		linkedinUrl: "https://www.linkedin.com/pulse/common-medical-school-advice-wrong-computer-science-says-cadenas-3bsze%3FtrackingId=L2MUlWTlRoGma77gajJAuw%253D%253D/?trackingId=L2MUlWTlRoGma77gajJAuw%3D%3D",
		keywords: [
			"Medical School",
			"Data Structures and Algorithms",
			"Computer Science"
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		)
	};
} 

const myArticles = [article_1, article_2];

export default myArticles;
