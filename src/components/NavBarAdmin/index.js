import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavbarAdmin extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                {/* Brand */}
                <a className="navbar-brand" href="#a">
                    Navbar
            </a>
                {/* Toggler/collapsibe Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                
                                activeClassName="active"
                                className="nav-link"
                                to="/dashboard"
                            >
                                Dashboard
                  </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/add-user"
                            >
                                Add User
                  </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}
