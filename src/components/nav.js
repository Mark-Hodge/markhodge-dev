import React from "react";
import "../styles/nav.css";

function Nav() {
    return (
        <nav id="nav-wrap" >
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
            </a>

            <ul id="nav" className="nav">
                <li className="current">
                    <a className="smoothscroll" href="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#resume">
                        Resume
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a className="smoothscroll" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;