import React, { useState, useEffect } from "react";
import fetchData from "../api";
import "./Navbar.css"

const Navbar = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeaguesData = async () => {
      try {
        const response = await fetchData("leagues");
        if (response && response.response) {
          setLeagues(response.response);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchLeaguesData();
  }, []);
  

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-teams">
          <p>Teams</p>
        </div>
        <div className="navbar-games">
          <p>Games</p>
        </div>
        {leagues.map((league) => {
          if (league.id === 93) { 
            return (
              <div key={league.id}>
                <img
                  className="navbar-logo"
                  src={league.logo}
                  alt={league.name}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="navbar-standings">
          <p>Standings</p>
        </div>
        <div className="navbar-search">
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
