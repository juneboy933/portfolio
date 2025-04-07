import './About.css'
const About = () => {
  return (
    <section className='about fade-in'>
      <div className="about-container">
        <h2>About Me</h2>
        <p>
            I'm a self-taught web developer passionate about building responsive, user-friendly web apps.
            I specialize in frontend development and I enjoy turning complex problems into simple, beautiful solutions using React and modern web technologies.
        </p>
        <h3>Skills</h3>
        <ul className='skills-list'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
        </ul>

        <a href="/resume.pdf" className='download-btn'>Download Resume</a>
      </div>
    </section>
  )
}

export default About
