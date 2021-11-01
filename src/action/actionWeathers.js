import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import { loadWeathers } from '../helpers/loadWeathers'


//getSate extrae el id de la base de datos

export const WeathersNew = (weathers) => {
    return async (dispatch, getSate) => {
        const id = getSate().login.id
        console.log(id);
        const newCard = {
            dia: weathers.dia,
            fecha: weathers.fecha,
            ciudad: weathers.ciudad,
            pais: weathers.pais,
            tipoClima: weathers.tipoClima
        }

        await addDoc(collection(db, `${id}/weathers/data`), newCard);
        dispatch(addNewWeathers(newCard))
    }
}

export const addNewWeathers = (weathers) => ({
    type: types.weathersAddNew,
    payload: {
        ...weathers
    }
})


//Listar
export const Listar = (uid) => {
    return async (dispatch) => {
        const cards = await loadWeathers(uid)
        dispatch(setWeathers(cards))
    }
}

export const setWeathers = (weathers) => {
    return {
        type: types.weathersLoad,
        payload: weathers
    }
}

//Actualizar 
export const activeWeathers = (id, weathers) => {
    return {
        type: types.weathersActive,
        payload: {
            id,
            ...weathers
        }
    }
}

export const Edit = (weathers) => {
    return async (dispatch, getState) => {
        const id = getState().login.id;
        console.log(weathers)

        const EditCard = {
            dia: weathers.dia,
            fecha: weathers.fecha,
            ciudad: weathers.ciudad,
            pais: weathers.pais,
            tipoClima: weathers.tipoClima
        }

        const cardFire = { ...EditCard }
        delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
        
        const docRef = await doc(db, `${id}/weathers/data`, `${weathers.id}`);
        console.log(docRef)
        
        const updateTimestamp = await updateDoc(docRef, {
            dia: weathers.dia,
            fecha: weathers.fecha,
            ciudad: weathers.ciudad,
            pais: weathers.pais,
            tipoClima: weathers.tipoClima
        });

        Swal.fire('Saved', weathers.dia, 'success');
        dispatch(Listar(id))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().login.id;
        await deleteDoc(doc(db, `${uid}/weathers/data`, `${id}`));


        dispatch(deleteWeathers(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(Listar(uid))
    }
}

export const deleteWeathers = (id) => ({
    type: types.weathersDelete,
    payload: id
});