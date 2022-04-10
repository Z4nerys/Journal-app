import { types } from '../types/types'

//accion asincrona
//todas las acciones asyncronas que quiera realizar. las puedo hacer asi
export const startLoginEmailPassword = (email, password)=>{
    //regresa un callback
    return ( dispatch ) =>{
        //el dispatch lo obtengo de thunk
        setTimeout(() => {
            dispatch( login( 123, 'Gasty') )
        }, 3500);
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})