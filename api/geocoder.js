import axios from "axios";

export default axios.create({
  baseURL: "https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?",
  headers: {
    Authorization: "dEDr1d2fElf2NkRMsb18f9ICjwTzph-bzRBjUEWiAg"
  }
});