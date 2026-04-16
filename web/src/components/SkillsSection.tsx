import { skillCategories } from '../data/siteData'

export function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="wrapper">
        <div className="sectionTitle">
          <h3>
            <span>core</span>
          </h3>
          <h2>Skills</h2>
        </div>
        <div className="skillGroups">
          {skillCategories.map((category) => (
            <div className="skillGroup" key={category.title}>
              <h3 className="groupTitle">{category.title}</h3>
              <div className="skillContent flexParent">
                {category.items.map((item) => (
                  <div className="skillItem" key={item.name}>
                    {item.icon.type === 'img' ? <img src={item.icon.value} alt={item.icon.alt} /> : null}
                    {item.icon.type === 'icon' ? <i className={item.icon.value} aria-hidden="true"></i> : null}
                    {item.icon.type === 'text' ? (
                      <span className="textIcon" aria-hidden="true">
                        {item.icon.value}
                      </span>
                    ) : null}
                    <h4>{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
