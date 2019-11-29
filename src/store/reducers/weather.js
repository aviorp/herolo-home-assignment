import { FETCH_WEATHER, SET_NAME } from '../actions/actions'

const initialState = {
  weather: null,
  favCityName: ""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return { ...state, weather: payload };
    case SET_NAME: return {
      ...state, favCityName: payload
    }
    default:
      return state;
  }
};

export default reducer;
