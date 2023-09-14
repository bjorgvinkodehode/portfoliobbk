import './Projects.css';
import { useState, useEffect } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const MultiPageComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    
    useEffect(() => {
        const handleResize = () => {
            const cardWidth = 340; 
            const gap = 8;
            const padding = 35.2; 
            const gridWidth = document.querySelector('.project-grid')?.offsetWidth - (2 * padding);
            const cardsPerRow = Math.floor((gridWidth + gap) / (cardWidth + gap));
            
            setItemsPerPage(Math.max(1, cardsPerRow));
          };
    
     
        window.addEventListener('resize', handleResize);
        handleResize();
    
      
        return () => {
            window.removeEventListener('resize', handleResize);
      };
    }, []);

    const projects = [
        {
            title: "Parallax",
            link: "https://bjorgvinkodehode.github.io/Parallax/",
            imageUrl: "assets/Parallax.jpg",
            description: "This was the first website we created",
            githubLink: "https://github.com/bjorgvinkodehode/Parallax"
        },
        {
            title: "Pluto",
            link: "https://bjorgvinkodehode.github.io/Pluto/",
            imageUrl: "assets/pluto.jpg",
            description: "First bigger project, and i was really happy when i delivered this",
            githubLink: "https://github.com/bjorgvinkodehode/Pluto"
        },
        {
            title: "Neptune",
            link: "https://bjorgvinkodehode.github.io/Neptune/",
            imageUrl: "assets/Neptune.jpg",
            description: "Also the first bigger project, i could not decide what to do so i created two, this one is broken by design",
            githubLink: "https://github.com/bjorgvinkodehode/Neptune"
        },
        {
            title:"Life",
            link: "https://bjorgvinkodehode.github.io/GameOfLife/",
            imageUrl: "assets/GameOfLife.jpg",
            description: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.",
            githubLink: "https://github.com/bjorgvinkodehode/GameOfLife"
        },
        {
            title: "Calculator",
            link: "https://bjorgvinkodehode.github.io/Calculator2/",
            imageUrl: "assets/Calculator.jpg",
            description: "The summer project was to create this calculator. ",
            githubLink: "https://github.com/bjorgvinkodehode/Calculator2"
        },
        {
            title: "What To Watch",
            link: "https://bjorgvinkodehode.github.io/What-to-watch/",
            imageUrl: "assets/Whattowatch.jpg",
            description: "This site generates a random movie based on a genere using an API",
            githubLink: "https://github.com/bjorgvinkodehode/What-to-watch"
        },

    ];

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const currentProjects = projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="page-container">
            <div className="project-grid">
                {currentProjects.map((project, index) => (
                    <div className="card" key={index}>
                        <h2 className="card-title">{project.title}</h2>
                        <a target="_blank" rel="noreferrer" href={project.link} className="card-link">
                            <img src={project.imageUrl} alt={`Project ${index + 1} Image`} className="card-image" />
                        </a>
                        <p className="card-description">
                            {project.description}
                            <a target="_blank" rel="noreferrer" href={project.githubLink} className="card-description-link"> GitHub</a>
                        </p>
                    </div>
                ))}
            </div>
    
          
            <div className="page-switcher">
                <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className={currentPage === 1 ? "disabled" : ""}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className={currentPage === totalPages ? "disabled" : ""}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
export default MultiPageComponent;

