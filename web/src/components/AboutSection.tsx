import { socialLinks } from '../data/siteData'

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="wrapper flexParent">
        <div className="aboutBox flexParent">
          <div className="aboutImage">
            <img src="/images/headshotSq2.jpg" alt="Leandra Silver headshot" title="Credit: Pam Lau" />
          </div>

          <div className="aboutContent">
            <div className="sectionTitle">
              <h3>
                <span>about</span>
              </h3>
              <h2>
                <strong>Leandra</strong> Silver
              </h2>
            </div>
            <p>Hey, I'm Leandra, a full-stack developer with a passion for accessibility and building robust solutions in finance.</p>

            <p>
              In my spare time I love to study nutrition, run, and explore creative outlets through pottery and drawings. I also
              work on projects that make it easier for animal rescues and adopters in Canada to connect.
            </p>

            <div className="social flexParent">
              <a href={socialLinks.twitter} aria-label="Leandra Silver on Twitter">
                <i className="fa fa-3x fa-twitter" aria-hidden="true"></i>
              </a>
              <a href={socialLinks.instagram} aria-label="Leandra Silver on Instagram">
                <i className="fa fa-3x fa-instagram" aria-hidden="true"></i>
              </a>
              <a href={socialLinks.linkedIn} aria-label="Leandra Silver on LinkedIn">
                <i className="fa fa-3x fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href={socialLinks.email} aria-label="Email Leandra Silver">
                <i className="fa fa-3x fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
