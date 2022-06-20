import React from "react";
import backgroundVid from "../../assets/videos/Background Video.mp4";
import logo from "../../assets/images/Logo.png";

function Hero() {


  return (
    <section id="hero">
    <video autoplay muted loop id="video">
        <source src={backgroundVid} type="video/mp4" />
    </video>
    <div class="overlay">
        <img src={logo} alt="Kevin Heaton Software Engineer" />
    </div>
</section>
  )
}

export default Hero;