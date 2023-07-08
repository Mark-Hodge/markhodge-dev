import React, { useState } from "react";
import "../styles/contact.css";

function Contact ({ data }) {
    const [formFirstName, setFormFirstName] = useState("");
    const [formLastName, setFormLastName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formSubject, setFormSubject] = useState("");
    const [formMessage, setFormMessage] = useState("");

    if (data) {
        var contactName = data.name;
        var city = data.address.city;
        var state = data.address.state;
        var contactEmail = data.email;
        var contactMessage = data.contactmessage;
    };
    
    const sendEmail = (event) => {
        setFormFirstName("");
        setFormLastName("");
        setFormEmail("");
        setFormSubject("");
        setFormSubject("");
        setFormMessage("");
        window.location.href = "/#contact";
    };

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1>
                        <span>Get in Touch!</span>
                    </h1>
                </div>

                <div className="ten columns">
                    <p className="lead">{contactMessage}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form id="contact-form" onSubmit={sendEmail}>
                        <fieldset>
                            <div>
                                <label htmlFor="contactFirstName">
                                    First Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formFirstName}
                                    size="35"
                                    id="contactFirstName"
                                    name="contactFirstName"
                                    onChange={(e) => setFormFirstName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contactLastName">
                                    Last Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formLastName}
                                    size="35"
                                    id="contactLastName"
                                    name="contactLastName"
                                    onChange={(e) => setFormLastName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formEmail}
                                    size="35"
                                    id="contactEmail"
                                    name="contactEmail"
                                    onChange={(e) => setFormEmail(e.target.value)}
                                    required                             
                                />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">
                                    Subject <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formSubject}
                                    size="35"
                                    id="contactSubject"
                                    name="contactSubject"
                                    onChange={(e) => setFormSubject(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    cols="50"
                                    rows="8"
                                    value={formMessage}
                                    id="contactMessage"
                                    name="contactMessage"
                                    onChange={(e) => setFormMessage(e.target.value)}
                                    required
                                    maxLength={1000}
                                />
                            </div>

                            <div>
                                <button type="submit" className="submit">
                                    Submit
                                </button>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning">Error</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, Thank you!
                        <br />
                    </div>
                </div>

                <aside className="four columns footer-widgets">                    
                    <div className="widget widget_contact">
                        <h4>Contact Direct</h4>
                        <p className="address">
                            {contactName}
                            <br />
                            <span>{contactEmail}</span>
                            <br />
                            {city}, {state}
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;