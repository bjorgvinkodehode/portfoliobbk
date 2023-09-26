import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './about.css';
function About() {
  return (
        <section className="about">
          <p className="aboutText">
          I am a highly motivated and resourceful front-end developer with a background spanning 8 years in
           system administration and technical support. This experience has provided me with a deep understanding
            of servers, networks, databases, and security, making me uniquely equipped to develop front-end solutions
             that are not only functional but also robust and secure.

          </p>
          <p className="aboutText">
          I excel in HTML, CSS, JavaScript, React, and TypeScript, and I&apos;m always keen to learn and adopt new technologies.
           My extensive experience in project and ticket management, combined with my commitment to delivering high-quality
            work punctually, ensures that I can meet and exceed project goals while maintaining best practices.

          </p>
          <p className="aboutText">
          But what truly sets me apart is my passion for creating beautiful, functional user experiences 
          and my exceptional communication skills gained from years of client interaction in a support role.
           I love collaborating with team members and clients alike, and I&apos;m always willing to share
            my skills and expertise.
          </p>
          <p className="aboutText">
          My primary focus and interest lie in working with JavaScript, HTML, CSS, React, and TypeScript, 
          where I can bring my unique blend of skills to create effective and user-friendly applications.
          </p>

          <a href="https://github.com/bjorgvinkodehode" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" /></a>
                    
        </section>
          
  );
}

export default About;

