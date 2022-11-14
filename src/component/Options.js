import React from "react";
import location from "../asset/locationicon.png"

export default function Options() {
  return <div className=" container options">
    <p>Restaurant</p>
    <p>Cottage</p>
    <p>Castle</p>
    <p>Fantast City</p>
    <p>beach</p>
    <p>Carbins</p>
    <p>Off-grid</p>
    <p>Farm</p>
   
<div class="location position-relative mb-4">
   <img src={location} alt=""/>
    <input class="form-control" type="search" placeholder="Location" />
</div>
  </div>;
}
