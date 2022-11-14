import home from "../asset/home.png"
import metabnb from "../asset/metabnb.svg"
import {Link} from "react-router-dom";
import React from "react";
import ConnectModal from "./ConnectModal";
export default function Navbar(){
    return(
        <div >
            <nav id="mynav" className="navbar navbar-expand-lg navbar-light nav-pad">
                <div className="container-fluid">
                    <div>
                    <img src={home} alt="logo" />
                <img src={metabnb} alt="logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 nav-fon">
                            <li className="nav-item ms-4 nav-font">
                            <Link to="../Pages/Home" className="text-decoration-none text-dark">Home</Link>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                           <Link to="../Pages/Places" className="text-decoration-none text-dark">Place to stay</Link>
                           </li>
                            <li className="nav-item ms-4 nav-font">
                                NFTs
                            </li>
                            <li className="nav-item ms-4 nav-font">
                               Community
                            </li>
                        </ul>
                        <div>
                <ConnectModal />
                </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}