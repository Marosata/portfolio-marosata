import React from "react";

import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logos={project.logos}   
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						date={project.date}   // Passer la date
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
