import { types } from '../types/types'

const initialState = {
    weathers: [],
    active: {
        id: '',
        dia: '',
        fecha: '',
        ciudad: '',
        pais: '',
        tipoClima: ''
    }
}

export const weathersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.weathersAddNew:
            return {
                ...state, 
                weathers: [action.payload, ...state.weathers]
            }

        case types.weathersLoad:
            return {
                ...state,
                weathers: [...action.payload]
            }

        case types.weathersActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
            return state
    }
}
