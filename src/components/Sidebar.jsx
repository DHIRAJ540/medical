import React from "react";
import closeWhite from "../assets/close_white.svg";
import "./sidebar.css";

const SidebarCard = ({ data }) => (
  <div className="sidebar_card">
    <div className="title">{data.title}</div>
    {data.items.map((item, index) => (
      <div className="card_item" key={index}>
        <p>{item}</p>
        <img src={closeWhite} alt="close" />
      </div>
    ))}
  </div>
);

const Sidebar = () => {
  const sidebarData = [
    {
      title: "Related Category",
      items: [
        "Pacaretamol Tablets",
        "Paracetamol Syrup",
        "Paracetamol Powder",
        "Aceclofenic",
        "Mafaladrate Simenthicone Oral Suspension",
        "Mefenamix paracetamol Syrup",
      ],
    },
    {
      title: "Related Brands",
      items: [
        "Cipmol Paracetamol",
        "Pandal Paracetamol Tablets",
        "Combiflam",
        "Crocin Tablets",
        "Calpol Paracetamol Tablets",
        "Sumo Tablet",
      ],
    },
    {
      title: "Business Type",
      items: ["Wholesaler", "Manufacturer", "Retailer", "Exporter"],
    },
    {
      title: "Strength",
      items: ["500 mg", "650 mg"],
    },
    {
      title: "Manufecturer",
      items: ["Intas Pharamaceutical Ltd", "Alekm Pharmaceutical Ltd"],
    },
    {
      title: "Prescription/Non prescription",
      items: ["Intas Pharamaceutical Ltd", "Alekm Pharmaceutical Ltd"],
    },
  ];

  return (
    <div className="container sidebar_container">
      <div className="sidebar">
        {sidebarData.map((item, index) => (
          <SidebarCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
