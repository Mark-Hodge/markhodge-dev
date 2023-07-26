import React from "react";
import TypeWriter from "react-typewriter";
import "../styles/header.css";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var state = data.address.state;
    var networks = data.social.map(function(network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  };

  return (
    <header id="home">
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">
                    <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
                </h1>
                <h3>
                    Based in {city} {state}. <span>{occupation}</span> {/*{description}*/}
                </h3>
                <hr />
                <ul className="social">{networks}</ul>
            </div>
        </div>

        <p className="scrolldown">
            <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
            </a>
      </p>
    </header>
  );
};

export default Header;