import React from "react";
import metafooter from "../asset/metafooter.svg";
import twitter from "../asset/twitter.png"
import facebook from "../asset/facebookicon.svg"
import instagram from "../asset/instaicon.svg"
export default function Footer() {
  return <div className="footer_logo bg-dark  d-flex justify-content-around text-light ">

    <div className=" metafooter d-flex flex-column justify-content- p-5">
    <img src={metafooter} alt="" />

    <div className=" icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
    </div>

    <span className=" copyright text-light"> &copy; metabnb 2022</span>
    </div>

    <ul className="list-unstyled">
       <li><strong> Community</strong></li>
        <li>NFT</li>
        <li>Tokens</li>
        <li>Landlords</li>
        <li>Discord</li>
    </ul>

    <ul className="list-unstyled">
    <li><strong>Places</strong></li>
        <li>Castles</li>
        <li>Farms</li>
        <li>Beach</li>
        <li>Learn more</li>
    </ul>

    <ul className="list-unstyled">
        <li><strong>About Us</strong></li>
        <li>Road map</li>
        <li>Creators</li>
        <li>Career</li>
        <li> Contact Us</li>
    </ul>
  </div>;
}
