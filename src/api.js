import axios from "axios";

const Fetchdata = async (endpoint) => {
  const options = {
    method: "GET",
    url: `https://api-basketball.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_CLIENT_ID,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default Fetchdata;


