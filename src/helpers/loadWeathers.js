import { db } from '../firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'


export const loadWeathers = async (id) => {
    console.log('hola',id)
    const querySnapshot = await getDocs(collection(db,`${id}/weathers/data`));
    const cardsList = [];
    
    querySnapshot.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })


    return cardsList
}

