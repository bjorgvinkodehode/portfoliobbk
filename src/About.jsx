import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './about.css';
function About() {
  return (
        <section className="about">
          <p className="aboutText">
            Before becoming a front-end developer, I worked as a system
            administrator/support specialist for 8 years.
          </p>
          <p className="aboutText">
            During that time, I gained valuable experience in managing servers,
            networks, databases, security, project & ticket management, backups,
            and troubleshooting various technical issues.
          </p>
          <p className="aboutText">
            I also learned how to communicate effectively with clients and users,
            providing them with excellent customer service and support.
          </p>
          <p className="aboutText">
            I love making and creating things that are functional and beautiful.
            I&apos;m resourceful and punctual, always delivering high-quality work on
            time. I&apos;m also thoughtful and helpful, always willing to collaborate
            and share my skills and knowledge.
          </p>
          
          <a href="https://github.com/bjorgvinkodehode" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" /></a>
                    
        </section>
          
  );
}

export default About;

