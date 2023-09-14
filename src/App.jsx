/* import  { useEffect } from 'react'; */
import './App.css';
import './Header.css';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import { useEffect } from 'react';

function Header() {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case '/about':
      title = 'About Me';
      break;
    case '/projects':
      title = 'Projects';
      break;
    case '/contact':
      title = 'Contact';
      break;
    default:
      title = 'Welcome';
      break;
  }

  return (
    <header className="header-grid">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h1 className="Welcome">{title}</h1>
    </header>
  );
}

function App() {
  useEffect(() => {
    const setAppHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setAppHeight();
    window.addEventListener('resize', setAppHeight);

    return () => window.removeEventListener('resize', setAppHeight);
  }, []); 

  return (
    <Router>
      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Skills />
      </div>
    </Router>
  );
}

export default App;
