import { FAVORITE_CITY } from "../actions/actions";

const initialState = {
  favorites: [{ key: 215854 }]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_CITY: {
      let favoriteIndex = state.favorites.findIndex(el => el.key === payload.key)
      if (favoriteIndex === -1) {
        state.favorites.push(payload)
      } else {
        state.favorites.splice(favoriteIndex, 1)
      }
      console.log(state.favorites)
    }
      break;
    default:
      return state;
  }
};

export default reducer;
