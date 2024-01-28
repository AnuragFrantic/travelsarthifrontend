import React, { useContext } from "react";

function Cards(props) {
  return (
    <>
      <div className="col-md-3">
        <div class="card" onClick={props.onClick}>
          <div className="main">
            <img
              src={props.img}
              loading="lazy"
              class="card-img-top img-fluid"
              alt="..."
              style={{ height: "14rem" }}
            />
          </div>
          <div class="card-body ">
            <div className="">
              <div className="right">
                {/* <p className="location mb-0">
                  {" "}
                  <span className="me-1">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  {props.location}
                </p> */}
                <h4 className="mb-0" style={{ fontFamily: "monospace" }}>
                  {props.heading}
                </h4>
                <p class="card-text mb-0">{props.status}</p>
              </div>
              {/* <div className="price">${props.price}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
