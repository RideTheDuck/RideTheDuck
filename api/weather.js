import axios from "axios";

export default axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5"
});