import {configureStore,combineReducers} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import ressourcesReducer from './ressourcesSlice'
const store=configureStore({
    reducer:combineReducers({
        ressources:ressourcesReducer,
        current:currentReducer
    }),
    devTools:true
})
// store.subscribe(()=>{
//     console.trace(store.getState())
// })
// store.dispatch({type:'toto'})
// store.dispatch({type:'current/update', payload:{titre:'coucou'}})
// store.dispatch({type:'current/clear'})
export default store