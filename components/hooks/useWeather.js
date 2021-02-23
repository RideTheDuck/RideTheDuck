import {
    useEffect,
    useState
} from 'react';
import weather from "../../api/weather";

export default () => {
    const [resultsWeather, setResultsWeather] = useState([])
    const [errorMessageWeather, setErrorMessageWeather] = useState([])


    const searchApiWeather = async searchLocation => {
        try {
            const responseWeather = await weather.get(`/weather?q=${searchLocation}&units=metric&appid=9ec9591a31e3be7446a43513c920d793`);
            setResultsWeather(responseWeather.data)
        } catch (err) {
            setErrorMessageWeather("Something went wrong");
        }
    };
    //Sets a default search value

    useEffect(() => {
        searchApiWeather('London')
    }, [])
    return [searchApiWeather, resultsWeather, errorMessageWeather]
}