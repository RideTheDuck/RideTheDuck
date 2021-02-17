import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer uYXAgYZ8zy0drIEyAfnFZFhAja1kZ_uUdRK_-hz1BoByAaJ8mkRgWbHu1-VHfANt8QQBhm2Wiru-72dIKVoMnWxuYWne2iOfJjqGNX9uzniX9HKjxJNOPmPbeF0tYHYx"
  }
});