import {
    useEffect,
    useState
} from 'react';
import advisory from "../../api/advisory";

export default () => {
    const [resultsAdvisory, setResultsAdvisory] = useState([])
    // const [errorMessageCity, setErrorMessageCity] = useState([])
    //Sets a default search value
    useEffect(() => {
        searchApiCity('GB')
    }, [])
    const searchApiAdvisory = async searchLocation => {
        try {
            const responseAdvisory = await advisory.get(`api?countrycode=${searchLocation}`);
            setResultsAdvisory(responseAdvisory.data)
        } catch (err) {
            console.Console.log("Something went wrong");
        }
    };

    return [searchApiAdvisory, resultsAdvisory]
}