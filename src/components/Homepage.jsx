import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import Navbar from "./Navbar";
import Navbarteams from "./NavbarTeams";
import TeamPage from "./TeamPage";
import Cards from "./Cards";
import alex from "../assets/alexsbl2.png";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <TeamPage />
      <Navbar />
      <Navbarteams />
      <img style={{ width: "100%", minHeight: "100%" }} src={alex} alt="" />
      <Cards />
      {/* <div className="leagues-container">
            {leagues.map((league) => {
              if (league.id === 93) {
                return (
                  <div className="league-info" key={league.id}>
                    <h3>{league.name}</h3>
                    <img src={league.logo} alt={league.name} />
                    <p>Season: {league.seasons[0].season}</p>
                    <p>Start Date: {league.seasons[0].start}</p>
                    <p>End Date: {league.seasons[0].end}</p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div> */}
    </div>
  );
};

export default Homepage;
