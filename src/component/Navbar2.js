import React from "react";
import home from "../asset/home.png"
import metabnb from "../asset/metabnb.svg"
import { Link } from "react-router-dom";
import ConnectModal from "./ConnectModal";

export default function Navbar2() {
return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div className="nav_image">
 <img src={home} alt="" />
<img src={metabnb} alt="" />
 </div> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="../Pages/Home" className="text-decoration-none text-dark">Home</Link>
        </li>
        <li className="nav-item pts text-decoration-none"><Link to="../Pages/Places" className="text-decoration-none text-dark">Place to stay</Link></li>

        <li class="nav-item">
        NFTS
        </li>
        <li class="nav-item">
        Community
        </li>
      </ul>
      <div className="collapse navbar-collapse connect-button" id="navbarNav">
  <ConnectModal />
</div>
    </div>
  
  </div>
</nav>
)
}


