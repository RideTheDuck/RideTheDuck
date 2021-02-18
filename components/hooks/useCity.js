import {useEffect, useState} from 'react';
import city from "../../api/city";

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState([])

  
  const searchApi = async searchLocation => {
    try {
      const response = await city.get(`/${searchLocation}`);
      setResults(response.data[0])
      console.log(setResults)
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