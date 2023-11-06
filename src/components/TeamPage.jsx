import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "./Navbar"

import './TeamPage.css'


const TeamPage = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const options = {
            method: "GET",
            url: "https://api-basketball.p.rapidapi.com/teams",
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_CLIENT_ID,
              "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            },
          };
    
          try {
            const response = await axios.request(options);
            setTeams(response.data.response); 
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    return (

        <div>
            <Navbar/>
            
        </div>
    )

}

export default TeamPage