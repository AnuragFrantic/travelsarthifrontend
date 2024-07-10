import React, { useEffect } from "react";
import { Header } from "../components/HomePage/Header";
import { Bottom } from "../components/HomePage/Bottom";

function RefundPolicy() {
    useEffect(() => {
        const body = document.querySelector("#root");
        body.scrollIntoView({ behavior: "smooth" }, 500);
    }, []);

    return (
        <>
            <Header />
            {/* <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title text-white">Refund Privacy Policy</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="space policy mt-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-12">
                            <div className="p-4">
                                <h3 className="bg-grey">Refund Eligibility</h3>
                                <p>
                                    Refunds are subject to the terms and conditions of the purchased travel package or service. Non-refundable items and services will be indicated at the time of booking.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">Refund Process</h3>
                                <p>
                                    To request a refund, contact our customer service team at <a href="mailto:support@mytravelsarthi.com" className="text-dark">support@mytravelsarthi.com</a> or call us at <a href="tel:+918218073585" className="text-dark">+91-8218073585</a>. Provide your booking reference number and reason for the refund. Approved refunds will be processed within 14-15 working days using the original payment method.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">Payment Failures</h3>
                                <p>If your payment has failed, the amount will be refunded within 24-48 hours.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">Contact Us</h3>
                                <p>For questions or concerns, please contact us at:</p>
                                <p>
                                    <strong>MY TRAVEL SARTHI</strong><br />
                                    email: <a href="mailto:support@mytravelsarthi.com" className="text-dark">support@mytravelsarthi.com</a><br />
                                    Contact no.: <a href="tel:+918218073585" className="text-dark">+91-8218073585</a>, <a href="tel:+919412783338" className="text-dark">+91-9412783338</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />
        </>
    );
}

export default RefundPolicy;
