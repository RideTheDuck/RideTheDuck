import {useEffect, useState} from 'react';
import city from "../../api/city";

export default () => {
  const [resultsCity, setResultsCity] = useState([])
  const [errorMessageCity, setErrorMessageCity] = useState([])
  //Sets a default search value
  useEffect(() => {
    searchApiCity('London')
  }, [])
  const searchApiCity = async searchLocation => {
    try {
      const responseCity = await city.get(`/${searchLocation}`);
      setResultsCity(responseCity.data)
    } catch (err) {
      setErrorMessageCity("Something went wrong");
    }
  };
  
  return [searchApiCity,resultsCity,errorMessageCity]
}