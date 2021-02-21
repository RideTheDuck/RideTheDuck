import {useEffect, useState} from 'react';
import flight from "../../api/flight";
import moment from 'moment';


export default () => {
  const [resultsFlight, setResultsFlight] = useState([])
  const [resultsDestinationCityCode, setResultsDestinationCityCode] = useState([])
  const [errorMessageCityCode, setErrorMessageCityCode] = useState([])
  const [errorMessageFlight, setErrorMessageFlight] = useState([])
  
  const dateFrom = moment(new Date()).format('DD/MM/YYYY')
  const dateTo = moment().add(3, 'months').format('DD/MM/YYYY')

  const searchApiFlight = async searchLocation => {
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
        setResultsDestinationCityCode(responseDestinationCityCode.data.locations[0].city.code)
 
      const responseFlight = await flight.get(`/flights?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
        params: {
          fly_from: 'LON',
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

  useEffect(() => {
  }, [resultsFlight])
  
  useEffect(() => {
    searchApiFlight(resultsDestinationCityCode)
  }, [resultsDestinationCityCode])

  return [searchApiFlight,resultsFlight,errorMessageFlight, errorMessageCityCode]
}
