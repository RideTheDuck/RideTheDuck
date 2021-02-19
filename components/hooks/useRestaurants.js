import {useEffect, useState} from 'react';
import yelp from "../../api/yelp";

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState([])

  
  const searchApi = async searchLocation => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 10,
          term: "restaurants",
          location: searchLocation
        }
      });
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  //Sets a default search value
  
  useEffect(() => {
    searchApi('London')
  }, [])
  return [searchApi,results,errorMessage]
}