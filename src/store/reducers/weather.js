import * as actionTypes from "./actions/actions";

const initialState = {
  weather: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (actionTypes) {
    case actionTypes.FETCH_WEATHER:
      console.log(actionTypes.FETCH_WEATHER);
  }
};

export default reducer;
