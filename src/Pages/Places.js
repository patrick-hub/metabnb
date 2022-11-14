import React from "react";
import data from "../data";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Card2 from "../component/Card2";
import Options from "../component/Options";


export default function Places() {
    
  const Cards = data.map(item => {
    return (
        <Card2
        key = {item.id}
        item = {item}
        />
    )
}) 
  return <div>
    <Navbar />
    <Options />
    <div className="all--cards">
    {Cards}
    </div>
    <div className="places--footer">
    <Footer />
    </div>
  </div>;
}
