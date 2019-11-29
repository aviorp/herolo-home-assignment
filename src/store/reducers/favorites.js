import { FAVORITE_CITY } from "../actions/actions";

const initialState = {
  favorites: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_CITY: {
      return {

      }
    }
    default:
      return state;
  }
};

export default reducer;
