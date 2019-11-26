export const FETCH_WEATHER = "FETCH_WEATHER";
export const SEARCH_CITY = "SEARCH_CITY"
export const API_KEY = "u2TM3wlPeALfQJRYqRWshzTUtGG2N9WD"
export const CITY_KEY = "215854";

// Get city by autocomplete, and save city code in cityKey and city name

export const getCities = () => async dispatch => {

}

export const fetchWeather = () => async dispatch => {
  let response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${CITY_KEY}?apikey=${API_KEY}`);
  let data = await response.json();
  dispatch({ type: FETCH_WEATHER, payload: data });
};

export const searchCity = (CITY_TERM) => async dispatch => {
  let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${CITY_TERM}`)
  let data = await response.json();
  dispatch({ type: SEARCH_CITY, payload: data })
}