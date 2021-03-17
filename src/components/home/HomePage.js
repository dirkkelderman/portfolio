import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import AboutIcon from "../about/abouticon.svg";
import ProjectIcon from "../projects/projectsicon.svg";
import "./HomePage.scss";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to={"/about"} className="left">
            <div>
              <h3>About Me</h3>
              <img src={AboutIcon} alt="abouticon" />
            </div>
        </Link>
        <Link to={"/projects"} className="right">
            <div>
              <h3>Projects</h3>
              <img src={ProjectIcon} alt="projecticon" />
            </div>
        </Link>
      </div>
    );
  }
}

export default HomePage;
