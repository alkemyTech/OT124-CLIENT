import { GET_ORGANIZATION } from "./constants"

export const initialState = {
    organizationEdit: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORGANIZATION:
            return {
                ...state,
                organizationEdit: action.payload,

            }

        default: return state
    }
}
