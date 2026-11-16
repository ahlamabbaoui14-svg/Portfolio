
import React from "react";
import "./App.css";

import galerieImage from "./images/galerie-maroc.png";
import stagiairesImage from "./images/gestion-stagiaires.png";
import bibliothequeImage from "./images/gestion-bibliotheque.png";

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const projects = [
    {
      title: "Galerie du Maroc",
      category: "FRONTEND",
      description:
        "Une galerie interactive présentant plusieurs villes marocaines avec des effets hover et une interface responsive.",
      image: galerieImage,
      technologies: ["React.js", "CSS", "JavaScript"],
    },
    {
      title: "Gestion des stagiaires",
      category: "APPLICATION WEB",
      description:
        "Une application permettant de gérer les stagiaires, leurs informations et la validation des propositions.",
      image: stagiairesImage,
      technologies: ["React.js", "Context API", "CSS"],
    },
    {
      title: "Gestion de bibliothèque",
      category: "BASE DE DONNÉES",
      description:
        "Un projet de gestion permettant d'organiser les livres, les adhérents et les emprunts.",
      image: bibliothequeImage,
      technologies: ["PHP", "MySQL", "SQL"],
    },
  ];

  const skills = [
    { icon: "🌐", name: "HTML5", description: "Structure des pages web" },
    { icon: "🎨", name: "CSS3", description: "Design et responsive design" },
    { icon: "⚡", name: "JavaScript", description: "Interactions web" },
    { icon: "⚛️", name: "React.js", description: "Interfaces interactives" },
    { icon: "🐘", name: "PHP", description: "Développement serveur" },
    { icon: "🗄️", name: "MySQL", description: "Gestion des bases de données" },
    { icon: "🔧", name: "Git & GitHub", description: "Gestion du code" },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          A<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Me contacter ↗
        </a>
      </nav>

      {/* HERO */}
      <main className="hero" id="home">
        <div className="hero-content">
          <span className="welcome">
            ✦ BIENVENUE SUR MON PORTFOLIO
          </span>

          <h1>
            Bonjour, je suis une
            <span> Développeuse Web</span>
          </h1>

          <p className="hero-description">
            Je suis étudiante en Développement Digital,
            passionnée par la programmation et la création
            d'expériences digitales modernes.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Voir mes projets →
            </a>

            <a href="#contact" className="secondary-button">
              Me contacter
            </a>
          </div>

          <div className="hero-footer">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="file-name">developer.jsx</span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span> developer = {"{"}
              </p>
              <p className="indent">
                name: <span className="green-text">"Web Developer"</span>,
              </p>
              <p className="indent">
                passion: <span className="green-text">"Coding"</span>,
              </p>
              <p className="indent">skills: [</p>
              <p className="indent more">"HTML", "CSS",</p>
              <p className="indent more">"JavaScript", "React"</p>
              <p className="indent">]</p>
              <p>{"};"}</p>
              <p className="code-comment">
                // Let's build something great!
              </p>
            </div>
          </div>

          <div className="floating-icon">{"</>"}</div>
        </div>
      </main>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-heading">
          <span className="welcome">✦ DÉCOUVREZ MON PARCOURS</span>
          <h2>
            À propos de <span>moi</span>
          </h2>
          <p>Quelques mots sur mon parcours et mes ambitions.</p>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h3>Passionnée par le monde du digital</h3>

            <p>
              Je suis étudiante en Développement Digital,
              passionnée par la programmation et la création
              de sites web modernes et interactifs.
            </p>

            <p>
              J'aime apprendre de nouvelles technologies,
              relever des défis et transformer mes idées
              en projets concrets.
            </p>

            <p>
              Mon objectif est de développer mes compétences
              et de construire une carrière dans le développement web.
            </p>

            <a href="#contact" className="primary-button">
              Collaborons ensemble →
            </a>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="about-icon">🎓</span>
              <h3>Formation</h3>
              <p>Développement Digital</p>
            </div>

            <div className="about-card">
              <span className="about-icon">💻</span>
              <h3>Domaine</h3>
              <p>Développement Web</p>
            </div>

            <div className="about-card">
              <span className="about-icon">🚀</span>
              <h3>Objectif</h3>
              <p>Évoluer dans le digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <div className="section-heading">
          <span className="welcome">✦ MES TECHNOLOGIES</span>
          <h2>
            Mes <span>Compétences</span>
          </h2>
          <p>Les technologies que j'utilise et que j'apprends.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <span className="skill-level">En apprentissage</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="section-heading">
          <span className="welcome">✦ MES RÉALISATIONS</span>
          <h2>
            Mes <span>Projets</span>
          </h2>
          <p>Découvrez quelques projets réalisés durant mon parcours.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => setSelectedImage(project)}
                />
              </div>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="project-link"
                  onClick={() => setSelectedImage(project)}
                >
                  Voir le projet ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-heading">
          <span className="welcome">✦ RESTONS EN CONTACT</span>
          <h2>
            Me <span>Contacter</span>
          </h2>
          <p>
            Vous avez une question ou une opportunité ?
            N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>Contactez-moi par email.</p>

            <p>ahlamabbaoui14@gmail.com</p>

            <a href="mailto:ahlamabbaoui14@gmail.com">
              Envoyer un email ↗
            </a>
          </div>

          <div className="contact-card">
            <span>💼</span>
            <h3>LinkedIn</h3>
            <p>Retrouvez mon profil professionnel.</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Mon LinkedIn ↗
            </a>
          </div>

          <div className="contact-card">
            <span>💻</span>
            <h3>GitHub</h3>
            <p>Découvrez mes projets et mon code.</p>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Mon GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Mon Portfolio. Tous droits réservés.</p>
      </footer>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="close-image"
            aria-label="Fermer l'image"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

export default App;
