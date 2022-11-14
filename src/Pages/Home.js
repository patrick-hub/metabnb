import React from "react";
import Card from "../component/Card";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import Metabnb from "../component/Metabnb";
import Token from "../component/Token";
import Navbar from "../component/Navbar";

export default function Home() {
  return <div>
    <Navbar/>
    <Hero />
    <Token />
    <Card />
    <Metabnb />
    <Footer />
  </div>;
}
