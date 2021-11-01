import {types} from '../types/types';
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

export const registroEmailPasswordNombre = (email,password,name) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})

           dispatch(registroSincrono(user.email,user.uid,user.displayName))
            console.log(user);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const registroSincrono = (email,password,name) => {

    return{
       type: types.registro,
       payload: {
           email,
           password,
           name
       }
    }
}

