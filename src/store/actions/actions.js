export const FETCH_WEATHER = "FETCH_WEATHER";
export const SEARCH_CITY = "SEARCH_CITY"
export const API_KEY = "x3rzNoXKRWaD8GAEYmeG1d22WWt6L3TF"
// export const CITY_KEY = "215854";

// Get city by autocomplete, and save city code in cityKey and city name

export const getCities = () => async dispatch => {

}

export const fetchWeather = (CITY_KEY) => async dispatch => {
  let response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${CITY_KEY}?apikey=${API_KEY}`);
  let data = await response.json();
  dispatch({ type: FETCH_WEATHER, payload: data });
};

export const searchCity = (CITY_TERM) => async dispatch => {
  let response, data = [];
  if (CITY_TERM.trim().length > 0) {
    response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${CITY_TERM}`)
    data = await response.json();
  }
  dispatch({ type: SEARCH_CITY, payload: data })
}