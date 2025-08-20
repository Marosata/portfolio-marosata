import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/i18n";

import "./styles/footer.css";

const Footer = () => {
	const { language } = useLanguage();
	const t = translations[language];
	
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{t.nav.home}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{t.nav.about}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{t.nav.projects}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">{t.nav.skills}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{t.nav.contact}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						{t.footer.madeWith} Fanomezantsoa Marosata - © 2024 {t.footer.allRightsReserved}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
