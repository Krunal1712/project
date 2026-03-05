import "./App.css";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import profile from "/src/assets/P1.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools
} from "react-icons/fa";


function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="main">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">Krunal.dev</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="hero-text">

            <h1>
              I build{" "}
              <span>
                <ReactTyped
                  strings={[
                    "scalable systems.",
                    "clean backend APIs.",
                    "real-world solutions.",
                    "production-ready apps."
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
              </span>
            </h1>

            <p>
              Full Stack Developer focused on clean architecture,
              performance optimization and real-world solutions.
            </p>

            <div className="buttons">
              <button className="primary">View Work</button>
              <button className="secondary">Download Resume</button>
            </div>

          </div>

          <div className="hero-image">
            <img src={profile} alt="Developer" />
          </div>

        </div>

      </section>

      {/* STATS */}
      <motion.section
        className="stats"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="stat">
          <h2><CountUp end={10} duration={3} />+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h2><CountUp end={3} duration={3} />+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat">
          <h2><CountUp end={15} duration={3} />+</h2>
          <p>Technologies Used</p>
        </div>

      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>Featured Work</h2>

        <div className="project-grid">

          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>Smart Traffic System</h3>

            <p>
              IoT-based traffic optimization system using Python,
              OpenCV and real-time image processing.
            </p>
          </motion.div>

          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>Online Library Platform</h3>

            <p>
              Full-stack web application with authentication,
              Node.js backend and scalable architecture.
            </p>
          </motion.div>

        </div>

      </motion.section>

      {/* SKILLS */}
      <section id="skills" className="tech-section">

        <h2 className="tech-title">Tech Infrastructure</h2>

        <p className="tech-subtitle">
          A specialized stack focused on performance, scalability,
          and solving real-world challenges.
        </p>

        <div className="tech-grid">

          <div className="tech-card">
            <div className="tech-header">
              <div className="tech-icon"><FaCode /></div>
              <h3>Frontend</h3>
            </div>

            <div className="tech-tags">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-header">
              <div className="tech-icon"><FaServer /></div>
              <h3>Backend</h3>
            </div>

            <div className="tech-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST API</span>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-header">
              <div className="tech-icon"><FaDatabase /></div>
              <h3>Database</h3>
            </div>

            <div className="tech-tags">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-header">
              <div className="tech-icon"><FaTools /></div>
              <h3>Tools</h3>
            </div>

            <div className="tech-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
            </div>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="primary">
            Send Message
          </button>

        </form>

      </motion.section>

      {/* FOOTER */}
      <footer className="footer">

        <p>© 2026 Krunal Prajapati</p>

        <div className="footer-social">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;