import {useEffect, useState} from 'react';
import yelp from "../../api/yelp";

export default () => {
  const [resultsLandmark, setResultsLandmark] = useState([])
  const [errorMessageLandmark, setErrorMessageLandmark] = useState([])

  
  const searchApiLandmark = async searchLocation => {
    try {
      const responseLandmark = await yelp.get("/search", {
        params: {
          limit: 10,
          term: "landmarks",
          location: searchLocation
        }
      });
      setResultsLandmark(responseLandmark.data.businesses)
      console.log(responseLandmark.data.businesses)
    } catch (err) {
      setErrorMessageLandmark("Something went wrong");
    }
  };
  //Sets a default search value
  
  useEffect(() => {
    searchApiLandmark('London')
  }, [])
  return [searchApiLandmark,resultsLandmark,errorMessageLandmark]
}