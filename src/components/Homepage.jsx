import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import Navbar from "./Navbar";
import Navbarteams from "./NavbarTeams";

const Homepage= ()  => {
  const [swedenData, setSwedenData] = useState(null);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://api-basketball.p.rapidapi.com/leagues",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_CLIENT_ID,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setLeagues(response.data.response); // Set leagues in state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
        <div className="homepage-container">
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