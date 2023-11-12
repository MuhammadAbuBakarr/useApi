import axios from "axios";
const useAxios = () => {
  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: "YOUR BASE URL HERE",
  });
  //   Automatically Set Token into Header.
  if (token) {
    // Add Your Headers Here
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      token
    )}`;
  }
  //   You can use api for calls without useApi
  return api;
};

export default useAxios;
