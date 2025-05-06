import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Kosuru Gowtham Babu</h1>
        <p>Python Developer | Web Developer | Full Stack Developer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              I am a passionate and dedicated Python Developer with a strong foundation in web development technologies like HTML, CSS, JavaScript, and React.js. I recently completed my B.Tech in Electronics and Communication Engineering and I'm eager to contribute to innovative projects in the tech industry.
            </p>
          </div>
          <div className="about-image">
            <img src="/my-job-pic.jpg" alt="Kosuru Gowtham Babu" className="profile-img" />
          </div>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech in Electronics and Communication Engineering</strong> – Narayana Engineering College, Gudur (2019–2023) – 6.56 CGPA</li>
          <li><strong>Intermediate (MPC)</strong> – Narayana Junior College, Gudur (2017–2019) – 8.86 CGPA</li>
          <li><strong>SSC</strong> – Sri GVS Sankaraiah Memorial English Medium School, Gudur (2017) – 9.2 CGPA</li>
        </ul>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Languages: Python, C++</li>
          <li>Web Technologies: HTML, CSS, JavaScript, React.js</li>
          <li>Tools: MS Office, Git, Visual Studio Code</li>
          <li>Database: MYSQL</li>
          <li>Platforms: Windows</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Web Developer Intern – WAYEVA Pvt. Ltd. (Nov 2024 – Apr 2025)</h3>
          <ul>
            <li>Created responsive web pages using HTML, CSS, and JavaScript</li>
            <li>Fixed bugs and enhanced website performance</li>
            <li>Collaborated with team members using agile methodologies</li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>SAR Ship Detection Using Radar</h3>
          <p>
            Built a system using Synthetic Aperture Radar (SAR) to detect ships at sea using electromagnetic wave reflection. Used advanced methods like Feature Enhancement Pyramid (FEP) and Shallow Feature Reconstruction (SFR) to improve detection clarity.
          </p>
        </div>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Python Developer Certification - IBM</li>
          <li>Python Full Stack Developer – Besant Technology</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:gowthamkosuru2001@gmail.com">gowthamkosuru2001@gmail.com</a></p>
        <p>Phone: +91 7674932838</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/gowtham-babu-kosuru-8523a3306" target="_blank" rel="noreferrer">linkedin.com/in/gowtham-babu-kosuru</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Kosuru Gowtham Babu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

