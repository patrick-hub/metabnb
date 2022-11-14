import React from "react";
import home from "../asset/home.png"
import metabnb from "../asset/metabnb.svg"
import {Link} from "react-router-dom"
import ConnectModal from "./ConnectModal";


export default function Navbar() {

  return <div className="navbar pt-3">
 <div className="nav_image">
 <img src={home} alt="" />
<img src={metabnb} alt="" />
 </div>   
<ul className="d-flex nav list-unstyled justify-content-around gap-4 pt-4">
    <li><Link to="../Pages/Home" className="text-decoration-none text-dark">Home</Link></li>
    <li className="pts text-decoration-none"><Link to="../Pages/Places" className="text-decoration-none text-dark">Place to stay</Link></li>
    <li>NFTS</li>
    <li>Community</li>
</ul>
<div>
  <ConnectModal />
</div>
  </div>;
}
