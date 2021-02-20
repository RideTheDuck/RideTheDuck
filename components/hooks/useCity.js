import {useEffect, useState} from 'react';
import city from "../../api/city";

export default () => {
  const [resultsCity, setResultsCity] = useState([])
  const [errorMessageCity, setErrorMessageCity] = useState([])

  
  const searchApiCity = async searchLocation => {
    try {
      const responseCity = await city.get(`/${searchLocation}`);
      setResultsCity(responseCity.data[0])
    } catch (err) {
      setErrorMessageCity("Something went wrong");
    }
  };
  //Sets a default search value
  useEffect(() => {
    searchApiCity('London')
  }, [])
  return [searchApiCity,resultsCity,errorMessageCity]
}

// axios.get(`https://restcountries.eu/rest/v2/capital/${cityName}`)
//     .then(res => {
//       name = res.data[0].name
//       timezone = res.data[0].timezones[0]
//       flag = res.data[0].flag
//       currency = res.data[0].currencies[0].code
//       language = res.data[0].languages[0].name
//       capital = res.data[0].capital
//       this.setState({
//         searchResults: res.data[0],
//         isShowingResults: true
//       })
//     })