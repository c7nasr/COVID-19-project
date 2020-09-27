import Axios from "axios";

const axiosConfig = Axios.create({
  // .. where we make our configurations
  baseURL: "https://covideg.herokuapp.com/api/eg/"
});

// Where you would set stuff like your 'Authorization' header, etc ...

// Also add/ configure interceptors && all the other cool stuff

export default axiosConfig;
