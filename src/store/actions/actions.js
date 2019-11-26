export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  return {
    type: FETCH_WEATHER,
    payload: data
  };
};
