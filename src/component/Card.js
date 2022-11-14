import React from "react";
import frame1 from "../asset/Frame1.png"
import star from "../asset/starrating.png"
import frame2 from "../asset/Frame2.svg"
import frame3 from "../asset/Frame3.svg"
import frame4 from "../asset/Frame4.svg"
import frame5 from "../asset/Frame5.svg"
import frame6 from "../asset/Frame6.svg"
import frame7 from "../asset/Frame7.svg"
import frame8 from "../asset/Frame8.svg"

export default function Card() {
  return <div className="card--section px-4">
    <h2>Inspiration for your next adventure</h2>
     <div className="all--cards">
      <div className="card ">
    <img src={frame1}alt="" className="card--img mx-auto p-2" />
    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame2}alt="" className="card--img mx-auto p-3" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame3}alt="" className="card--img mx-auto p-2" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame4}alt="" className="card--img mx-auto p-2" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame5}alt="" className="card--img mx-auto p-2" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame6}alt="" className="card--img mx-auto p-2" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame7}alt="" className="card--img mx-auto p-2" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>

  <div className="card">
    <img src={frame8}alt="" className="card--img mx-auto p-2" />

    <div className="card--stats p-3">
    <span>Desert King</span>
    <span className="mx-4"><strong>1MBT</strong> per night</span>
    <span>2345km away</span>
    <span>available for 2weeks stay</span>
    <img src={star} alt="" />
    </div>
  </div>
  </div>
  </div>
  
}
