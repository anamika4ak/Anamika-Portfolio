//
import ProjectsLink from "./ProjectsLink";
import SocialMedia from "./SocialMedia";

function Main() {
  return (
    <div className="main">
      <div className="mkp">
        <div className="mkp-personal">
          <h1 className="personal-heading">PERSONAL DETAILS</h1>
          <p>
            Name :- <b>ANAMIKA KUMARI</b> <br />
            <br />
            Email-ID :- <b>anamika170304@gmail.com</b> <br />
            <br />
            Graduation :- <b>B.A. in Philosophy, </b>{" "}
            <b>Asansol Girl's College</b>
            <br />
            <br />
            Address :- <b> ASANSOL, West Bengal, India </b> <br />
            <br />
            About Me :- <br />
            <b>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I am a Developer . I&apos;m
              passionate about Open-Source Contribution, Full-Stack Web
              Development, React-Development, WEB-3 and learning new & trending
              Technological skills. <br />I am always eager to learn and work
              with new technologies and share my knowledge with others. I am
              excited to continue growing and learning in my field, and I look
              forward to connecting with others who share my interests.
            </b>
          </p>
        </div>

        <ProjectsLink />
      </div>

      <div className="mkp-2">
        <section className="section ow">
          <div className="container container-center">
            <h1 style={{ color: "chocolate" }}>Skills & Technologies :</h1>
            <b>
              <ol className="mkList">
                <li> JavaScript (ES6+)</li>
                <li> HTML-5</li>
                <li> CSS-3</li>
                <li> MySQL</li>
                <li> PHP</li>
                <li> XAMPP</li>
                <li> Git</li>
                <li> Github</li>
              </ol>
            </b>
          </div>
        </section>
      </div>

      <div className="mkp-3">
        <SocialMedia />

        <section className="section ow">
          <div className="container container-center">
            <h3>
              By clicking the button below, you can access all of my
              Project&apos;s Repository :{" "}
            </h3>
            <a
              id="mkBtn"
              className="link link-primary"
              href="https://github.com/anamika4ak?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <b>Github-Anamika</b>
            </a>
          </div>
        </section>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Main;
