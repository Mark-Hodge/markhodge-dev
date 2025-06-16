import React from "react";
import "../styles/about.css";

const About = ({ data }) => {
    if (data) {
        var name = data.name;
        var profilepic = "assets/" + data.image;
        var bio = data.bio;
        var city = data.address.city;
        var state = data.address.state;
        var email = data.email;
    };

    function CopyEmail() {
        var copyText = email;
        navigator.clipboard.writeText(copyText);
        alert("Copied: " + copyText);
    };

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={profilepic}
                        alt="Mark's head shot"
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{bio}</p>
                    <p>If you know your history, try to guess where that picture of that cannon is from.</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span>
                                <br />
                                <span>
                                {city} {state}
                                </span>
                                <br />
                                <span className="tooltip">
                                    <p className="email" id="contact-email" onClick={CopyEmail}><span className="tooltiptext">Copy to clipboard</span>{email}</p>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;