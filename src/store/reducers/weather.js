import { FETCH_WEATHER } from '../actions/actions'

const initialState = {
  weather: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return { ...state, weather: payload };

    default:
      return state;
  }
};

export default reducer;
