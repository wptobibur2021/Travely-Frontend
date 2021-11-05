import React from 'react'
import './Contact.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";
import PageLayout from '../../Components/Frontend/PageLayout/PageLayout';
export default function Contact() {
    return (
            <PageLayout>
                <section className="contact-info-area">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <FaPhoneAlt className="custom-icon"/>
                                <h3>Call us</h3>
                                <p>+8801722-527364</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <FaMapMarkerAlt className="custom-icon"/>
                                <h3>Our location</h3>
                                <p>6890 Blvd, The Bronx, NY 1058 New York, USA</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-contact-info">
                                <FaEnvelope className="custom-icon"/>
                                <h3>Email</h3>
                                <p>wdtobibur96@gmail.com</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96573.31103477094!2d-73.91097474739833!3d40.851768669647285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sBronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1633418866800!5m2!1sen!2sbd" width={1100} height={350} style={{border: 0}} allowFullScreen loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageLayout>

    )
}
