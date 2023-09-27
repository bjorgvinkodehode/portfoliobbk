import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './about.css';

function About() {
  return (
        <section className="about">
          <p className="aboutText">
          Before becoming a front-end developer, I worked as a system administrator/support specialist for 8 years. 
          <br />
          <br />
          During that time, I gained valuable experience in managing servers, networks, databases, security, project & ticket management, backups, and troubleshooting various technical issues.
          <br />
          <br />
          I also learned how to communicate effectively with clients and users, 
          providing them with excellent customer service and support.
          <br />
          <br />
          I love making and creating things that are functional and beautiful.
          I&apos;m resourceful and punctual, always delivering high-quality work on time. 
          I&apos;m also thoughtful and helpful,
           always willing to collaborate and share my skills and knowledge.
          <br />
          <br />
          My primary focus and interest lie in working with JavaScript, HTML, CSS, React, and TypeScript, 
          where I can bring my unique blend of skills to create effective and user-friendly applications.
          </p>
          <div className='aboutmelinks'>
          <p className='linkto'>Link to CV</p>
          <a href="https://docs.google.com/document/d/17RGGkvyBaGdUt7equ8gVh_pRMPhnUbS8fkk2VYMlkQg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} className= "social-icon" /></a>

          <p className='linkto'>Link to GitHub</p>
          <a href="https://github.com/bjorgvinkodehode" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" /></a>
            </div>
                    
                    
                    
                    
        </section>
          
  );
}

export default About;

