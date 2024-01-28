import React from "react";
import Slider from "react-slick";
import ac from "../image/air-conditioner.png";
import { useNavigate } from "react-router-dom";
import cable from "../image/cable-tv.png";
import wifi from "../image/wifi.png";
import slipper from "../image/flip-flops.png";
import hairdryer from "../image/hairdryer.png";
import shampoo from "../image/shampoo.png";
import coffee from "../image/coffee-machine.png";
import safebox from "../image/safe-box.png";
import drink from "../image/welcome-drink.png";
import pet from "../image/pet.png";
import ref from "../image/refrigrator.png";
import towel from "../image/towel.png";
import { Bottom } from "../components/HomePage/Bottom";

import thankyou from "../image/thankyou.jpg";
import hotelloader from "../image/building_loader.gif";

import { Header } from "../components/HomePage/Header";
import { useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../components/BaseUrl";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "./Loader";
import { Col, Modal } from "react-bootstrap";
import modal from "../image/modalimage.avif";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

function Hoteldetail() {
  const { id, unique } = useParams();
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(false);
  const [msgdata, setmsg] = useState(false);

  const [show, setShow] = useState(false);

  const [hotel, sethotel] = useState([]);
  const [loading, setloading] = useState(false);
  const [coupondata, setcoupondata] = useState([]);
  const price = localStorage.getItem("price");
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkin, setcheckin] = useState("");
  const [checkout, setcheckout] = useState("");
  const [localroom, setlocalroom] = useState("");
  const [localguest, setlocalguest] = useState("");
  const [phone, setphone] = useState("");

  const handleClose = () => {
    setShow(false);
    setcheckin("");
    setlocalguest("");
    setlocalroom("");
    setphone("");
    setcheckout("");

    setemail("");
  };

  const [email, setemail] = useState("");

  const [discountedPrice, setDiscountedPrice] = useState(null);

  // const handleBoxClick = (index) => {
  //   setActiveIndex(index);

  // };
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);

  const navigate = useNavigate();

  const amenities = [
    { name: "Air conditioner", image: ac },
    { name: "Cable TV", image: cable },
    { name: "Wifi & Internet", image: wifi },
    { name: "Towels", image: towel },
    { name: "Slippers", image: slipper },
    { name: "Hair Dryer", image: hairdryer },
    { name: "Shampoo", image: shampoo },
    { name: "Espresso Machine", image: coffee },
    { name: "Safe Box", image: safebox },
    { name: "Welcome Drinks", image: drink },
    { name: "Pet Friendly", image: pet },
    { name: "In-room Refrigerator", image: ref },
  ];
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true, // Center the items
    speed: 500,
    slidesToShow: 3, // Number of amenities to show per slide
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set the autoplay speed in milliseconds

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust the number of amenities to show on smaller screens
        },
      },
    ],
  };

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      const parsedCountry = JSON.parse(storedCountry);
      setmsg(parsedCountry);
    }
  }, []);

  const getdataid = () => {
    setloading(true);
    axios.get(`${BASEURL}/hotelsdetail/${id}`, { headers }).then((res) => {
      console.log(res.data);

      setdata(res.data);
      if (res.data !== null) {
        setloading(false);
      }
    });
  };

  useEffect(() => {
    getdataid();
  }, []);

  const coupondatafetch = () => {
    axios.get(`${BASEURL}/allcoupons`, { headers }).then((res) => {
      setcoupondata(res.data.data);
      console.log(res.data.data);
    });
  };

  useEffect(() => {
    coupondatafetch();
  }, []);

  let discount = parseInt(price) + 5000;

  const [visibleItems, setVisibleItems] = useState(2);

  let rem = coupondata?.length - visibleItems;

  const [showAll, setShowAll] = useState(false);

  const visibleCoupons = coupondata;

  const handleBoxClick = (index) => {
    setActiveIndex(index);

    // If a coupon is selected, deduct its price from the original price
    if (index !== null) {
      const selectedCoupon = visibleCoupons[index];
      setDiscountedPrice(price - selectedCoupon?.price);
    } else {
      // If no coupon is selected, set the discounted price back to the original price
      setDiscountedPrice(price);
    }
  };

  // Automatically select the first coupon on component mount
  useEffect(() => {
    handleBoxClick(0); // Select the first coupon
  }, [visibleCoupons, price]);

  // const filteredHotels = visibleCoupons?.filter((item) =>
  //   item?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
  // );

  // let filtercheck = searchQuery ? filteredHotels : visibleCoupons;

  let rooms = localStorage.getItem("rooms");
  let guest = localStorage.getItem("guest");
  // alert(guest ? guest : localguest);

  const handleModalsubmit = (e) => {
    setopen(true);
    e.preventDefault();
    let requestdata = {
      checkin: checkin,
      name: msgdata.label,
      checkout: checkout,
      rooms: localroom ? localroom : rooms,
      guest: localguest ? localguest : guest,
      comes: "Hotel Detail",
      destination: data.name,
      price: price,
      phone: phone,
      email: email,
    };
    axios.post(`${BASEURL}/bookings`, requestdata, { headers }).then((res) => {
      if (res.data != null) {
        setopen(false);
        setShow(true);
        setTimeout(() => {
          handleClose();
        }, 1000);
      }
    });
  };

  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  return (
    <>
      {/* <Loader open={open} /> */}
      <Header />
      {loading && (
        <div className="overlay">
          <img
            src={hotelloader}
            style={{ width: "300px" }}
            className="img-fluid"
            alt=""
          />
        </div>
      )}

      {data?.gallery?.[0]?.images?.length > 0 && (
        <section
          className=""
          style={{ marginTop: "80px", position: "relative" }}
        >
          <div className="container-fluid">
            <div className="row">
              {data?.gallery?.[0]?.images.slice(0, 4).map((item, index) => {
                return (
                  <div className="col-md-3 col-6 p-1" key={index}>
                    <img
                      className="masonry_img w-100 rounded-3"
                      src={`${BASEURL}/uploads/${item}`}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                );
              })}
              {data?.gallery?.[0]?.images?.length > 4 && (
                <div className="col-md-12 mt-3">
                  <button
                    className="btn bg-blue gallerybtn"
                    onClick={(e) => navigate(`/gallery/${id}/${unique}`)}
                  >
                    See Gallery{" "}
                    <span className="ms-2">
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section
        className={`space ${data?.gallery?.[0]?.images?.length > 0 ? "" : "mt-5"
          }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h5>{data?.name}</h5>

              <div
                className="mt-4"
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              />

              {data?.amenities?.length > 0 && (
                <div className="mt-5 ">
                  <h6 className="fw-bold" style={{ fontSize: "24px" }}>
                    What’s included in this suite?
                  </h6>
                  <ul className="p-0 ">
                    {data?.amenities?.map((item, index) => {
                      return (
                        <>
                          <p
                            className="fw-bold bg-blue text-white p-1 rounded-pill text-center"
                            style={{ width: "200px", fontSize: "14px" }}
                          >
                            Day {index + 1}
                          </p>
                          <li className="" style={{ listStyle: "none" }}>
                            <h3
                              className="fw-bold mb-0"
                              style={{ fontSize: "22px" }}
                            >
                              {item.title}
                            </h3>
                          </li>
                          <li style={{ listStyle: "none" }}>
                            <p
                              className="fw-light mb-0"
                              style={{ fontSize: "18px" }}
                            >
                              {item.name}
                            </p>
                          </li>
                          <li style={{ listStyle: "none" }}>
                            {/* <p>{item.para}</p> */}
                            <div
                              className="mb-0 parackeditor"
                              style={{
                                wordWrap: "break-word",
                                fontSize: "14px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: item.para,
                              }}
                            />
                          </li>
                          {item.notes && (
                            <li
                              className="text-secondary"
                              style={{ listStyle: "none" }}
                            >
                              <p
                                className=""
                                style={{ fontSize: "12px", color: "#58d6d9" }}
                              >
                                <span className=""> Notes</span> : {item.notes}
                              </p>
                            </li>
                          )}
                        </>
                      );
                    })}
                  </ul>
                </div>
              )}

              <div className="">
                {data?.hoteldetaildesc?.[0]?.detail.map((item) => {
                  return (
                    <>
                      <h3>{item?.title}</h3>
                      <div
                        className="mt-4"
                        style={{ wordWrap: "break-word" }}
                        dangerouslySetInnerHTML={{
                          __html: item?.para,
                        }}
                      />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="shadow p-3 rounded-3 mb-3"
                style={{ background: "#eaf5ff" }}
              >
                <div className="text-end mb-0">
                  <del
                    className="text-secondary mb-0"
                    style={{ fontSize: "14px" }}
                  >
                    ₹ {discount}
                  </del>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-bold my-0">Price</h6>

                  <h4 className="my-0">₹ {price}</h4>
                  {/* <h5>₹ </h5> */}
                </div>
                <p
                  className="text-secondary text-end"
                  style={{ fontSize: "12px" }}
                >
                  *Excluding applicable taxes
                </p>



                <h3 className="" style={{ fontSize: "14px" }}>Share This Page</h3>
                <div className="footer">
                  <div className="share-buttons">
                    <ul className="d-flex p-0 align-items-center gap-4 flex-wrap mb-0 socialicons">
                      <li>
                        <FacebookShareButton
                          url={`https://mytravelsarthi.com/hotelsdetail/${id}/${unique}`}
                          title={`${data.name}`}
                        >
                          <i class="fa-brands fa-facebook"></i>
                        </FacebookShareButton>
                      </li>
                      <li>
                        <TwitterShareButton
                          url={`https://mytravelsarthi.com/hotelsdetail/${id}/${unique}`}
                          title={`${data.name}`}
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </TwitterShareButton>
                      </li>
                      <li>
                        <LinkedinShareButton
                          url={`https://mytravelsarthi.com/hotelsdetail/${id}/${unique}`}
                          title={`${data.name}`}
                          summary={`your-blog-post-summary`}
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </LinkedinShareButton>
                      </li>
                      <li>
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                            `Check out this Hotel Detail Page : https://mytravelsarthi.com/hotelsdetail/${id}/${unique}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>


              </div>

              <div className="bg-white shadow p-3 rounded-3">
                <h4>Reserve</h4>
                <label htmlFor="">Check In</label>
                <input
                  value={checkin}
                  onChange={(e) => setcheckin(e.target.value)}
                  className="form-control"
                  type={inputType}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label htmlFor="">Check Out</label>
                <input
                  type={inputType}
                  className="form-control"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={checkout}
                  onChange={(e) => setcheckout(e.target.value)}
                />
                <label htmlFor="">Rooms</label>
                <input
                  type="number"
                  value={localroom}
                  onChange={(e) => setlocalroom(e.target.value)}
                  className="form-control"
                />

                <label htmlFor="">Number of Guest</label>
                <input
                  type="number"
                  value={localguest}
                  onChange={(e) => setlocalguest(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Phone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control"
                />
                <button
                  className="btn w-100 bg-dark text-white mt-3 text-center"
                  onClick={(e) => handleModalsubmit(e)}
                >
                  Book Your Stay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        size="md"
        onHide={handleClose}
        className="hotelmodel"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-bottom-0 p-0">
          {/* <Modal.Title>Check</Modal.Title> */}
        </Modal.Header>

        <Modal.Body className="p-0">
          <div className="">
            <img
              src={modal}
              className="img-fluid w-100"
              alt=""
              style={{ height: "180px", objectFit: "cover" }}
            />
          </div>

          <div className="text-center">
            <img
              src={thankyou}
              className="img-fluid"
              style={{ width: "300px" }}
              alt=""
            />
            <p className="px-3">
              Thank you for submitting your travel details. Our team will review
              your information and contact you shortly. Safe travels!"
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <Bottom />
    </>
  );
}

export default Hoteldetail;
