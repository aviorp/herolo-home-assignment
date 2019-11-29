export const FETCH_WEATHER = "FETCH_WEATHER";
export const SEARCH_CITY = "SEARCH_CITY";
export const SELECT_CITY = "SELECT_CITY";
export const FAVORITE_CITY = "FAVORITE_CITY";
export const SET_NAME = "SET_NAME";
export const API_KEY = "F0crIEDPMJHXKKkU8bQuqSr3PAPIGO3M";

export const toggleFavorite = (FAV_CITY_KEY, FAV_CITY_NAME) => async dispatch => {
  dispatch({ type: FAVORITE_CITY, payload: { key: FAV_CITY_KEY, name: FAV_CITY_NAME } })
}

export const setDetails = (FAV_CITY_KEY, FAV_CITY_NAME) => async dispatch => {
  dispatch({ type: SET_NAME, payload: { key: FAV_CITY_KEY, name: FAV_CITY_NAME } })
}

export const selectCity = (CITY_NAME) => async dispatch => {
  let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${CITY_NAME}`)
  let data = await response.json()
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