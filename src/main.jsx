import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  MapPin,
  Code2,
  Database,
  BrainCircuit,
  Globe2,
  Cloud,
  ShieldCheck,
  BookOpen,
  Send,
  FileText,
  TrendingUp,
} from "lucide-react";

import "./styles.css";


// =========================================================
// PROJECTS
// =========================================================

const projects = [
  {
    title: "Onboarding Wizard",
    type: "FULL STACK APPLICATION",

    desc: "A production-style onboarding platform with secure authentication, role-based access control, REST APIs, database migrations, caching and AI-powered services.",

    tech: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Groq AI",
    ],

    features: [
      "JWT Authentication",
      "RBAC",
      "REST APIs",
      "Redis Caching",
      "AI Integration",
    ],

    color: "blue",
    icon: ShieldCheck,
  },

  {
    title: "Fraud Detection System",
    type: "MACHINE LEARNING",

    desc: "A machine-learning project for detecting suspicious financial transactions through data preprocessing, feature engineering, class-imbalance handling and model benchmarking.",

    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Model Evaluation",
    ],

    features: [
      "Fraud Detection",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Benchmarking",
      "Performance Evaluation",
    ],

    color: "violet",
    icon: BrainCircuit,
  },

  {
    title: "TradeWise",
    type: "AI FINTECH PLATFORM",

    desc: "An AI-powered paper trading platform where users can practice stock trading with virtual money, track portfolios, analyze markets, follow financial news and learn through interactive modules.",

    tech: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "Python",
      "FastAPI",
      "AI",
    ],

    features: [
      "Paper Trading",
      "Portfolio Tracking",
      "Market Analytics",
      "AI Assistant",
      "Financial News",
      "Learning Modules",
    ],

    color: "green",
    icon: TrendingUp,
  },
];


// =========================================================
// CAPABILITIES
// =========================================================

const capabilities = [
  {
    icon: Code2,
    title: "Software Development",
    items: "Java • Python • JavaScript • C",
  },

  {
    icon: Globe2,
    title: "Web Development",
    items: "React • HTML • CSS • Tailwind CSS • REST APIs",
  },

  {
    icon: Database,
    title: "Databases & Data",
    items: "PostgreSQL • MySQL • Redis • JPA / Hibernate",
  },

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: "Docker • Git • GitHub • Flyway • API Integration",
  },

  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    items: "Groq API • LLaMA • Flask • ML workflows",
  },

  {
    icon: ShieldCheck,
    title: "Security & Architecture",
    items: "Spring Security • JWT • RBAC • Validation",
  },
];


