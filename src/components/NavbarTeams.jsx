import { useState, useEffect } from "react";
import "./NavbarTeams.css";

import boras from "../assets/borasbasket.png";
import jamtland from "../assets/jamtlandbasket.png";
import koping from "../assets/kopingbasket.png";
import lulea from "../assets/luleabasket.png";
import nassjo from "../assets/nassjobasket.png";
import norrkoping from "../assets/norrkoping.svg";
import sodertalje from "../assets/sodertaljebasket.png";
import umea from "../assets/umeabasket.png";
import uppsala from "../assets/uppsalabasket.png";

const Navbarteams = () => {
  return (
    <div className="navbarteams-container">
        <div className="allteams-container">
            <img className="navbarteams-image"src={boras} alt="borasbasket" />
            <img className="navbarteams-image"src={jamtland} alt="jamtlandbasket" />
            <img className="navbarteams-image"src={koping} alt="kopingstars" />
            <img className="navbarteams-image"src={lulea} alt="bclulea" />
            <img className="navbarteams-image"src={nassjo} alt="nassjobasket" />
            <img className="navbarteams-image"src={norrkoping} alt="norrkopingdolphins" />
            <img className="navbarteams-image"src={sodertalje} alt="sodertaljebbk" />
            <img className="navbarteams-image"src={umea} alt="umeabskt" />
            <img className="navbarteams-image"src={uppsala} alt="uppsalabasket" />
        </div>
   </div>
  );
};

export default Navbarteams;
