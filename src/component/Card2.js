import React from "react";

export default function Placetostay(props) {
  
  return <div className="container all--cards mt-3">

     <div className="card">
    <img src={`./Images/${props.item.img}`}alt="" className="card--img mx-auto p-2" />
    <div className="card--stats p-3">
    <span>{props.item.name}</span>
    <span className="mx-3"><strong>1MBT</strong><span className="mx-2">{props.item.duration}</span></span>
    <span>{props.item.distance}</span>
    <span>{props.item.availability}</span>
    <img src={props.item.start} alt="" />
    </div>
  </div>
  </div>;
}
