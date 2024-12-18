import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import educations from "../data/educations.js"; // Importation des informations sur les éducations

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	const splitDescription = (description) => {
		const words = description.split(" ");
		const chunkSize = 10; // Nombre de mots avant un saut de ligne
		const chunks = [];

		for (let i = 0; i < words.length; i += chunkSize) {
			chunks.push(words.slice(i, i + chunkSize).join(" "));
		}

		return chunks.map((chunk, index) => (
			<React.Fragment key={index}>
				{chunk}
				<br /> {/* Ajoute un saut de ligne */}
			</React.Fragment>
		));
	};

	const renderEducations = () => {
		return educations.map((education, index) => (
			<div key={index} className="education-card">
				<img
					src={education.image}
					alt={education.degree}
					className="education-image"
				/>
				<h3 className="education-degree">{education.degree}</h3>
				<p className="education-years">{education.years} - {education.institution}</p>
				<p className="education-field">{education.field}</p>
				<p className="education-description">{splitDescription(education.description)}</p>
			</div>
		));
	};


	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="/fano2.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-educations">
							<h2>Parcours Académiques</h2>
							<div className="education-carousel">
								{renderEducations()}
							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
