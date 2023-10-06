"use client";
import React, { useEffect, useState } from "react";
import "./footer.css";
import { BsTwitter, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const Footer = ({}) => {
  return (
    <div className="footer-root">
      <div className="footer-top-content">
        <div className="footer-title">About Company</div>
        <div className="footer-sub-header">
          Welcome to FabFinds - Your Fashion Destination, Discover the ultimate
          fashion haven at FabFinds, where style meets convenience. We are your
          premier destination for all things clothing and attire, offering an
          exquisite collection of fashion-forward apparel for the discerning
          shopper
        </div>
        <div className="social-icon-container">
          <div className="social-icons">
            <div className="twitter-icon">
              <BsTwitter />
            </div>
            <div className="facebook-icon">
              <BsFacebook />
            </div>
            <div className="instagram-icon">
              <BsInstagram />
            </div>
            <div className="whatsapp-icon">
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-middle-content">
        <div className="footer-content">
          <div className="footer-card">
            <div className="card-title">NEWSLETTER</div>
            <div className="card-sub-title">
              Signup for newsletter and get latest updates!
            </div>
            <div className="text-input">
              <input type="text" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-card">
            <div className="card-title">PRODUCTS</div>
            <div className="card-list">
              <ul>
                <li>All Products</li>
                <li>All Collections</li>
                <li>News</li>
                <li>Womens Top</li>
              </ul>
            </div>
          </div>
          <div className="footer-card">
            <div className="card-title">QUICK LINKS</div>
            <div className="card-list">
              <ul>
                <li>Search</li>
                <li>About Us</li>
                <li>FAQS</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer-card">
            <div className="card-title">CUSTOMER SUPPORT</div>
            <div className="card-sub-title">
              Available between 8AM to 8PM. Ready to answer your questions.
            </div>
            <div className="card-list">
              <ul>
                <li>
                  <BiSolidPhoneCall
                    style={{ marginRight: "5px", fontSize: "17px" }}
                  />
                  +234 8155668282
                </li>
                <li>
                  <GrMail style={{ marginRight: "5px", fontSize: "17px" }} />{" "}
                  olusanyajolaoluwa@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom-content">
        <div className="bottom-text">© 2023, FabFinds Powered by TechGate</div>
      </div>
    </div>
  );
};

export default Footer;
