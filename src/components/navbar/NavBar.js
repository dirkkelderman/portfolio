import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss'

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <h2>This is the NavBar</h2>
                <ul>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
