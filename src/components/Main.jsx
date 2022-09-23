import React from "react";
import telegram from "../assets/telegram.svg";
import medImg from "../assets/meds.png";
import "./main.css";

const MainCard = ({ data }) => (
  <>
    <div className="main_card">
      <div className="upper">
        <img src={medImg} alt="medImg" />
        <h4>{data.name}</h4>
        <h3>
          {`Rs ${data.price}`}{" "}
          <span
            style={{ color: "gray", fontSize: "1rem", marginLeft: ".3rem" }}
          >
            /
          </span>{" "}
          <span>stripe</span>{" "}
        </h3>
        <p>{data.manufecturer}</p>
        <p style={{ color: "gray", marginTop: ".2rem", marginBottom: "1rem" }}>
          {data.location}
        </p>
      </div>
      <div className="main_contact">
        <img src={telegram} alt="telegram" />
        <h3>Contact Supplier</h3>
      </div>
      <div className="brown"></div>
    </div>
  </>
);

const Main = () => {
  const medsData = [
    {
      name: "Favipiravir (400mg) (Fabiflu) Tablets",
      price: "1,775",
      manufecturer: "Glenmark Pharmaceutical Limited",
      location: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      name: "Favipiravir (400mg) (Fabiflu) Tablets",
      price: "1,775",
      manufecturer: "Glenmark Pharmaceutical Limited",
      location: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      name: "Favipiravir (400mg) (Fabiflu) Tablets",
      price: "1,775",
      manufecturer: "Glenmark Pharmaceutical Limited",
      location: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      name: "Favipiravir (400mg) (Fabiflu) Tablets",
      price: "1,775",
      manufecturer: "Glenmark Pharmaceutical Limited",
      location: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      name: "Favipiravir (400mg) (Fabiflu) Tablets",
      price: "1,775",
      manufecturer: "Glenmark Pharmaceutical Limited",
      location: "PARVAT PATIYA, SURAT, GUJRAT",
    },
    {
      name: "Favipiravir (400mg) (Fabiflu) Tablets",
      price: "1,775",
      manufecturer: "Glenmark Pharmaceutical Limited",
      location: "PARVAT PATIYA, SURAT, GUJRAT",
    },
  ];

  return (
    <div className="container main_container">
      {medsData.map((item, index) => (
        <MainCard data={item} key={index} />
      ))}
    </div>
  );
};

export default Main;
