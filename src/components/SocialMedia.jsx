//
function SocialMedia() {
  return (
    <section>
      <footer className="footer">
        <div className="footer-header">Social Networks :- </div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://twitter.com/anamika170304"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b style={{ color: "black" }}>Twitter</b>{" "}
            </a>
          </li>
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://github.com/anamika4ak"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b style={{ color: "black" }}>Github</b>{" "}
            </a>
          </li>
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="https://www.linkedin.com/in/anamika4ak"
              target="_blank"
              rel="noreferrer"
            >
              <b style={{ color: "black" }}>LinkedIn</b>
            </a>
          </li>
          <li className="list-item-inline-block">
            <a
              className="link link-mkp"
              href="mailto:anamika170304@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <b style={{ color: "black" }}>Gmail</b>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default SocialMedia;
