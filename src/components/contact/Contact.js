import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '../home/homeicon.svg'
import ProjectIcon from "../projects/projectsicon.svg";
import "./contact.scss"

export class Contact extends Component {
    render() {
        return (
<div className="page-container page">
        <div className="home-page inner-container">
          <div className="welcome-container">Hello From the Contact Page</div>

          <div className="our-story">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst quisque sagittis purus sit amet volutpat. 
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
            <div>
              <h3 >Contact me</h3>
              <div>
               <form >
                   <input type="text" placeholder="Name"></input>
                   <input type="email" placeholder="Your e-mail"></input>
                   <input type="textarea" placeholder="Your message"></input>
               </form>
              </div>
             </div>              
          </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Contact
