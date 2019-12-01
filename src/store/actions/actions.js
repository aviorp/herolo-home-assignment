export const FETCH_WEATHER = "FETCH_WEATHER";
export const SEARCH_CITY = "SEARCH_CITY";
export const SELECT_CITY = "SELECT_CITY";
export const FAVORITE_CITY = "FAVORITE_CITY";
export const SET_NAME = "SET_NAME";
export const GET_GEO_POSITION = "GET_GEO_POSITION";
export const API_KEY = "5URtJ1AyTh9PFbmVWuxCGMPKaAwcleEf";

export const toggleFavorite = (FAV_CITY_KEY, FAV_CITY_NAME) => async dispatch => {
  dispatch({ type: FAVORITE_CITY, payload: { key: FAV_CITY_KEY, name: FAV_CITY_NAME } })
}

export const setDetails = (FAV_CITY_KEY, FAV_CITY_NAME) => async dispatch => {
  dispatch({ type: SET_NAME, payload: { key: FAV_CITY_KEY, name: FAV_CITY_NAME } })
}

export const getGeoPosition = (LAT, LON) => async dispatch => {
  let response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${LAT}%2C${LON}`)
  let data = await response.json();
  dispatch({ type: GET_GEO_POSITION, payload: data })
}
export const fetchWeather = (CITY_KEY) => async dispatch => {
  let response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${CITY_KEY}?apikey=${API_KEY}`);
  let data = await response.json();
  dispatch({ type: FETCH_WEATHER, payload: data });
};

export const selectCity = (CITY_NAME) => async dispatch => {
  let response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${CITY_NAME}`)
  let data = await response.json()
  dispatch({ type: SELECT_CITY, payload: { cityKey: data, name: CITY_NAME } })
}


export const searchCity = (CITY_NAME) => async dispatch => {
  let response, data = [];
  if (CITY_NAME.trim().length > 0) {
    response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${CITY_NAME}`)
    data = await response.json();
  }
  dispatch({ type: SEARCH_CITY, payload: data })
}