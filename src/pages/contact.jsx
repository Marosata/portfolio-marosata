import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
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
						Entrons en contact : Comment me joindre
						</div>

						<div className="subtitle contact-subtitle">
							Merci pour votre intérêt à prendre contact avec moi. 
							Que vous soyez recruteur ou entreprise à la recherche de solutions innovantes, 
							je serai ravi d'échanger avec vous ! 
							Vous pouvez me contacter directement par email à{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							, et je m'engage à répondre sous 24 heures. 
							Vous pouvez également utiliser le formulaire de contact sur mon site pour entrer en contact, 
							et je vous répondrai dès que possible. 
							Si vous préférez me contacter via les réseaux sociaux, vous pouvez me trouver sur{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Je publie régulièrement des mises à jour et j'échange avec mes abonnés. N'hésitez pas à me contacter, je serai ravi de collaborer avec vous et de donner vie à vos idées.
						</div>

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
