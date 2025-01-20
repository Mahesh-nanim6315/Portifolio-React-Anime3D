import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import ContactForm from "../ContactForm/ContactForm";


const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div className="contact-info">
                    <ContactInfoCard
                        iconUrl={`${import.meta.env.BASE_URL}images/email-64.png`}
                        text="maheshn7780@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl={`${import.meta.env.BASE_URL}images/github-64.png`}
                        text="https://github.com/Mahesh-nanim6315"
                    />
                </div>

                <div className="contact-form">
                <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;

