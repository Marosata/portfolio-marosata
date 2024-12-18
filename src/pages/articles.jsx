import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import skills from "../data/skillsData";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Fonction pour afficher les étoiles
	const renderStars = (count) => {
		return Array.from({ length: 5 }, (_, i) => (
			<span key={i} style={{ color: i < count ? "#ffc107" : "#e4e5e9" }}>
				★
			</span>
		));
	};

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">{INFO.articles.title}</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div className="skills-section">
							{skills.map((skillCategory, categoryIndex) => (
								<div key={categoryIndex} className="skill-category">
									<h2>{skillCategory.category}</h2>
									<div className="skills-carousel">
										{skillCategory.items.map((skill, index) => (
											<div key={index} className="skill-item">
												<img
													src={skill.image}
													alt={skill.name}
													className="skill-image"
												/>
												<h3>{skill.name}</h3>
												<p>{skill.description}</p>
												<strong>Avantage :</strong> {skill.advantage}
												<br />
												<strong>Inconvénient :</strong> {skill.disadvantage}
												<br />
												<div className="skill-stars">{renderStars(skill.experience)}</div>
											</div>
										))}
									</div>
								</div>
							))}
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

export default Articles;
