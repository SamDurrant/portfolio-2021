import './App.css'
import content from './assets/text-content'
import TextLink from './components/TextLink/TextLink'
import ProjectCard from './components/ProjectCard/ProjectCard'
import IconLink from './components/IconLink/IconLink'

function App() {
  return (
    <div className="App">
      <div className="grid">
        <nav className="links nav-links">
          {content.navLinks.map((link) => (
            <TextLink
              key={link.link}
              link={link.link}
              linkAriaLabel={link.linkAriaLabel}
              text={link.text}
            />
          ))}
        </nav>
        <h1 className="header-name margin-sm">SAM DURRANT</h1>
        <p className="header-blurb">
          I love learning and creating. Being a web developer means I get to do
          the things I love.
        </p>

        <h2 className="title about-title margin-med" id="about">
          About
        </h2>
        <section className="about-blurb">
          {content.aboutBlurb.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        <h2 className="title about-tech-title margin-sm">Tech and Tools</h2>
        <section className="about-tech">
          <ul>
            {content.aboutTech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>

        <h2 className="title projects-title margin-med" id="projects">
          Projects
        </h2>
        <section className="projects-blurb">
          {content.projectBlurb.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        <section className="col-8-8 project-container margin-sm">
          {content.projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              tech={project.tech}
              description={project.description}
              links={project.links}
            />
          ))}
        </section>

        <h4 className="cta-blurb margin-sm" id="contact">
          Let's get together, make some fun stuff and have a little fun while
          we're at it.
        </h4>
        <div className="links social-links">
          {content.socialLinks.map((link) => (
            <IconLink
              key={link.link}
              link={link.link}
              linkAriaLabel={link.linkAriaLabel}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
