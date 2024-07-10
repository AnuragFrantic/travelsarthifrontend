import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import styled from "styled-components";

import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";
import { MultipleSlidesExample, BigSlidesExample } from "./Slidebar";
import { Bigslide, TripMoney } from "./Slidecss";
import { Bottom } from "./Bottom";

import { Link, NavLink, useNavigate } from "react-router-dom";
import Cards from "../Cards";
import { SmallBottom } from "./SmallBottom";
import { useState } from "react";
import { FareTypes } from "./FareTypes";

import { useEffect } from "react";
import MassonaryImage from "../MassonaryImage";
import exp from "../../image/exp.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Gallerydata from "../../data/Gallerydata";
import axios from "axios";
import { BASEURL } from "../BaseUrl";
import offerbanner from "../../image/underbanner.jpg";
import Select from "react-select";

function Banner() {
  const [countrydata, setcountrydata] = useState([]);
  const [country, setcountry] = useState("");
  const [rooms, setRooms] = useState(0);
  const [guest, setguest] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [visa, setvisa] = useState("");
  const [visadata, setvisadata] = useState("");

  let countrycode = localStorage.getItem("country");

  const [data, setData] = useState({
    from: "",
    to: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  useEffect(() => {
    console.log("Effect is running");
    const storedCountry = localStorage.getItem("selectedCountry");

    console.log("Stored Country: ", storedCountry);
    if (storedCountry) {
      const parsedCountry = JSON.parse(storedCountry);
      console.log("Parsed Country: ", parsedCountry);
      setcountry(parsedCountry);
    }
    // Retrieve guest and room from local storage
    const storedGuest = localStorage.getItem("guest");
    const storedRoom = localStorage.getItem("room");

    // Parse the values and set them in state
    if (storedGuest) {
      setguest(parseInt(storedGuest, 10)); // Convert to integer
    }

    if (storedRoom) {
      setRooms(parseInt(storedRoom, 10)); // Convert to integer
    }
  }, []);

  const [selectedIcon, setSelectedIcon] = useState("Flights");
  const [searchbtn, setsearchbtn] = useState("");

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedIcon == "Flights") {
      setsearchbtn("/modal");
      localStorage.setItem("comes", "Flights");
    } else if (selectedIcon == "Package") {
      setsearchbtn(`/package/${country.value}`);
      localStorage.setItem("comes", "Package");
      let destinationString = localStorage.getItem("selectedCountry");

      console.log("matchforunn", destinationString);

      // Parse the JSON string to convert it to an object
      let destination = JSON.parse(destinationString);

      let label = destination?.label;
      let destinationArray = localStorage.getItem("destinationArray");

      destinationArray = destinationArray?.replace(/^"(.*)"$/, "$1");
      console.log(destinationArray);
      if (label == destinationArray) {
        // alert("mathces");
      } else {
        localStorage.removeItem("modalCloseTimestamp");
      }
    } else if (selectedIcon == "Visa") {
      setsearchbtn("/modal");
      localStorage.setItem("comes", "Visa");
    } else if (selectedIcon == "Insurance") {
      setsearchbtn("/modal");
      localStorage.setItem("comes", "Insurance");
    } else if (selectedIcon == "Hotels") {
      setsearchbtn("/modal");
      localStorage.setItem("comes", "Hotels");
    } else {
      setsearchbtn(`/modal`);
    }
  }, [selectedIcon, searchbtn, country]);

  useEffect(() => {
    if (selectedIcon == "Package") {
      localStorage.setItem("selectedCountry", JSON.stringify(country));
      localStorage.setItem("guest", guest);
      localStorage.setItem("room", rooms);
    }
  }, [selectedIcon, country]);

  const expdata = [
    exp,
    "https://images.pexels.com/photos/2432299/pexels-photo-2432299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/163168/mountains-summit-winter-snow-163168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5472599/pexels-photo-5472599.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/2407070/pexels-photo-2407070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const allcountrydata = () => {
    axios.get(`${BASEURL}/allcountry`).then((res) => {
      console.log(res.data);
      setcountrydata(res.data);
    });
  };

  const allvisadata = () => {
    axios.get(`${BASEURL}/visas`).then((res) => {
      console.log("visa oprrp", res.data);
      setvisadata(res.data);
    });
  };

  useEffect(() => {
    allcountrydata();
    allvisadata();
  }, []);

  const getSliceCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000 && screenWidth <= 1400) {
      return 4;
    } else if (screenWidth >= 400 && screenWidth < 900) {
      return 3;
    } else {
      return 5; // Default slice count for other screen sizes
    }
  };

  const guestminus = (e) => {
    if (guest > 0) {
      let newGuestCount = guest - 1;
      setguest(newGuestCount);
    }
  };

  const guestplus = () => {
    let newguestcount = guest + 1;
    setguest(newguestcount);
  };

  const roomsminus = () => {
    if (rooms > 0) {
      let newroomcount = rooms - 1;
      setRooms(newroomcount);
    }
  };

  const roomsplus = () => {
    let newroomcount = rooms + 1;
    setRooms(newroomcount);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
    }),
  };

  const options = countrydata.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const visaoptions =
    Array.isArray(visadata) && visadata.length > 0
      ? visadata.map((item) => ({
        value: item._id,
        label: item.country,
      }))
      : [];

  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  return (
    <>
      <Navbar>
        <div className="topdiv">
          {/* <img
            className="laltain"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/DiwaliLantern.webp"
            alt=""
          /> */}
          <Link to="/">
            {/* <img
              className="mmtlogo"
              src={
                "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              }
              alt="Logo"
            /> */}
          </Link>
        </div>
        <section id="flights" className="place">
          <div class="snow"></div>
          <div class="snow1"></div>
          <div class="snow2"></div>

          <Bookingcss>
            <Icondiv
              className="icondiv"
              handleIconClick={handleIconClick}
            ></Icondiv>
            {/* {selectedIcon == "Package" && (
              <ul
                className="nav nav-pills mb-3 gap-3 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-Search-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Search"
                    type="button"
                    role="tab"
                    aria-controls="pills-Search"
                    aria-selected="true"
                  >
                    Search
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Honeymoon-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Honeymoon"
                    type="button"
                    role="tab"
                    aria-controls="pills-Honeymoon"
                    aria-selected="false"
                  >
                    Honeymoon
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Villa-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Villa"
                    type="button"
                    role="tab"
                    aria-controls="pills-Villa"
                    aria-selected="false"
                  >
                    Villa
                  </button>
                </li>
              </ul>
            )} */}
            {selectedIcon == "Flights" && (
              <>
                {/* <Fromto handleChange={handleData} /> */}
                <div className="row align-items-center justify-content-center gy-2">
                  <div className="col-md-2 col-6">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        From
                      </label>
                      {/* <select
                        name=""
                        className="form-control form-select"
                        id=""
                      >
                        <option value="">Australlia</option>
                      </select> */}
                      <input
                        type="text"
                        placeholder="From "
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        To
                      </label>
                      {/* <select
                        name=""
                        className="form-control form-select"
                        id=""
                      >
                        <option value="">Australlia</option>
                      </select> */}
                      <input
                        type="text"
                        placeholder="To"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Departure
                      </label>
                      <input
                        type={inputType}
                        className="form-control"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Return
                      </label>
                      <input
                        type={inputType}
                        className="form-control"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-12">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Travel Class
                      </label>
                      <select
                        name=""
                        className="form-control form-select"
                        id=""
                      >
                        <option value="">Economy </option>
                        <option value="">Business</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}
            {selectedIcon == "Package" && (
              <>
                <div
                  className="row h-50 w-100 align-items-center justify-content-center packagebox"
                  style={{ position: "relative", bottom: "0" }}
                >
                  <div className="col-md-11 col-12 ms-md-0 ms-3">
                    <div className="">
                      <label htmlFor="" className="fw-bold mb-2">
                        Search Destination City / Country
                      </label>

                      <Select
                        styles={customStyles}
                        placeholder="Search or select a country"
                        isSearchable
                        value={country}
                        onChange={(selectedOption) =>
                          setcountry(selectedOption)
                        }
                        options={options}
                      />
                    </div>
                  </div>
                  <div className="col-md-2  mt-3">
                    <h3 className="text-blue headingtrending">Trending : </h3>
                  </div>
                  <div className="col-md-9 mt-3">
                    <div className="d-flex align-items-center gap-3  flex-wrap">
                      {countrydata
                        .slice(-4) // Select the latest 5 countries
                        .map((item) => (
                          <div
                            key={item.id}
                            onClick={() => navigate(`/package/${item._id}`)}
                            className="text-center rounded-3"
                          >
                            <h5
                              className="mb-2 text-dark tredingpackagename  text-white p-2 rounded-pill text-nowrap"
                              style={{

                                backgroundImage:
                                  "linear-gradient(245deg,#3533cd 0%,#000000 100%)",
                              }}
                            >
                              {item.name}
                            </h5>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* <div className="col-md-3 col-12">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Guests
                      </label>
                      <div className="d-flex gap-2">
                        <input
                          type="text"
                          value={guest}
                          onChange={(e) => setguest(e.target.value)}
                          className="form-control"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Rooms
                      </label>
                      <div className="d-flex gap-2">
                        <input
                          type="text"
                          value={rooms}
                          onChange={(e) => setRooms(e.target.value)}
                          className="form-control"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </>
            )}
            {selectedIcon == "Visa" && (
              <>
                <div className="row h-50 w-100 align-items-center justify-content-center">
                  <div className="col-md-4 col-12 ">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Visa
                      </label>
                      <Select
                        styles={customStyles}
                        placeholder="Search or select a country"
                        isSearchable
                        value={visa}
                        onChange={(selectedOption) => setvisa(selectedOption)}
                        options={visaoptions}
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-3 col-12">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Days
                      </label>
                      <input
                        type="text"
                        placeholder="No. of Nights"
                        className="form-control"
                      />
                    </div>
                  </div> */}
                  <div className="col-md-4 col-12 ">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Passenger
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No. of Passenger"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {selectedIcon == "Insurance" && (
              <>
                <div className="row h-50 w-100 align-items-center justify-content-center">
                  <div className="col-md-3 col-12 ">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Insurance
                      </label>
                      <Select
                        styles={customStyles}
                        placeholder="Search or select a country"
                        isSearchable
                        value={country}
                        onChange={(selectedOption) =>
                          setcountry(selectedOption)
                        }
                        options={options}
                      />
                    </div>
                  </div>

                  <div className="col-md-3 col-12 ">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Passenger
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No. of Passenger"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {selectedIcon == "Hotels" && (
              <>
                <div className="row h-50 w-100 align-items-center justify-content-center">
                  <div className="col-md-3 col-12">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Destination
                      </label>
                      {/* <select
                        name=""
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                        className="form-control form-select"
                        id=""
                      >
                        <option value="">Select Country</option>
                        {countrydata.map((item) => {
                          return (
                            <>
                              <option className="" value={item._id}>
                                {" "}
                                {item.name}{" "}
                              </option>
                            </>
                          );
                        })}
                      </select> */}
                      <Select
                        styles={customStyles}
                        placeholder="Search or select a country"
                        isSearchable
                        value={country}
                        onChange={(selectedOption) =>
                          setcountry(selectedOption)
                        }
                        options={options}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-12 ">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Nights
                      </label>
                      <input
                        type="text"
                        placeholder="No. of Nights"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-12 ">
                    <div className="shadow rounded-4 p-3 bg-white">
                      <label htmlFor="" className="fw-bold mb-2">
                        Number of Passenger
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="No. of Passenger"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </Bookingcss>
          <div className="button text-center">
            <Link to={searchbtn}>
              <button className="searchbtn" onClick={addLocal}>
                SEARCH
              </button>
            </Link>
          </div>
        </section>
      </Navbar>

      <div style={{ background: "#ebe7e7" }}>
        <section>
          <div className="container">
            <div className="row">
              {selectedIcon == "Package" && (
                <div className="col-md-12">
                  <div className="mb-5">
                    <img
                      src={offerbanner}
                      style={{
                        height: "350px",
                        objectFit: "cover",
                        position: "relative",
                        bottom: "20px",
                      }}
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Banner;
