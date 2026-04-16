import { projects } from '../data/siteData'

export function ProjectsSection() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrapper">
        <div className="sectionTitle">
          <h3>
            <span>selected</span>
          </h3>
          <h2>Projects</h2>
        </div>
        <div className="portfolioContainer">
          {projects.map((project, index) => (
            <div className={`portfolioItem${index % 2 ? ' portfolioItem2' : ''}`} key={project.title}>
              <div className={`portfolioContent ${index % 2 ? 'borderRight' : 'borderLeft'}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="projectNote projectNoteButtonLike">Details available on request</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
