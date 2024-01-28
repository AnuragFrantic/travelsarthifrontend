import React from "react";
import { Header } from "../components/HomePage/Header";
import { Bottom } from "../components/HomePage/Bottom";
import { useEffect } from "react";
import Banner from "../components/HomePage/Banner";

function About() {
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
                  1. <span class="bg-grey"> MyTravelSarthi</span>
                </h3>
                <p>
                  Welcome to MyTravelSarthi, where every journey is an
                  unforgettable adventure. We are more than just a travel
                  company; we are your partners in exploration, dedicated to
                  curating extraordinary experiences that linger in your
                  memories forever.
                </p>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">
                  2. <span class="bg-grey">Our Story</span>
                </h3>
                <p>
                  MyTravelSarthi was born out of a passion for travel and a
                  desire to redefine the way people experience the world.
                  Established in [Year], we embarked on a mission to create
                  personalized, immersive, and seamless travel experiences for
                  our clients.
                </p>
                <p>
                  Our journey began with a small team of avid travelers who
                  shared a common vision: to transform ordinary trips into
                  extraordinary escapades. Over the years, we have grown, but
                  our commitment to exceptional service and a client-centric
                  approach remains unwavering
                </p>
              </div>
              <div class="p-4">
                <h3 class="bg-grey">
                  3. <span class="bg-grey">Our Values</span>
                </h3>
                <p>Our values guide every aspect of our business:</p>
                <ul>
                  <li>
                    <strong>Passion for Travel:</strong> We are explorers at
                    heart, and our enthusiasm for travel fuels our commitment to
                    delivering unparalleled experiences.
                  </li>
                  <li>
                    <strong>Customer-Centric:</strong> Your satisfaction is our
                    priority. We go the extra mile to understand your needs and
                    preferences, ensuring each trip is tailored to perfection.
                  </li>
                  <li>
                    <strong>Integrity:</strong> Trust is the cornerstone of our
                    relationships. We operate with transparency, honesty, and
                    the highest ethical standards.
                  </li>
                  <li>
                    <strong>Innovation:</strong> We embrace creativity and stay
                    at the forefront of industry trends, constantly seeking new
                    ways to enhance your travel experience.
                  </li>
                </ul>
              </div>

              <div class="p-4">
                <h3 class="bg-grey">
                  4. <span class="bg-grey">Why Choose Us?</span>
                </h3>
                <p>Our values guide every aspect of our business:</p>
                <ul>
                  <li>
                    <strong>Personalized Experiences:</strong> We believe that
                    every traveler is unique. Our expert team crafts bespoke
                    itineraries that cater to your individual interests,
                    ensuring a one-of-a-kind adventure.
                  </li>
                  <li>
                    <strong>Global Network:</strong> With a vast network of
                    partners and local connections, we open doors to exclusive
                    destinations, hidden gems, and authentic cultural
                    experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
}

export default About;
