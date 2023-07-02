import React from "react";
import "../styles/footer.css";

const Footer = ({ data }) => {
    if (data) {
        var siteLink = data.website.replace("https://", "");
        var networks = data.social.map(function (network) {
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
        <footer>
            <div className="row">
                <div className="twelve-columns">
                    <ul className="social-links">{networks}</ul>

                    <ul className="copyright">
                        <li>
                            Copyright © 2023 | Mark Hodge | Website By: <a className="footerLink" href="markhodge.dev"> {siteLink}</a>
                        </li>
                    </ul>
                    {/* <p>
                        Website design inspired by: <a className="footerLink" href="https://www.chrisbenjamin.dev/#home" target="_blank"> Chris Benjamin</a>
                    </p> */}
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;