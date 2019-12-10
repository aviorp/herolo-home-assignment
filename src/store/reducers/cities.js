import { SEARCH_CITY, SELECT_CITY, GET_GEO_POSITION } from '../actions/actions'

const initialState = {
    autoCompleteOptions: [],
    city: { key: "215854", name: "Tel Aviv" },

}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SEARCH_CITY:
            let options = payload.map(option => ({ value: option.LocalizedName, label: option.LocalizedName }))
            return { ...state, autoCompleteOptions: options }
        case SELECT_CITY:
            return {
                ...state, city: { key: payload.cityKey[0].Key, name: payload.name }
            }
        case GET_GEO_POSITION:
            return {
                ...state, city: { key: payload.Key, name: payload.LocalizedName }
            }
        default:
            return state;
    }
}

export default reducer