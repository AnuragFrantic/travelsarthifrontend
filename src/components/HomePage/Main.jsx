import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";
import { MultipleSlidesExample, BigSlidesExample } from "./Slidebar";
import { Bigslide, TripMoney } from "./Slidecss";
import { Bottom } from "./Bottom";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../Cards";
import { SmallBottom } from "./SmallBottom";
import { useState } from "react";
import offerbanner from "../../image/offerbanner.avif";
import offerbanner2 from "../../image/modalbanner.png";

import { useEffect } from "react";
import MassonaryImage from "../MassonaryImage";
import exp from "../../image/exp.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Gallerydata from "../../data/Gallerydata";
import axios from "axios";
import { BASEURL } from "../BaseUrl";
import Select from "react-select";
import Banner from "./Banner";
import { Button, Modal } from "react-bootstrap";
export const Main = () => {
  const [countrydata, setcountrydata] = useState([]);
  const [country, setcountry] = useState("");
  const [rooms, setRooms] = useState(0);
  const [guest, setguest] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedIcon, setSelectedIcon] = useState("Flights");
  const [searchbtn, setsearchbtn] = useState("");

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedIcon == "Flights") {
      setsearchbtn("/");
    } else if (selectedIcon == "Package") {
      setsearchbtn(`/package/${country.value}`);
    } else {
      setsearchbtn(`/modal`);
    }
  }, [selectedIcon, searchbtn, country]);

  const [comes, setcomes] = useState("");

  const updateComes = () => {
    let come = localStorage.getItem("comes");
    setcomes(come);
  };

  useEffect(() => {
    updateComes();
  }, [comes]);

  const expdata = [
    exp,
    "https://images.pexels.com/photos/2432299/pexels-photo-2432299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/163168/mountains-summit-winter-snow-163168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5472599/pexels-photo-5472599.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/2407070/pexels-photo-2407070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const allcountrydata = () => {
    axios.get(`${BASEURL}/allcountry`).then((res) => {
      console.log(res.data);
      setcountrydata(res.data);
    });
  };

  useEffect(() => {
    allcountrydata();
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

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsOnPage = countrydata.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(countrydata.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header></Header>
      <Banner />

      <div style={{ background: "#ebe7e7" }}>
        <section className="space place">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h3 className="text-center mb-4">Most Popular</h3>
              </div>

              <div className="col-md-12">
                <div className="row">
                  {currentItemsOnPage.map((item) => (
                    <Cards
                      key={item.id}
                      img={`${BASEURL}/${item.image}`}
                      heading={item.name}
                      status="Economy, round trip "
                      onClick={(e) => navigate(`/package/${item._id}`)}
                    />
                  ))}

                  {/* Add pagination controls */}

                  <div className="d-flex justify-content-center gap-3 align-items-center">
                    <button
                      className="btn"
                      style={{
                        backgroundColor:
                          currentPage !== 1 ? "#FFFFFF" : "#58d6d9",
                        color: currentPage !== 1 ? "#000000" : "#FFFFFF",
                      }}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <span className="" style={{ fontSize: "14px" }}>
                      {" "}
                      {currentPage} of {totalPages}{" "}
                    </span>
                    <button
                      className="btn"
                      style={{
                        backgroundColor:
                          currentPage !== totalPages ? "#FFFFFF" : "#58d6d9",
                        color:
                          currentPage !== totalPages ? "#000000" : "#FFFFFF",
                      }}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space">
          <div className="container">
            <div className="row align-items-center">
              {/* <div className="col-md-12">
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
              </div> */}

              <div className="col-md-6">
                <div className="experience_content">
                  <h4>Experience</h4>
                  <h2>
                    With Our all Experience <br /> we will serve you
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    At, maiores.
                  </p>
                </div>
                <div className="counter_wrapper d-flex  align-items-center gap-5">
                  <div className="counter_box">
                    <span> 12k +</span>
                    <h6>Succesfull Trip</h6>
                  </div>
                  <div className="counter_box">
                    <span> 2k +</span>
                    <h6>Regular Clleints</h6>
                  </div>
                  <div className="counter_box">
                    <span> 15</span>
                    <h6>Years of experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 3 }}
                  >
                    <Masonry gutter="1rem">
                      {expdata.map((item, index) => {
                        return (
                          <img
                            className="masonry_img"
                            src={item}
                            key={index}
                            alt=""
                            style={{
                              width: "100%",
                              display: "block",
                              borderRadius: "10px",
                            }}
                          />
                        );
                      })}
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="text-center my-3">
                  Visit our Customer Tour Gallery
                </h3>
                <MassonaryImage />
              </div>
            </div>
          </div>
        </section>
        <Bottom />

        <Modal
          show={show}
          className="postition-relative hotelmodel"
          size="lg"

          onHide={handleClose}
        >
          <Modal.Header
            className="border-0"
            style={{
              position: "absolute",
              top: "0",
              right: "10px",
              zIndex: "2000",
            }}
            closeButton
          ></Modal.Header>
          <Modal.Body className="p-0">
            <a href="/package/659cf5336edbb24c601ed9ab"> <img src={offerbanner2} className="img-fluid w-100 offerbanner" alt="" /></a>

          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
