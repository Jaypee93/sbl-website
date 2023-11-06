import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import Navbar from "./Navbar";
import Navbarteams from "./NavbarTeams";
import TeamPage from "./TeamPage";

const Homepage= ()  => {
  const [swedenData, setSwedenData] = useState(null);
  const [leagues, setLeagues] = useState([]);


  return (
        <div className="homepage-container">
          <TeamPage/>
                <Navbar/>
                <Navbarteams />
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

}

export default Homepage;