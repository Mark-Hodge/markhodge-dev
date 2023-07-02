import React from "react";
import "../styles/resume.css";

const Resume = ({ data }) => {
    if (data) {
        var experience = data.experience.map(function (experience) {
            return (
                <div key={experience.company}>
                    <h3>{experience.company}</h3>
                    <p className="info">
                        {experience.title}
                        <span>&bull;</span>
                        <em className="date">{experience.time}</em>
                    </p>
                    <p>{experience.description}</p>
                </div>
            );
        });

        var education = data.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree}
                        <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });

        var community = data.community.map(function (community) {
            return (
                <div key={community.title}>
                    <h3>{community.title}</h3>
                    <p className="info">
                        {community.detail}
                        <span>&bull;</span>
                        <em className="date">{community.time}</em>
                    </p>
                    <p>{community.description}</p>
                </div>
            );
        });

        var leadership = data.leadership.map(function (leadership) {
            return (
                <div key={leadership.title}>
                    <h3>{leadership.title}</h3>
                    <p className="info">
                        {leadership.detail}
                        <span>&bull;</span>
                        <em className="date">{leadership.time}</em>
                    </p>
                    <p>{leadership.description}</p>
                </div>
            );
        });
    }

    return (
        <section id="resume">

            {/* Education */}
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{education}</div>
            </div>

            {/* Work experience */}
            <div className="row experience">
                <div className="three columns header-col">
                    <h1>
                        <span>experience</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{experience}</div>
            </div>

            {/* Community */}
            <div className="row community">
                <div className="three columns header-col">
                    <h1>
                        <span>Community</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{community}</div>
            </div>

            {/* Leadership */}
            <div className="row leadership">
                <div className="three columns header-col">
                    <h1>
                        <span>Leadership</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{leadership}</div>
            </div>
        </section>
    );
};

export default Resume;