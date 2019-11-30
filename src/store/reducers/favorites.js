import { FAVORITE_CITY } from "../actions/actions";
const initialState = {
  favorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_CITY: {
      let favoriteIndex = state.favorites.findIndex(el => el.key === payload.key)
      if (favoriteIndex === -1) {
        return {
          favorites: [
            ...state.favorites, payload
          ]
        }
      } else
        if (favoriteIndex !== -1) {
          let newFavorites = state.favorites.slice();
          newFavorites.splice(favoriteIndex, 1)
          return {
            ...state, favorites: newFavorites
          }
        }
    }
    // eslint-disable-next-line
    default:
  }
  return state;
};

export default reducer;
