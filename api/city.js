import axios from "axios";

export default axios.create({
  baseURL: "https://restcountries.eu/rest/v2/capital/"
});

// axios.get(`${cityName}`)
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