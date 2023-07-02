/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./navmobile.css";
import mobileLogo from "../../assets/images/logo1.png";

const HEADER_ITEMS = [
  {
    name: "Partner",
  },
  {
    name: "Ecosystem",
  },
  {
    name: "About",
  },
  {
    name: "Road map",
  },
  {
    name: "Whitepaper",
  },
  {
    name: "News",
  },
  {
    name: "Connect",
  },
];

function Navmobile({ handleClose, setOpenModal }) {
  const setOpenModalMobile = (value) => {
    value === "Connect" && setOpenModal(true);
  };
  return (
    <div className="wrapper-mobile">
      <div className="nav-mobile-header">
        <div className="nav-mobile-icon">
          <img src={mobileLogo} alt="mobile-logo" className="nav-mobile-logo" />
        </div>
        <button className="navmobile-div-btn">
          <div className="mobile-arrow-right">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          Dashboard
        </button>
        <div className="nav-mobile-close" onClick={() => handleClose()}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="nav-mobile">
        {HEADER_ITEMS?.map(({ name }, key) => (
          <NavItem
            value={name}
            key={key}
            setOpenModalMobile={setOpenModalMobile}
          />
        ))}
      </div>
    </div>
  );
}

export default Navmobile;

const NavItem = ({ value, setOpenModalMobile }) => (
  <div className="nav-item" onClick={() => setOpenModalMobile(value)}>
    <a className="nav-item--link">{value}</a>
  </div>
);
