import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Les projets que j'ai réalisés pour contribuer à l'innovation.
						</div>

						<div className="subtitle projects-subtitle">
							Au cours de ma carrière, j'ai eu la chance de travailler sur une variété de projets passionnants, 
							chacun me permettant d'explorer de nouvelles technologies et d'affiner mes compétences. 
							Chaque projet a été une occasion d'apprendre, de collaborer et de repousser les limites de ce qui est possible. 
							Je suis fier des progrès accomplis et des solutions que j'ai pu apporter. 
							Vous trouverez ci-dessous certains des projets sur lesquels j'ai travaillé, et je suis toujours ouvert aux suggestions et aux collaborations pour aller encore plus loin.
						</div>


						<div className="projects-list">
							<AllProjects />
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

export default Projects;
