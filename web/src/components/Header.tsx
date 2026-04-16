export function Header() {
  return (
    <header id="toTop">
      <nav>
        <div className="logo">
          <img src="/images/lslogo.png" alt="Leandra Silver logo" />
        </div>
        <ul className="mainNav flexParent">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <svg viewBox="0 0 200 85" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="text1">
            <text textAnchor="start" x="10" y="55" className="text">
              Leandra
            </text>
          </clipPath>
          <clipPath id="text2">
            <text textAnchor="start" x="115" y="55" className="text">
              Silver
            </text>
          </clipPath>
        </defs>

        <text textAnchor="start" x="10" y="55" className="text text-stroke" clipPath="url(#text1)">
          Leandra
        </text>
        <text textAnchor="start" x="115" y="55" className="text text-stroke" clipPath="url(#text2)">
          Silver
        </text>
        <text textAnchor="start" x="10" y="55" className="text text-stroke text-stroke-2" clipPath="url(#text1)">
          Leandra
        </text>
        <text textAnchor="start" x="115" y="55" className="text text-stroke text-stroke-3" clipPath="url(#text2)">
          Silver
        </text>
      </svg>

      <h1>Leandra Silver</h1>
      <h2>Software Engineer</h2>
    </header>
  )
}
