import "./App.css";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import profile from "/src/assets/P1.jpg";
import { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools
} from "react-icons/fa";


function App() {
  useEffect(() => {
  const scrollBar = document.querySelector(".scroll-bar");

  const handleScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled =
      (window.scrollY / height) * 100;

    scrollBar.style.width = scrolled + "%";
  };

  window.addEventListener("scroll", handleScroll);
}, []);

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
          <a href="#about">About</a>
          <a href="#education">Education</a>
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

          

        </div>

      </section>
      <div className="scroll-bar"></div>
    

    

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
{/* ABOUT */}
<section id="about" className="about-section">
  <div className="container about-grid">

    <div className="about-text">
      <h2>About Me</h2>
      <p>I recently completed a full stack Development course and i am currently in my third year of BSC CA & IT at sardar Patel University</p>
      <p>
        I'm a passionate <span>Full Stack Developer</span> focused on building
        scalable web applications and real-world software solutions.
      </p>

      <p>
        I specialize in modern technologies like React, Node.js, and databases
        to create high-performance applications with clean architecture.
      </p>

      <p>
        My goal is to build products that solve real problems and deliver
        great user experiences.
      </p>
    </div>

  <div className="hero-image">
            <img src={profile} alt="Developer" />
    </div>

  </div>
</section>
       {/* EDUCATION */}
<motion.section
  id="education"
  className="education container"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2>Education</h2>

  <div className="education-grid">

    <div className="education-card">
      <h3>Bachelor of Science (CA & IT)</h3>
      <p className="edu-college">Sardar Patel University</p>
      <p className="edu-year">2023 - Present</p>
      <p>
        Studied Computer Applications and Information Technology,
        focusing on programming, databases, and software development.
      </p>
    </div>

    <div className="education-card">
      <h3>Full Stack Development</h3>
      <p className="edu-college">Self Learning & Online Courses</p>
      <p className="edu-year">INTERNSHIP</p>
      <p>
        Learning modern web development technologies including
        React, Node.js, Express, and MongoDB.
      </p>
    </div>

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