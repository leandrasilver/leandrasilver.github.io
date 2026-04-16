import { socialLinks } from '../data/siteData'

export function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footerItem footer2Item">
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
            <a href={socialLinks.medium} aria-label="Leandra Silver on Medium">
              <i className="fa fa-3x fa-medium" aria-hidden="true"></i>
            </a>
            <a href={socialLinks.email} aria-label="Email Leandra Silver">
              <i className="fa fa-3x fa-envelope" aria-hidden="true"></i>
            </a>
            <a href={socialLinks.github} aria-label="Leandra Silver on GitHub">
              <i className="fa fa-3x fa-github" aria-hidden="true"></i>
            </a>
            <a href={socialLinks.codepen} aria-label="Leandra Silver on CodePen">
              <i className="fa fa-3x fa-codepen" aria-hidden="true"></i>
            </a>
          </div>
          <div className="flexParent">
            <p>&copy; 2026 Leandra Silver, all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
