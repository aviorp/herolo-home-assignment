import { SEARCH_CITY, SELECT_CITY } from '../actions/actions'

const initialState = {
    autoCompleteOptions: [],
    city: { key: 215854, name: "Tel Aviv" }
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_CITY:
            let options = payload.map(option => ({ value: option.LocalizedName, label: option.LocalizedName }))
            return { ...state, autoCompleteOptions: options }
        case SELECT_CITY:
            return {
                ...state, city: { key: payload.data[0].Key, name: payload.CITY_NAME }
            }
        default:
            return state;
    }
}


export default reducer