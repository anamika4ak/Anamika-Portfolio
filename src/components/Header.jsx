//
function Navbar() {
  return (
    <header className="navbar-mk">
      <nav className="navigation container">
        <div className="nav-brand">
          <a href="/">Anamika Kumari</a>
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link link-active" href="/">
              <b>Home</b>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/anamika4ak?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <b>SourceCode</b>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://anamika-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <b>My Website</b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
