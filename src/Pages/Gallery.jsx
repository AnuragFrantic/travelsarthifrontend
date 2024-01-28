import React from "react";

import { Bottom } from "../components/HomePage/Bottom";
import hotelloader from "../image/building_loader.gif";


import '../css/gallery.css'
import thankyou from "../image/thankyou.jpg";

import { Header } from "../components/HomePage/Header";
import { useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../components/BaseUrl";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";
import { Col, Modal } from "react-bootstrap";
import modal from "../image/modalimage.avif";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Gallery() {
  const { id, unique } = useParams();
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

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

  const headers = {
    "Content-Type": "application/json",
  };

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
      <div className="gallery-root">

        <section className="" style={{ paddingTop: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                <button
                  className="btn bg-blue"
                  onClick={(e) => navigate(`/hotelsdetail/${id}/${unique}`)}
                >
                  <i class="fa-solid fa-arrow-left-long"></i>
                </button>
              </div>
              <div className="col-md-11">
                <div className="text-center text-dark fw-bold">
                  <h5 style={{ fontSize: "30px" }}>{data?.name} Gallery</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {data?.gallery?.[0]?.images?.length > 0 && (
          <section
            className=""
            style={{ paddingTop: "50px", paddingBottom: "50px", position: "relative" }}
          >
            <div className="container">
              <div className="row gy-3">
                {data?.gallery?.[0]?.images.map((item, index) => {
                  return (
                    <div className="col-md-3 col-6" key={index}>
                      <img
                        className="masonry_img w-100 rounded-3"
                        src={`${BASEURL}/uploads/${item}`}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>

      <Bottom />
    </>
  );
}

export default Gallery;
