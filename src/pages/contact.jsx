import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ContactForm from "../components/contact/ContactForm";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/i18n";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	const { language } = useLanguage();
	const t = translations[language];
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${t.nav.contact} | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							{t.contact.title}
						</div>

						<div className="subtitle contact-subtitle">
							{t.contact.subtitle}{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							{" "}{t.contact.responseTime}
						</div>
					</div>

					{/* Nouveau formulaire de contact */}
					<ContactForm />

					<div className="contact-additional-info">
						<p className="social-contact-text">
							{t.contact.socialText}
						</p>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
