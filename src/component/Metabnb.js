import React from "react";
import metahouses from "../asset/metahouses.png"

export default function Metabnb() {
  return <div className="metabnb p-5 ">

    <div className="meta_content">
    <h2> Metabnb NFTs</h2>
    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
    
    <button type="submit">Learn More</button>
    </div>
    

    <div className="p-5 metaImg">
    <img src={metahouses} alt="" />
  
    </div>
  </div>;
}
