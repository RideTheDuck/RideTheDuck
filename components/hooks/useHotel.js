import { useEffect, useState } from 'react';
import yelp from "../../api/yelp";

export default () => {
  const [resultsHotel, setResultsHotel] = useState([])
  const [errorMessageHotel, setErrorMessageHotel] = useState([])


  const searchApiHotel = async searchLocation => {
    try {
      const responseHotel = await yelp.get("/search", {
        params: {
          limit: 10,
          term: "hotels",
          location: searchLocation
        }
      });
      setResultsHotel(responseHotel.data.businesses)
      console.log(responseHotel.data.businesses)
    } catch (err) {
      setErrorMessageHotel("Something went wrong");
    }
  };
  //Sets a default search value

  useEffect(() => {
    searchApiHotel('London')
  }, [])
  return [searchApiHotel, resultsHotel, errorMessageHotel]
}