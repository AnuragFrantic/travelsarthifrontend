import React, { useEffect } from "react";
import { Header } from "../components/HomePage/Header";
import { Bottom } from "../components/HomePage/Bottom";

function Terms() {
    useEffect(() => {
        const body = document.querySelector("#root");
        body.scrollIntoView({ behavior: "smooth" }, 500);
    }, []);

    return (
        <>
            <Header />
            <section className="space policy mt-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-12">
                            <div className="p-4">
                                <h3 className="bg-grey">1. Introduction</h3>
                                <p>
                                    Welcome to My Travel Sarthi. By accessing or using our services, you agree to be bound by the following terms and conditions. Please read them carefully before making a booking.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">2. Booking and Payment</h3>
                                <p>
                                    <strong>Reservations:</strong> All bookings are subject to availability and are not confirmed until full payment is received.
                                </p>
                                <p>
                                    <strong>Payment:</strong> Full payment must be made at the time of booking. We accept major credit cards, debit cards, and bank transfers.
                                </p>
                                <p>
                                    <strong>Pricing:</strong> Prices are subject to change without notice. The final price will be confirmed at the time of booking.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">3. Cancellations and Refunds</h3>
                                <p>
                                    <strong>Cancellation by Customer:</strong> Cancellations must be made in writing. Cancellation charges may apply based on the proximity to the departure date.
                                </p>
                                <p>
                                    <strong>Refunds:</strong> Refunds will be processed according to the cancellation policy and will be made within 14-15 working days. Non-refundable items will be clearly indicated at the time of booking.
                                </p>
                                <p>
                                    <strong>Cancellation by Us:</strong> We reserve the right to cancel or modify bookings in case of unforeseen circumstances. In such cases, a full refund will be provided.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">4. Travel Documents</h3>
                                <p>
                                    <strong>Passport and Visas:</strong> It is the customer’s responsibility to ensure they have a valid passport and appropriate visas for their travel.
                                </p>
                                <p>
                                    <strong>Health Requirements:</strong> Customers are responsible for meeting all health requirements and obtaining necessary vaccinations for their travel destinations.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">5. Changes to Bookings</h3>
                                <p>
                                    <strong>Amendments:</strong> Any changes to bookings must be made in writing and may be subject to additional charges.
                                </p>
                                <p>
                                    <strong>Unavailability:</strong> If a booked service is unavailable, we will offer an alternative of similar value or provide a full refund.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">6. Liability</h3>
                                <p>
                                    <strong>Limitations:</strong> My Travel Sarthi is not liable for any injury, loss, or damage suffered by customers during their travel, except where directly caused by our negligence.
                                </p>
                                <p>
                                    <strong>Third-Party Services:</strong> We act as an agent for third-party service providers and are not responsible for their actions or omissions.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">7. Travel Insurance</h3>
                                <p>
                                    <strong>Recommendation:</strong> We strongly recommend that customers purchase comprehensive travel insurance to cover cancellations, medical expenses, and other potential losses.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">8. Conduct</h3>
                                <p>
                                    <strong>Behavior:</strong> Customers are expected to behave respectfully and follow local laws and customs. We reserve the right to terminate the travel arrangement of any customer whose behavior is deemed inappropriate or disruptive.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">9. Privacy Policy</h3>
                                <p>
                                    <strong>Personal Information:</strong> We collect personal information necessary for booking and travel arrangements. This information is stored securely and shared only with relevant service providers.
                                </p>
                                <p>
                                    <strong>Data Protection:</strong> We comply with applicable data protection laws to ensure your information is handled safely and securely.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">10. Cookies Policy</h3>
                                <p>
                                    <strong>Use of Cookies:</strong> Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand your preferences and improve our services.
                                </p>
                                <p>
                                    <strong>Types of Cookies:</strong> We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted).
                                </p>
                                <p>
                                    <strong>Managing Cookies:</strong> You can control the use of cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">11. Governing Law</h3>
                                <p>
                                    These terms and conditions are governed by the laws of India, Uttar Pradesh, and any disputes will be subject to the exclusive jurisdiction of the courts of Uttar Pradesh.
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="bg-grey">12. Contact Information</h3>
                                <p>
                                    For any inquiries or issues, please contact us at:
                                </p>
                                <p>
                                    <strong>MY TRAVEL SARTHI</strong><br />
                                    Email: <a href="mailto:support@mytravelsarthi.com" className="text-dark">support@mytravelsarthi.com</a><br />
                                    Phone: <a href="tel:+919412783338" className="text-dark">+91-9412783338</a>, <a href="tel:+918218073585" className="text-dark">+91-8218073585</a><br />
                                    Address: Plot no. 94, Sec-13, Dwarka New Delhi, 110075
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

export default Terms;
