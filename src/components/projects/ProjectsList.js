import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '../home/homeicon.svg'


export class ProjectsList extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="right">
                        <Link to={"/"}>
                        <div>
                            <h3>Home</h3>
                            <img src={HomeIcon} alt="abouticon" />
                        </div>
                        </Link>
                    </div>
                    <div className="left">
                        <div>
                            <h3>Projects</h3>
                            <p>Text about projects</p>
                            <ul>
                                <li><Link to={"/project1"}>Project 1</Link></li>
                                <li><Link>Project 2</Link></li>
                                <li><Link>Project 3</Link></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ProjectsList
