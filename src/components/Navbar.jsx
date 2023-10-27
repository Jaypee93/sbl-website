import { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
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
          Standings
        </div>
        <div className="navbar-search">
          Search
        </div>
      </div>
    </div>
  );
};

export default Navbar;
