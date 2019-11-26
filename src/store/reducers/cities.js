import { SEARCH_CITY } from '../actions/actions'

const initialState = {
    cities: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_CITY:
            return { ...state, cities: payload }

        default:
            return state;
    }
}


export default reducer