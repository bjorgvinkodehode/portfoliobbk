import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithub,
  faFigma,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
function Skills() {
  return (
    <footer className='fontawsome'>
      <FontAwesomeIcon icon={faHtml5} className="icon" />
      <FontAwesomeIcon icon={faCss3Alt} className="icon" />
      <FontAwesomeIcon icon={faJsSquare} className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
      <a href="https://github.com/bjorgvinkodehode" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/></a>
      <FontAwesomeIcon icon={faFigma} className="icon" />
      <FontAwesomeIcon icon={faCodeBranch} className="icon" /> 
      <FontAwesomeIcon icon={faWindows} className="icon" />
    </footer>
  );
}

export default Skills;
