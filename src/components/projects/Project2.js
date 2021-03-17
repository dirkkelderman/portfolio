import React from "react";
import { Link } from "react-router-dom";
import ProjectIcon from "./projectsicon.svg";

function Project2() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <div>
            <h3>Projects</h3>
            <p>Text about projects</p>
            <ul>
              <li>
                <Link to={"/project1"}>Project 1</Link>
              </li>
              <li>
                <Link to={"/project2"}>Project 2</Link>
              </li>
              <li>
                <Link to={"/project3"}>Project 3</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="left">
          <div>
            <h3>Project 2</h3>
            <p>Text about project1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
