//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//linea de codigo para inicializar redux y poder usarlo en el navegador
import { types } from "../types/types";
/*
{
    uid: 'dasdas',
    name: 'Gaston'
}
*/

export const authReducer = (state={}, action) =>{
    
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return{ }

        default:
            return state
    }
}