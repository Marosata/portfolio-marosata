import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/i18n";
import LanguageToggle from "./LanguageToggle";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { language } = useLanguage();
	const t = translations[language];

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
								}
							>
								<Link to="/">{t.nav.home}</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">{t.nav.about}</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">{t.nav.projects}</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">{t.nav.skills}</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">{t.nav.contact}</Link>
							</li>
						</ul>
						<div className="nav-language">
							<LanguageToggle />
						</div>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
