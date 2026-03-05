import "./App.css";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import profile from "./assets/P1.jpg";

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
          <a href="#contact">Contact</a>
          <a href="#Skills">Skills</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
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
            <img src="./assets\p1.jpg" alt="Developer"/>
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

        <div className="project-card">
          <h3>Smart Traffic System</h3>
          <p>
            IoT-based traffic optimization system using Python,
            OpenCV and real-time image processing.
          </p>
        </div>

        <div className="project-card">
          <h3>Online Library Platform</h3>
          <p>
            Full-stack web app with JWT authentication and scalable Node.js backend.
          </p>
        </div>
      </motion.section>

      {/* SKILLS */}
      
      
       <section className="Skill">
        
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
      </section>

      {/* TECH INFRASTRUCTURE */}
      <motion.section
        id="Skills"
        className="tech Infrastructure"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      ></motion.section>
      
      <section id="skills" className="tech-section container">

        <h2 className="tech-title">Tech Infrastructure</h2>
        <p className="tech-subtitle">
          A specialized stack focused on performance, scalability, and solving real-world challenges.
        </p>

        <div className="tech-grid">

          {/* Frontend */}
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="tech-header">
              <div className="tech-icon"><FaCode /></div>
              <h3>Frontend</h3>
            </div>

            <div className="tech-tags">
              {["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"].map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="tech-header">
              <div className="tech-icon"><FaServer /></div>
              <h3>Backend</h3>
            </div>

            <div className="tech-tags">
              {["Node.js", "Express", "REST APIs", "JWT", "Authentication"].map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="tech-header">
              <div className="tech-icon"><FaDatabase /></div>
              <h3>Databases</h3>
            </div>

            <div className="tech-tags">
              {["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"].map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="tech-header">
              <div className="tech-icon"><FaTools /></div>
              <h3>Tools & Systems</h3>
            </div>

            <div className="tech-tags">
              {["Git & GitHub", "Docker", "Vercel", "Linux", "Postman"].map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>

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
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="primary">Send Message</button>
        </form>
      </motion.section>

    </div>
  );
}

export default App;