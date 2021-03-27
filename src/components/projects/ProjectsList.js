import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../home/homeicon.svg";

export class ProjectsList extends Component {
  render() {
    return (
      <div className="page-container page">
        <div className="home-page inner-container">
          <div className="welcome-container">Hello From the Projects Page</div>

          <div className="our-story">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst quisque sagittis purus sit amet volutpat. Est ultricies
            integer quis auctor elit sed vulputate mi. Venenatis cras sed felis
            eget. Dolor sit amet consectetur adipiscing elit duis tristique
            sollicitudin nibh. Sit amet luctus venenatis lectus magna. Risus nec
            feugiat in fermentum posuere urna nec tincidunt praesent. Risus sed
            vulputate odio ut enim blandit volutpat maecenas volutpat. Purus sit
            amet luctus venenatis lectus magna fringilla urna. Non consectetur a
            erat nam at lectus urna duis convallis. Et netus et malesuada fames
            ac. Ac feugiat sed lectus vestibulum mattis ullamcorper. Amet cursus
            sit amet dictum sit amet justo donec enim.
          </div>
          <div>
            <div className="leftSection">
              <Link to={"/"}>
                <div>
                  <h3>Home</h3>
                  <img src={HomeIcon} alt="abouticon" />
                </div>
              </Link>
            </div>
            <div className="rightSection">
              <div>
                <h3>Projects</h3>
                <p>Text about projects</p>

                <ul>
                  <li>
                    <Link to={"/project1"}>Project 1</Link>
                  </li>
                  <li>
                    <Link>Project 2</Link>
                  </li>
                  <li>
                    <Link>Project 3</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsList;
