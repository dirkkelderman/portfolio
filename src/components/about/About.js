import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '../home/homeicon.svg'
import ProjectIcon from "../projects/projectsicon.svg";

import './About.scss'

// export class About extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="container page">
//                     <div className="left">
//                         <div>
//                             <h3>About me</h3>
//                             <p>About me text right here</p>
//                         </div>
//                     </div>
//                     <div className="right">
//                         <Link to={"/"}>
//                         <div>
//                             <h3>Home</h3>
//                             <img src={HomeIcon} alt="abouticon" />
//                         </div>
//                         </Link>
//                     </div>
//                 </div> 
//             </div>
//         )
//     }
// }

// export default About


export default class About extends React.Component {
    render() {
      return (
        <div className="page-container page">
        <div className="home-page inner-container">
          <div className="welcome-container">Hello From the About Page</div>

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
               <img src={HomeIcon} alt="projecticon" />
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