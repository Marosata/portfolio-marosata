import React from "react";

import Project from "./project";
import { useTranslatedData } from "../../hooks/useTranslatedData";

import "./styles/allProjects.css";

const AllProjects = () => {
	const { projects } = useTranslatedData();
	
	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
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
