import React from "react";
import opensea from "../asset/opensea.png"
import metamask from "../asset/metamask.png"
import token from "../asset/token.png"

export default function Token() {
  return  <div className="token_footer bg-dark mt-3 ">
  <img src={token} alt=""/>
<img src={metamask} alt=""/>
<img src={opensea} alt=""/>
      
  </div>
}
