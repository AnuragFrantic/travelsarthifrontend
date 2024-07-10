import React from 'react';
import { Header } from '../components/HomePage/Header';
import { Bottom } from '../components/HomePage/Bottom';

function Contact() {
    return (
        <>
            <Header />
            <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title text-white">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="space">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-12">
                            <h3>We're here to Assist You!</h3>
                            <p>Thank you for considering MyTravelSarthi for your travel needs. Whether you have questions about our services, need assistance with a booking, or simply want to share your travel aspirations, our team is ready to help. Reach out to us using the contact information below.</p>
                        </div>
                        <div className="col-md-12">
                            <h3>Contact Information</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>Address:</h4>
                                    <p>Plot no. 94, Sec-13, Dwarka <br />New Delhi, 110075</p>
                                </div>
                                <div className="col-md-4">
                                    <h4>Phone:</h4>
                                    <p className="mb-0">
                                        <a href="tel:8218073585" className="text-dark">+91-8218073585</a>
                                    </p>
                                    <a href="tel:73512882873" className="text-dark">+91-73512882873</a>
                                </div>
                                <div className="col-md-4">
                                    <h4>Email:</h4>
                                    <p className="mb-0">
                                        <a href="mailto:Sales@mytravelsarthi.com" className="text-dark">For sales query: <span className="fw-bold">Sales@mytravelsarthi.com</span></a>
                                    </p>
                                    <p className="mb-0">
                                        <a href="mailto:Support@mytravelsarthi.com" className="text-dark">For Support: <span className="fw-bold">Support@mytravelsarthi.com</span></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h3>Business Hours</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>Monday</h4>
                                    <p>Friday: 9:00 AM - 6:00 PM</p>
                                </div>
                                <div className="col-md-4">
                                    <h4>Saturday</h4>
                                    <p>10:00 AM - 4:00 PM</p>
                                </div>
                                <div className="col-md-4">
                                    <h4>Sunday</h4>
                                    <p>Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h3>Why Choose MyTravelSarthi?</h3>
                            <ul>
                                <li>
                                    <span className="fw-bold" style={{ color: 'rgb(88, 214, 217)' }}>Expert Guidance: </span>
                                    Our team of experienced travel advisors is here to provide personalized recommendations and expert guidance.
                                </li>
                                <li>
                                    <span className="fw-bold" style={{ color: 'rgb(88, 214, 217)' }}>Tailored Experiences: </span>
                                    Craft the journey that suits your preferences and desires with our tailored travel experiences.
                                </li>
                                <li>
                                    <span className="fw-bold" style={{ color: 'rgb(88, 214, 217)' }}>24/7 Support: </span>
                                    For emergency assistance during your travels, our support team is available around the clock.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <h4>Social Media</h4>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="text-center">
                                        <a href="https://www.facebook.com/profile.php?id=61552990767072" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook fs-1"></i>
                                            <p className="text-dark text-center">Facebook</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-center">
                                        <a href="https://instagram.com/mytravelsarthi?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-instagram fs-1"></i>
                                            <p className="text-dark text-center">Instagram</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-center">
                                        <a href="https://www.youtube.com/@Mytravelsarthi" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-youtube fs-1"></i>
                                            <p className="text-dark text-center">YouTube</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />
        </>
    );
}

export default Contact;
