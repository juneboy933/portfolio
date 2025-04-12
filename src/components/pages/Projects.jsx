import './Project.css'

const projects = [
    {
        name: "Image Search App",
        description: "This app enables users to search any image and view results of the searched image as well the image descriptions. I used HTML5, CSS3 and JavaScript to build this app.",
        github: "https://github.com/juneboy933/Image-search-app"
    },
    {
        name: "Portfolio",
        description: "This is my own Portfolio, built with React and its technologies.",
        github: "https://github.com/juneboy933/portfolio"
    },
    {
        name: "Todo App",
        description: "Simple, yet a project that really cements the basics of React. This App enables users add or delete their task/ items as well as toggle through dark and light mode as they interact with the App. It also, uses local storage idealogy to save and store data.",
        github: "https://github.com/juneboy933/Advanced-ToDo-List",
        demo: "https://admirable-cuchufli-00437c.netlify.app/"
    },
];

const Projects = () => {
  return (
    <section className='projects fade-in'>
        <h2>My Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                        <a href={project.github} target='_blank' rel='noopener noreferrer'>GitHub</a>
                        <a href={project.demo} target='_blank' rel='noopener noreferrer'>Live Demo</a>
                    </div>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Projects
