import React from "react";
import { Header } from "../components/HomePage/Header";
import { Bottom } from "../components/HomePage/Bottom";
import { useEffect } from "react";
import Banner from "../components/HomePage/Banner";

function Privacy() {
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <section class="policy space">
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 mx-auto mt-5
            "
            >
              <div class="p-4">
                <h3 class="bg-grey">
                  1. <span class="bg-grey">MY TRAVEL SARTHI</span>
                </h3>
                <p>
                  Welcome to MyTravelSarthi. We value your trust and are
                  committed to protecting your privacy. This Privacy Policy
                  outlines how we collect, use, disclose, and safeguard your
                  personal information when you use our services.
                </p>
                <p>
                  We recognizes the importance of privacy of its users and also
                  of maintaining confidentiality of the information provided by
                  its users as a responsible data controller and data processer.
                </p>
                <p>
                  This Privacy Policy is applicable to any person (‘User’) who
                  purchase, intend to purchase, or inquire about any product(s)
                  or service(s) made available by MyTravelSarthi through any of
                  MyTravelSarthi’s customer interface channels including its
                  website, mobile site & offline channels including call centers
                  and offices (collectively referred herein as{" "}
                  <span className="fw-bold">"Sales Channels"</span>).
                </p>
                <p>
                  Please note that the data shared with MyTravelSarthi shall be
                  primarily processed in India and such other jurisdictions
                  where a third party engaged by MyTravelSarthi may process the
                  data on MyTravelSarthi’s behalf. By agreeing to this policy,
                  you are providing MyTravelSarthi with your explicit consent to
                  process your personal information for the purpose(s) defined
                  in this policy. The data protection regulations in India or
                  such other jurisdictions mentioned above may differ from those
                  of your country of residence.
                </p>
                <p>
                  If you have any concerns in the processing your data and wish
                  to withdraw your consent, you may do so by writing to the
                  following email id: Support@mytravelsarthi.com. However, if
                  such processing of data is essential for us to be able to
                  provide service to you, then we may not be able to serve or
                  confirm your bookings after your withdrawal of consent. For
                  instance, if you want to book any international holiday
                  package in fixed departures (group bookings), then certain
                  personal information of yours like contact details, gender,
                  dietary preferences, choice of room with smoking facility, any
                  medical condition which may require specific attention or
                  facility etc. may have to be shared by us with our vendors in
                  each city where you will stay, and they may further process
                  this information for making suitable arrangements for you
                  during the holiday. Such sharing and processing of information
                  may extend to the hotel where you will stay or the tour
                  manager who will be your guide during the travel.
                </p>
                <p>
                  A withdrawal of consent by you for us to process your
                  information may:
                </p>
                <ul className="">
                  <li>
                    severely inhibit our ability to serve you properly and in
                    such case, we may have to refuse the booking altogether, or
                  </li>
                  <li>
                    Unreasonably restrict us to service your booking (if a
                    booking is already made) which may further affect your trip
                    or may compel us to cancel your booking.
                  </li>
                </ul>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">
                  2. TYPE OF INFORMATION WE COLLECT AND ITS LEGAL BASIS
                </h3>
                <p>
                  The information as detailed below is collected for us to be
                  able to provide the services chosen by you and also to fulfill
                  our legal obligations as well as our obligations towards third
                  parties as per our User Agreement.
                </p>
                <p>
                  <span className="fw-bold">"Personal Information"</span> of
                  User shall include the information shared by the User and
                  collected by us for the following purposes:
                </p>
                <p>
                  <span className="fw-bold"> Other information:</span> We many
                  also collect some other information and documents including
                  but not limited to:
                </p>
                <ul>
                  <li>
                    Transactional history (other than banking details) about
                    your e-commerce activities, buying behavior.
                  </li>
                  <li>
                    Data either created by you or by a third party and which you
                    wish to store on our servers such as image files, documents
                    etc.
                  </li>
                  <li>
                    Data available in public domain or received from any third
                    party including social media channels, including but not
                    limited to personal or non-personal information from your
                    linked social media channels (like name, email address,
                    friend list, profile pictures or any other information that
                    is permitted to be received as per your account settings) as
                    a part of your account information.
                  </li>
                  <li>
                    Information pertaining any other traveler(s) for whom you
                    make a booking through your registered MYTRAVELSARTHI
                    account. In such case, you must confirm and represent that
                    each of the other traveler(s) for whom a booking has been
                    made, has agreed to have the information shared by you
                    disclosed to us and further be shared by us with the
                    concerned service provider(s).
                  </li>
                  {/* <li>
                    If you request MYTRAVELSARTHI to provide visa-related
                    services, then copies of your passport, bank statements,
                    originals of the filled in application forms, photographs,
                    and any other information which may be required by the
                    respective embassy to process your visa application.
                  </li> */}
                  <li>
                    For international bookings, Users, in compliance with the
                    Liberalized Remittance Scheme (LRS) of RBI or any other law
                    may be required to provide details such as their PAN
                    information or passport details number or any such
                    information required by Service Provider. Such information
                    shall be strictly used as per the aforesaid requirements
                    only. In case a User does not wish to provide this
                    information, MYTRAVELSARTHI may not be able to process the
                    booking. MYTRAVELSARTHI will never share User’s PAN details
                    without their prior consent unless otherwise such action is
                    required by any law enforcement authority for investigation,
                    by court order or in reference to any legal process.
                  </li>
                  <li>
                    In case you opt for contactless check-in at Hotels, then
                    copies of your government identification like aadhar,
                    driving license, election card etc., Self-declaration and
                    any other information like date of birth, destination/origin
                    of travel and place of residence that may be required by the
                    concerned Hotel to honor your hotel booking.
                  </li>
                  <li>
                    For international bookings, Users, in compliance with the
                    Liberalized Remittance Scheme (LRS) of RBI or any other law
                    may be required to provide details such as their PAN
                    information or passport details number or any such
                    information required by Service Provider.
                  </li>
                </ul>

                <p>
                  Such information shall be strictly used for the aforesaid
                  specified & lawful purpose only. User further understands that
                  MYTRAVELSARTHI may share this information with the end service
                  provider or any other third party for provision and
                  facilitation of the desired booking. MYTRAVELSARTHI will
                  always redact all/any sensitive & confidential information
                  contained in the vaccination certificate, passbook, bank
                  statement or any other identity card submitted for the purpose
                  of availing a service, promotional offer or booking a product
                  on the Website. In case a User does not wish to provide this
                  information or opts for deletion of the information already
                  provided, MYTRAVELSARTHI may not be able to process the
                  desired booking request. MYTRAVELSARTHI will never share any
                  of the above information collected including PAN card details,
                  Passport details, Aadhar Card details without their prior
                  consent unless otherwise such action is required by any law
                  enforcement authority for investigation, by court order or in
                  reference to any legal process.
                </p>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">
                  3. HOW WE USE YOUR PERSONAL INFORMATION:
                </h3>
                <p>
                  The Personal Information collected maybe used in the following
                  manner:
                </p>
                <h4 className="fw-bold text-dark">While making a booking</h4>
                <p>
                  While making a booking, we may use Personal Information
                  including, payment details which include cardholder name,
                  credit/debit card number (in encrypted form) with expiration
                  date, banking details, wallet details etc. as shared and
                  allowed to be stored by you. We may also use the information
                  of travelers list as available in or linked with your account.
                  This information is presented to the User at the time of
                  making a booking to enable you to complete your bookings
                  expeditiously.
                </p>
                <p>
                  We may also use your Personal Information for several reasons
                  including but not limited to:
                </p>
                <ul>
                  <li>
                    Confirm your reservations with respective service providers;
                  </li>
                  <li>Keep you informed of the transaction status;</li>
                  <li>
                    Send booking confirmations either via SMS or WhatsApp or any
                    other messaging service;
                  </li>
                  <li>Send any updates or changes to your booking(s);</li>
                  <li>
                    Allow our customer service to contact you, if necessary;
                  </li>
                  <li>
                    Customize the content of our website, mobile site, and
                    mobile app;
                  </li>
                  <li>
                    Request for reviews of products or services or any other
                    improvements;
                  </li>
                  <li>Send verification message(s) or email(s);</li>
                  <li>
                    Validate/authenticate your account and prevent any misuse or
                    abuse;
                  </li>
                  <li>
                    Contact you on your birthday/anniversary to offer a special
                    gift or offer.
                  </li>
                </ul>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">
                  3. HOW WE USE YOUR PERSONAL INFORMATION:
                </h3>
                <p>
                  The Personal Information collected maybe used in the following
                  manner:
                </p>
                <h4 className="fw-bold text-dark mb-2">
                  While making a booking
                </h4>
                <p>
                  While making a booking, we may use Personal Information
                  including, payment details which include cardholder name,
                  credit/debit card number (in encrypted form) with expiration
                  date, banking details, wallet details etc. as shared and
                  allowed to be stored by you. We may also use the information
                  of travelers list as available in or linked with your account.
                  This information is presented to the User at the time of
                  making a booking to enable you to complete your bookings
                  expeditiously.
                </p>
                <p>
                  We may also use your Personal Information for several reasons
                  including but not limited to:
                </p>
                <ul>
                  <li>
                    Confirm your reservations with respective service providers;
                  </li>
                  <li>Keep you informed of the transaction status;</li>
                  <li>
                    Send booking confirmations either via SMS or WhatsApp or any
                    other messaging service;
                  </li>
                  <li>Send any updates or changes to your booking(s);</li>
                  <li>
                    Allow our customer service to contact you, if necessary;
                  </li>
                  <li>
                    Customize the content of our website, mobile site, and
                    mobile app;
                  </li>
                  <li>
                    Request for reviews of products or services or any other
                    improvements;
                  </li>
                  <li>Send verification message(s) or email(s);</li>
                  <li>
                    Validate/authenticate your account and prevent any misuse or
                    abuse;
                  </li>
                  <li>
                    Contact you on your birthday/anniversary to offer a special
                    gift or offer.
                  </li>
                </ul>
                <h4 className="fw-bold text-dark mb-2">Surveys:</h4>
                <p>
                  We value opinions and comments from our Users and frequently
                  conduct surveys, both online and offline. Participation in
                  these surveys is entirely optional. Typically, the information
                  received is aggregated, and used to make improvements to
                  Website, other Sales Channels and services and to develop
                  appealing content, features and promotions for members based
                  on the results of the surveys. Identity of the survey
                  participants is anonymous unless otherwise stated in the
                  survey.
                </p>
                <h4 className="text-dark fw-bold mb-2">
                  Marketing Promotions, Research and Programs:
                </h4>
                <p>
                  Marketing promotions, research and programs help us to
                  identify your preferences, develop programs and improve user
                  experience. MYTRAVELSARTHI frequently sponsors promotions to
                  give its Users the opportunity to win great travel and travel
                  related prizes. Personal Information collected by us for such
                  activities may include contact information and survey
                  questions. We use such Personal Information to notify contest
                  winners and survey information to develop promotions and
                  product improvements. As a registered User, you will also
                  occasionally receive updates from us about fare sales in your
                  area, special offers, new MYTRAVELSARTHI services, other
                  noteworthy items (like savings and benefits on airfares, hotel
                  reservations, holiday packages, car rentals and other travel
                  services) and marketing programs.
                </p>
                <p>
                  In addition, you may look forward to receiving periodic
                  marketing emails, newsletters and exclusive promotions
                  offering special deals.
                </p>
                <p>
                  From time to time we may add or enhance services available on
                  the Website. To the extent these services are provided, and
                  used by you, we will use the Personal Information you provide
                  to facilitate the service(s) requested. For example, if you
                  email us with a question, we will use your email address,
                  name, nature of the question, etc. to respond to your
                  question. We may also store such Personal Information to
                  assist us in making the Website the better and easier to use
                  for our Users.
                </p>
                <p>
                  MYTRAVELSARTHI may from time to time launch reward programs by
                  way of which users may stand to win travel related rewards or
                  other rewards. We may use your Personal Information to enroll
                  you in the rewards program and status of the same will be
                  visible each time you log in to the Website. Depending on the
                  reward program, each time you win a reward, MYTRAVELSARTHI may
                  share your Personal Information with a third party that will
                  be responsible for fulfilling the reward to you. You may
                  however choose to opt out of such reward programs by writing
                  to us. For various purposes such as fraud detection, offering
                  bookings on credit etc., we at times may verify information of
                  customers on selective basis, including their credit
                  information. Additionally, MYTRAVELSARTHI may share your
                  Personal Information, anonymized and/ or aggregated data to a
                  third party that MYTRAVELSARTHI may engage to perform certain
                  tasks on its behalf, including but not limited to payment
                  processing, data hosting, data processing and assessing credit
                  worthiness for offering bookings on credit.
                </p>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">
                  4. WITH WHOM YOUR PERSONAL INFORMATION IS SHARED
                </h3>

                <h4 className="fw-bold text-dark mb-2">
                  Service Providers and suppliers:
                </h4>
                {/* <p>
                  Your information shall be shared with the end service
                  providers like airlines, hotels, bus service providers, cab
                  rental, railways or any other suppliers who are responsible
                  for fulfilling your booking. You may note that while making a
                  booking with MYTRAVELSARTHI you authorize us to share your
                  information with the said service providers and suppliers. It
                  is pertinent to note that MYTRAVELSARTHI does not authorize
                  the end service provider to use your information for any other
                  purpose(s) except as may be for fulfilling their part of
                  service. However, how the said service providers/suppliers use
                  the information shared with them is beyond the purview and
                  control of MYTRAVELSARTHI as they process Personal Information
                  as independent data controllers, and hence we cannot be made
                  accountable for the same. You are therefore advised to review
                  the privacy policies of the respective service provider or
                  supplier whose services you choose to avail.
                </p> */}
                <p>
                  MYTRAVELSARTHI does not sell or rent individual customer names
                  or other Personal Information of Users to third parties except
                  sharing of such information with our business / alliance
                  partners or vendors who are engaged by us for providing
                  various referral services and for sharing promotional and
                  other benefits to our customers from time to time basis their
                  booking history with us.
                </p>

                <h4 className="fw-bold text-dark mb-2">
                  COMPANIES IN THE SAME GROUP:
                </h4>
                <p>
                  In the interests of improving personalization and service
                  efficiency, we may, under controlled and secure circumstances,
                  share your Personal Information with our affiliate or
                  associate entities. This will enable us to provide you with
                  information about various products and services, both leisure-
                  and travel-related, which might interest you; or help us
                  address your questions and requests in relation to your
                  bookings.
                </p>
                <p>
                  If the assets of MYTRAVELSARTHI are acquired, our customer
                  information may also be transferred to the acquirer depending
                  upon the nature of such acquisition. In addition, as part of
                  business expansion/development/restructuring or for any other
                  reason whatsoever, if we decide to sell/transfer/assign our
                  business, any part thereof, any of our subsidiaries or any
                  business units, then as part of such restructuring exercise
                  customer information including the Personal Information
                  collected herein shall be transferred accordingly.
                </p>
                <h4 className="text-dark fw-bold mb-2">
                  BUSINESS PARTNERS and THIRD-PARTY VENDORS:
                </h4>
                <p>
                  We may also share certain filtered Personal Information to our
                  corporate affiliates or business partners who may contact the
                  customers to offer certain products or services, which may
                  include free or paid products / services, which will enable
                  the customer to have better travel experience or to avail
                  certain benefits specially made for MYTRAVELSARTHI customers.
                  Examples of such partners are entities offering co-branded
                  credit cards, travel insurance, insurance cover against loss
                  of wallet, banking cards or similar sensitive information etc.
                  If you choose to avail any such services offered by our
                  business partners, the services so availed will be governed by
                  the privacy policy of the respective service provider.
                </p>
                <p>
                  MYTRAVELSARTHI may share your Personal Information to third
                  party that MYTRAVELSARTHI may engage to perform certain tasks
                  on its behalf, including but not limited to payment
                  processing, data hosting, and data processing
                  platforms.MYTRAVELSARTHI may share your Personal Information
                  to third party that MYTRAVELSARTHI may engage to perform
                  certain tasks on its behalf, including but not limited to
                  payment processing, data hosting, and data processing
                  platforms.
                </p>
                <p>
                  We use non-identifiable Personal Information of Users in
                  aggregate or anonymized form to build higher quality, more
                  useful online services by performing statistical analysis of
                  the collective characteristics and behavior of our customers
                  and visitors, and by measuring demographics and interests
                  regarding specific areas of the Website. We may provide
                  anonymous statistical information based on this data to
                  suppliers, advertisers, affiliates and other current and
                  potential business partners. We may also use such aggregate
                  data to inform these third parties as to the number of people
                  who have seen and clicked on links to their websites. Any
                  Personal Information which we collect and which we may use in
                  an aggregated format is our property. We may use it, in our
                  sole discretion and without any compensation to you, for any
                  legitimate purpose including without limitation the commercial
                  sale thereof to third parties.
                </p>
                <p>
                  Occasionally, MYTRAVELSARTHI will hire a third party for
                  market research, surveys etc. and will provide information to
                  these third parties specifically for use in connection with
                  these projects. The information (including aggregate cookie
                  and tracking information) we provide to such third parties,
                  alliance partners, or vendors are protected by confidentiality
                  agreements and such information is to be used solely for
                  completing the specific project, and in compliance with the
                  applicable regulations.
                </p>
                <h4 className="mbb-2 text-dark fw-bold">
                  DISCLOSURE OF INFORMATION
                </h4>
                <p>
                  In addition to the circumstances described above,
                  MYTRAVELSARTHI may disclose User's Personal Information if
                  required to do so:
                </p>
                <ul>
                  <li>
                    By law, required by any enforcement authority for
                    investigation, by court order or in reference to any legal
                    process;
                  </li>
                  <li>To conduct our business;</li>
                  <li>
                    For regulatory, internal compliance, and audit exercise(s);
                  </li>
                  <li>To secure our systems; or</li>
                  <li>
                    To enforce or protect our rights or properties of
                    MYTRAVELSARTHI or any or all of its affiliates, associates,
                    employees, directors, or officers or when we have reason to
                    believe that disclosing Personal Information of User(s) is
                    necessary to identify, contact, or bring legal action
                    against someone who may be causing interference with our
                    rights or properties, whether intentionally or otherwise, or
                    when anyone else could be harmed by such activities.
                  </li>
                </ul>

                <p>
                  Such disclosure and storage may take place without your
                  knowledge. In that case, we shall not be liable to you or any
                  third party for any damages howsoever arising from such
                  disclosure and storage.
                </p>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">5. USER GENERATED CONTENT</h3>

                <p>
                  MYTRAVELSARTHI provides an option to its users to post their
                  experiences by way of reviews, ratings and general poll
                  questions. The customers also have an option of posting
                  questions w.r.t a service offered by MYTRAVELSARTHI or post
                  answers to questions raised by other users. MYTRAVELSARTHI may
                  also hire a third party to contact you and gather feedback
                  about your recent booking with MYTRAVELSARTHI. Though the
                  participation in the feedback process is purely optional, you
                  may still receive emails, notifications (app, sms, Whatsapp or
                  any other messaging service) for you to share your review(s),
                  answer questions posted by other users or a. The reviews may
                  be written or in a video format. The reviews written or posted
                  may also be visible on other travel or travel related
                  platforms.
                </p>
                <p>
                  The UGC that MYTRAVELSARTHI collects may be of the following
                  kinds:
                </p>

                <ul>
                  <li>Review and Ratings</li>
                  <li>Question and Answers</li>
                  <li>Crowd Source Data Collection (poll questions).</li>
                </ul>

                <p>
                  Each User who posts review or ratings, Q&A, photographs shall
                  have a profile, which other Users will be able to access.
                  Other Users may be able to view the number of trips, reviews
                  written, questions asked and answered and photographs posted.
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

export default Privacy;
