import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import AboutIcon from "../about/abouticon.svg";
import ProjectIcon from "../projects/projectsicon.svg";
import "./HomePage.scss";

// export class HomePage extends Component {
//   render() {
//     return (
//       <div className="page">
//         <Link to={"/about"} className="left ">
//             <div>
//               <h3>About Me</h3>
//               <img src={AboutIcon} alt="abouticon" />
//             </div>
//         </Link>
//         <Link to={"/projects"} className="right">
//             <div>
//               <h3>Projects</h3>
//               <img src={ProjectIcon} alt="projecticon" />
//             </div>
//         </Link>
//       </div>
//     );
//   }
// }

// export default HomePage;


// import React from "react";

// import "./HomePage.scss";

// import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="page-container page">
        <div className="home-page inner-container">
          <div className="welcome-container">Hello From the Home Page</div>

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
            <Link to={"/about"}>
            <div>
               <h3>About Me</h3>
               <img src={AboutIcon} alt="abouticon" />
             </div>              
             </Link>
          </div>
          <div className="rightSection">
            <Link to={"/projects"}>
            <div>
              <h3>Projects</h3>
               <img src={ProjectIcon} alt="projecticon" />
             </div>              
             </Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}