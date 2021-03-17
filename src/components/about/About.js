import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '../home/homeicon.svg'
import './About.scss'

export class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="left">
                        <div>
                            <h3>About me</h3>
                            <p>About me text right here</p>
                        </div>
                    </div>
                    <div className="right">
                        <Link to={"/"}>
                        <div>
                            <h3>Home</h3>
                            <img src={HomeIcon} alt="abouticon" />
                        </div>
                        </Link>
                    </div>
                </div> 
            </div>
        )
    }
}

export default About
