import React from "react";
import heroImages from "../asset/heroImages.svg"


export default function Hero() {
  return <div className=" hero px-5">
    <div className="hero_content">
    <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>metaverse</span></h2>
    <p>we provide you access to luxury and affordable houses in the metaverse, 
        get a chance to turn your imagination to reality at your comfort zone</p>

        <form className="d-flex search">
        <input className="form-control me-2" type="search" placeholder="Search for location" aria-label="Search" />
        <button className="searchBtn" type="submit">Search</button>
      </form>
    </div>
   
    <div className="heroImages">
        <img src={heroImages} alt=""/>
    </div>
    </div>
   
}
