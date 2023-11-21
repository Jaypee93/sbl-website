import React from "react";
import "./Cards.css";
import Fetchdata from "../api";
import { useState, useEffect } from "react";

import gh from "../assets/GH.png";
import court from "../assets/ballCourt.png";

const Cards = () => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    const fetchLeaguesData = async () => {
      try {
        const response = await Fetchdata("leagues");
        if (response && response.response) {
          setLogo(response.response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaguesData();
  }, []);

  const handleOnClick = () => {
    window.location.href = "https://shows.acast.com/sbl-podden";
  };

  return (
    <div className="CardContainer">
      <div className="Card">
        <div className="playerOfTheWeek">
          <div className="Card">
            <div className="playerOfTheWeek">
              <div className="powTitle">Player of the Week!</div>
              <div className="powImage">
                <img src={gh} alt="GustavHansson" />
              </div>

              <div className="powStats">
                <div className="pts">
                  <div>PTS</div>
                  <div>24</div>
                </div>
                <div className="ass">
                  <div>ASS</div>
                  <div>8</div>
                </div>
                <div className="reb">
                  <div>REB</div>
                  <div>2</div>
                </div>
                <div className="eff">
                  <div>EFF</div>
                  <div>21</div>
                </div>
              </div>

              <div className="powName">Gustav Hansson</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Card">
        {logo.map((logo) => {
          if (logo.id === 93) {
            return (
              <div onClick={handleOnClick} className="sblPodden" key={logo.id}>
                <h2>SBL Podden</h2>
                <img className="poddContent" src={logo.logo} alt={logo.name} />
                <h2>Avsnitt 46</h2>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="Card">
        <div className="sblStartingFive">
          <div className="cardImgContainer">
            <img src={court} alt="" />
          </div>
          <div className="overlayText">
            <h2>SBL Starting 5</h2>
            <div className="Guard"></div>
          </div>
        </div>
      </div>
      <div className="Card">
        <div className="burekReport">{/* ... (your content) */}</div>
      </div>
    </div>
  );
};

export default Cards;
