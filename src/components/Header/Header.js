/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo1.png";
import "./header.css";
import Navmobile from "./Navmobile";
import ConnectWallet from "./ConnectWallet";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-collapse">
        <img src={logo} className="img-logo" alt="..." />
        <div className="navbar-menu">
          <div className="frame-com">
            <div className="item1">
              <a className="item-link1">Partner</a>
            </div>
            <div className="item2">
              <a className="item-link2">Ecosystem</a>
            </div>
            <div className="item3">
              <a className="item-link3">About</a>
            </div>
            <div className="item4">
              <a className="item-link4">Road map</a>
            </div>
            <div className="item5">
              <a className="item-link5">Whitepaper</a>
            </div>
            <div className="item6">
              <a className="item-link6">News</a>
            </div>
            <div className="item7">
              <a className="item-link7" onClick={() => setOpenModal(true)}>
                Connect
              </a>
            </div>
            <button className="div-btn">
              <div className="arrow-right">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              Dashboard
            </button>
          </div>
          <div className="navbar-btn" onClick={() => setIsNavOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      {isNavOpen && (
        <Navmobile
          handleClose={() => setIsNavOpen(false)}
          setOpenModal={setOpenModal}
        />
      )}

      {openModal && (
        <ConnectWallet handleCloseModal={() => setOpenModal(false)} />
      )}
    </div>
  );
}

export default Header;
