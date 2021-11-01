import {types} from '../types/types';


export const registroReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registro:

        return{
           email: action.payload.email,
           password: action.payload.password,
           name: action.payload.name
        }

        default:
          return state;
    }
}