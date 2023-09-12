//
function ProjectsLink() {
  return (
    <section className="section ow">
      <h1 className="projects-heading">
        <b> MY MAJOR PROJECTS : </b>
      </h1>

      <div className="container container-center-mk">
        <ol className="project-list">
          <br />
          <li>
            <a
              href="https://anamika-portfolio-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>
                <b>My Portfolio Website</b>
              </button>
            </a>{" "}
            <b>
              {" "}
              &nbsp; & &nbsp;{" "}
              <a
                href="https://github.com/anamika4ak/Anamika-Portfolio"
                style={{ color: "blue" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                its SourceCode
              </a>{" "}
            </b>
          </li>
          <br />
          <li>
            <a
              href="https://github.com/anamika4ak"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>
                <b>My GitHub Profile</b>
              </button>
            </a>{" "}
            <b>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; & &nbsp;{" "}
              <a
                href="https://github.com/anamika4ak/anamika4ak"
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue" }}
              >
                {" "}
                its SourceCode
              </a>{" "}
            </b>
          </li>

          <br />
        </ol>
      </div>
    </section>
  );
}

export default ProjectsLink;