// =========================================================
// REVEAL COMPONENT
// =========================================================

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "show" : ""} ${className}`}
    >
      {children}
    </div>
  );
}


// =========================================================
// APP
// =========================================================

function App() {
  const [menu, setMenu] = useState(false);

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Publication", "#publication"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="header">

        <div className="nav container">

          <a className="logo" href="#home">
            <span>K</span>arthik.
          </a>

          <nav className={menu ? "links open" : "links"}>

            {nav.map(([name, href]) => (
              <a
                href={href}
                key={href}
                onClick={() => setMenu(false)}
              >
                {name}
              </a>
            ))}

          </nav>

          <a
            className="nav-resume"
            href="/Karthik_G_BHAT_CV.pdf"
            download
          >
            <Download size={15} />
            Resume
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main>


        {/* ===================================================
            HERO
        =================================================== */}

        <section
          className="hero container"
          id="home"
        >

          <Reveal className="hero-content">

            <div className="eyebrow">
              <span />
              SOFTWARE DEVELOPER · MCA GRADUATE
            </div>


            <h1>
              Hi, I'm Karthik.
              <br />
              <span>
               I build software that solves real-world problems.
              </span>
            </h1>


            <p className="hero-lead">

              I’m a software developer interested in{" "}

              <b>
                full-stack development, artificial intelligence,
                machine learning and modern web technologies.
              </b>{" "}

              I enjoy turning ideas into practical,
              reliable products.

            </p>


            <div className="hero-buttons">

              <a
                className="primary-btn"
                href="#projects"
              >
                Explore Projects

                <ArrowRight size={17} />

              </a>


              <a
                className="secondary-btn"
                href="#contact"
              >
                Let's Connect
              </a>

            </div>


            <div className="socials">

              <a
                href="https://github.com/karthik748349/karthik748349"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/karthik-g-bhat-a52b76317/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>


              <a
                href="mailto:bhatkarthik93@gmail.com"
              >
                <Mail />
                Email
              </a>

            </div>

          </Reveal>


          {/* PROFILE CARD */}

          <Reveal className="hero-side">

            <div className="profile-panel">

              <div className="panel-top">

                <span>
                  PROFILE
                </span>

                <i>
                  ● AVAILABLE
                </i>

              </div>


              <div className="profile-initial">
                KG
              </div>


              <h3>
                Karthik G Bhat
              </h3>


              <p>
                Software Developer
              </p>


              <div className="profile-line">

                <MapPin size={14} />

                Mysuru, Karnataka

              </div>


              <div className="profile-tags">

                <span>
                  Full Stack
                </span>

                <span>
                  AI / ML
                </span>

                <span>
                  Web
                </span>

              </div>

            </div>

          </Reveal>

        </section>


        {/* ===================================================
            TRUST STRIP
        =================================================== */}

        <section className="trust-strip">

          <div className="container trust-inner">

            <span>JAVA</span>
            <b>•</b>

            <span>PYTHON</span>
            <b>•</b>

            <span>REACT</span>
            <b>•</b>

            <span>SPRING BOOT</span>
            <b>•</b>

            <span>AI / ML</span>
            <b>•</b>

            <span>DATABASES</span>
            <b>•</b>

            <span>DOCKER</span>

          </div>

        </section>


        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          className="section container"
          id="about"
        >

          <Reveal>

            <div className="section-kicker">
              01 — ABOUT
            </div>


            <div className="two-col">

              <h2>

                More than a
                <br />

                <em>
                  single stack.
                </em>

              </h2>


              <div className="about-copy">

                <p>
                  I’m an MCA graduate with hands-on experience
                  across software development, web applications,
                  backend systems, databases and AI integration.
                </p>


                <p>
                  My projects have given me practical exposure
                  to designing APIs, building responsive interfaces,
                  implementing authentication and security,
                  working with databases and integrating AI services.
                </p>


                <div className="facts">

                  <span>
                    <b>MCA</b>
                    Graduate
                  </span>


                  <span>
                    <b>Full Stack</b>
                    Development
                  </span>


                  <span>
                    <b>AI / ML</b>
                    Projects
                  </span>

                </div>

              </div>

            </div>

          </Reveal>

        </section>


        {/* ===================================================
            SKILLS
        =================================================== */}

        <section
          className="section skills"
          id="skills"
        >

          <div className="container">

            <Reveal>

              <div className="section-kicker">
                02 — EXPERTISE
              </div>


              <div className="section-title">

                <h2>
                  What I <em>work with.</em>
                </h2>


                <p>
                  A broad technical toolkit for building
                  complete applications.
                </p>

              </div>

            </Reveal>


            <div className="cap-grid">

              {capabilities.map(
                (capability, index) => {

                  const Icon = capability.icon;

                  return (
                    <Reveal
                      key={capability.title}
                      className={`d${index}`}
                    >

                      <article className="cap-card">

                        <div className="cap-icon">
                          <Icon />
                        </div>


                        <div>

                          <small>
                            0{index + 1}
                          </small>


                          <h3>
                            {capability.title}
                          </h3>


                          <p>
                            {capability.items}
                          </p>

                        </div>


                        <ArrowUpRight
                          className="cap-arrow"
                        />

                      </article>

                    </Reveal>
                  );

                }
              )}

            </div>

          </div>

        </section>


        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section
          className="section container"
          id="projects"
        >

          <Reveal>

            <div className="section-kicker">
              03 — SELECTED WORK
            </div>


            <div className="section-title">

              <h2>

                Projects that show
                <br />

                <em>
                  how I think.
                </em>

              </h2>


              <p>
                Practical projects across application
                development, machine learning and AI.
              </p>

            </div>

          </Reveal>


          <div className="project-list">

            {projects.map(
              (project, index) => {

                const Icon = project.icon;

                return (
                  <Reveal
                    key={project.title}
                    className={`project-row d${index}`}
                  >

                    <article
                      className={`project ${project.color}`}
                    >

                      {/* PROJECT NUMBER */}

                      <div className="project-number">
                        0{index + 1}
                      </div>


                      {/* PROJECT VISUAL */}

                      <div className="project-visual">

                        <Icon size={42} />

                        <div className="visual-ring" />

                      </div>


                      {/* PROJECT CONTENT */}

                      <div className="project-main">

                        <span className="project-type">
                          {project.type}
                        </span>


                        <h3>
                          {project.title}
                        </h3>


                        <p>
                          {project.desc}
                        </p>


                        {/* TECHNOLOGIES */}

                        <div className="tech">

                          {project.tech.map(
                            (technology) => (
                              <span
                                key={technology}
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>


                        {/* FEATURES */}

                        {project.features && (
                          <div className="project-features">

                            {project.features.map(
                              (feature) => (
                                <span
                                  key={feature}
                                >
                                  ✓ {feature}
                                </span>
                              )
                            )}

                          </div>
                        )}

                      </div>


                      {/* GITHUB */}

                      <a
                        className="project-arrow"
                        href="https://github.com/karthik748349/karthik748349"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ArrowUpRight />
                      </a>

                    </article>

                  </Reveal>
                );

              }
            )}

          </div>

        </section>


        {/* ===================================================
            PUBLICATION
        =================================================== */}

        <section
          className="publication"
          id="publication"
        >

          <div className="container">

            <Reveal>

              <div className="section-kicker">
                04 — PUBLICATION
              </div>


              <div className="paper">

                <div className="paper-icon">
                  <BookOpen />
                </div>


                <div className="paper-main">

                  <span>
                    RESEARCH PAPER · ACADEMIC WORK
                  </span>


                  <h2>

                    Enhancing Trust in Digital Payments:{" "}

                    <em>
                      Benchmarking Machine Learning
                      Models for Transactional Fraud Detection
                    </em>

                  </h2>


                  <p>
                    Research work focused on applying and
                    comparing machine-learning models for
                    transactional fraud detection, with attention
                    to preprocessing, class imbalance and
                    evaluation using accuracy, precision,
                    recall, F1-score and ROC-AUC.
                  </p>


                  <div className="paper-tags">

                    <span>
                      Machine Learning
                    </span>

                    <span>
                      Fraud Detection
                    </span>

                    <span>
                      Digital Payments
                    </span>

                  </div>

                </div>


                <a
  className="paper-link"
  href="https://iarjset.com/papers/enhancing-trust-in-digital-payments-benchmarking-machine-learning-models-for-transactional-fraud-detection/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FileText size={17} />
  <span>Paper</span>


                  

                  

                </a>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section
          className="section experience container"
          id="experience"
        >

          <Reveal>

            <div className="section-kicker">
              05 — EXPERIENCE
            </div>


            <div className="timeline">


              {/* CAMPUSPE */}

              <div className="timeline-item">

                <div className="timeline-label">
                  INTERNSHIP
                </div>


                <div>

                  <div className="role-head">

                    <h3>
                      Full Stack Developer
                    </h3>

                    <span>
                      CampusPe
                    </span>

                  </div>


                  <p>
                    Worked on a real-world application using
                    Java, Spring Boot, React, REST APIs,
                    Spring Security, JWT, PostgreSQL, Redis,
                    Docker and AI integration. Contributed to
                    backend services, frontend components,
                    authentication, RBAC and database workflows.
                  </p>

                </div>

              </div>


              {/* MCA */}

              <div className="timeline-item">

                <div className="timeline-label">
                  EDUCATION
                </div>


                <div>

                  <div className="role-head">

                    <h3>
                      Master of Computer Applications
                    </h3>

                    <span>
                      NIE College, Mysuru
                    </span>

                  </div>


                  <p>
                    Developed a strong foundation in software
                    engineering, application development,
                    databases, data structures, web technologies
                    and computer systems.
                  </p>

                </div>

              </div>


              {/* BCA */}

              <div className="timeline-item">

                <div className="timeline-label">
                  2021 — 2024
                </div>


                <div>

                  <div className="role-head">

                    <h3>
                      Bachelor of Computer Applications
                    </h3>

                    <span>
                      NIE First Grade College, Mysuru
                    </span>

                  </div>


                  <p>
                    Built practical programming and
                    software-development fundamentals through
                    academic coursework and projects.
                  </p>

                </div>

              </div>


            </div>

          </Reveal>

        </section>


        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          className="contact"
          id="contact"
        >

          <div className="container">

            <Reveal>

              <div className="contact-box">

                <div>

                  <div className="section-kicker light">
                    06 — CONTACT
                  </div>


                  <h2>

                    Open to new
                    <br />

                    <em>
                      opportunities.
                    </em>

                  </h2>


                  <p>
                    Looking for software development,
                    full-stack, web, AI/ML and related
                    entry-level opportunities.
                  </p>

                </div>


                <div className="contact-actions">

                  <a
                    href="mailto:bhatkarthik93@gmail.com"
                    className="primary-btn white"
                  >

                    <Send size={17} />

                    Get in touch

                  </a>


                  <a
                    href="/Karthik_G_BHAT_CV.pdf"
                    download
                    className="secondary-btn white-outline"
                  >

                    <Download size={17} />

                    Download CV

                  </a>

                </div>

              </div>

            </Reveal>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="container footer-inner">

          <span>
            © {new Date().getFullYear()} Karthik G Bhat
          </span>


          <span>
            Software Developer · Mysuru
          </span>


          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}


// =========================================================
// RENDER
// =========================================================

createRoot(
  document.getElementById("root")
).render(<App />);