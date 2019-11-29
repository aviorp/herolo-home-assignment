import favoritesReducer from "./favorites";
import weatherReducer from "./weather";
import citiesReducer from './cities'
import { combineReducers } from "redux";



export default combineReducers({
  weather: weatherReducer,
  favorites: favoritesReducer,
  cities: citiesReducer
});
