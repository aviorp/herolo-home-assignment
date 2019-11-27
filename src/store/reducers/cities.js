import { SEARCH_CITY } from '../actions/actions'

const initialState = {
    autoCompleteOptions: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_CITY:
            let options = payload.map(option => ({ value: option.LocalizedName, label: option.LocalizedName }))
            return { ...state, autoCompleteOptions: options }

        default:
            return state;
    }
}


export default reducer