import React from "react";
import { Grid, Cell } from "react-mdl";

const Landingpage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            className="avatar-img"
            src="https://image.flaticon.com/icons/svg/701/701995.svg"
            alt="avatar"
          />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>React | SQL | Java | HTML | CSS | NodeJS</p>
            <div className="social-links">
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/lukadimnik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              {/* github */}
              <a
                href="https://github.com/lukadimnik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Landingpage;
