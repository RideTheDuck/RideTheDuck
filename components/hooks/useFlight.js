import {useEffect, useState} from 'react';
import flight from "../../api/flight";
import { duration } from 'moment';
import { Use } from 'react-native-svg';
import moment from 'moment';


export default () => {
  const [resultsFlight, setResultsFlight] = useState([])
  const [resultsDestinationCityCode, setResultsDestinationCityCode] = useState([])
  const [errorMessageFlight, setErrorMessageFlight] = useState([])
  const [errorMessageCityCode, setErrorMessageCityCode] = useState([])
  const dateFrom = moment(new Date()).format('DD/MM/YYYY')
  const dateTo = moment().add(3, 'months').format('DD/MM/YYYY')
  
  const searchDestinationCityCode = async searchLocation => {
    try {
      const responseDestinationCityCode = await flight.get("/locations?", {
        params: {
          term: searchLocation,
          locale: 'en-US',
          location_types: 'airport',
          limit: 10,
          sort:'name',
          active_only:'true',
        }
      });
      console.log('searchign name')
      setResultsDestinationCityCode(responseDestinationCityCode.data.locations[0].city.code)
      searchApiFlight(resultsDestinationCityCode);
    } catch (err) {
      setErrorMessageCityCode("Could not find destination city code");
    }
  };

  const searchApiFlight = async resultsDestinationCityCode => {
    console.log('searching flights...')
    console.log(resultsDestinationCityCode)
    try {
      const responseFlight = await flight.get(`/flights?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
        params: {
          fly_from: 'PAR',
          fly_to: resultsDestinationCityCode,
          limit: 10,
          sort: 'duration',
          partner: 'picky',
          v: 3
        }
      });
      let flightsArray = []
      let data = responseFlight.data.data
        for (let i = 0; i < data.length; i++) {
          flightsArray.push({
            cityFrom: data[i].cityFrom,
            countryFrom: data[i].countryFrom.name,
            cityTo: data[i].cityTo,
            countryTo: data[i].countryTo.name,
            flightDuration: data[i].fly_duration,
            currency: Object.keys(data[i].conversion)[0],
            price: Object.values(data[i].conversion)[0],
            flightDate: moment(new Date(data[i].aTime * 1000)).format('LLLL'),
            link: data[i].deep_link
          })
        }
      setResultsFlight(flightsArray)
    } catch (err) {
      setErrorMessageFlight("Something went wrong");
    }
  };
  //Sets a default search value
  
  useEffect(() => {
    searchApiFlight('LON')
  }, [])

  return [searchApiFlight,resultsFlight,errorMessageFlight, errorMessageCityCode]
}