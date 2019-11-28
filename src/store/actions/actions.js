export const FETCH_WEATHER = "FETCH_WEATHER";
export const SEARCH_CITY = "SEARCH_CITY"
export const SELECT_CITY = "SELECT_CITY"
export const API_KEY = "cEfGacG4IeFSEzbGpBxTIGAoPlcmqQyA"

// Get city by autocomplete, and save city code in cityKey and city name

export const selectCity = (CITY_NAME) => async dispatch => {
  let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=cEfGacG4IeFSEzbGpBxTIGAoPlcmqQyA&q=${"tel aviv"}`)
  let data = await response.json()
  console.log(data)
  dispatch({ type: SELECT_CITY, payload: { cityKey: data, name: CITY_NAME } })
}

export const fetchWeather = (CITY_KEY) => async dispatch => {
  let response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${CITY_KEY}?apikey=${API_KEY}`);
  let data = await response.json();
  dispatch({ type: FETCH_WEATHER, payload: data });
};

export const searchCity = (CITY_NAME) => async dispatch => {
  let response, data = [];
  if (CITY_NAME.trim().length > 0) {
    response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${CITY_NAME}`)
    data = await response.json();
  }
  dispatch({ type: SEARCH_CITY, payload: data })
}