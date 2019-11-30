import { FETCH_WEATHER, SET_NAME } from '../actions/actions'

const initialState = {
  weather: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return { ...state, weather: payload };
    case SET_NAME: return {
      ...state, favCity: payload
    }
    default:
      return state;
  }
};

export default reducer;
