import {createStore} from 'redux'
import {combineReducers} from 'redux'
import pizzaReducer from './reducers/pizzaReducer'

const rootReducer = combineReducers({
    pizzaState: pizzaReducer,
    // userState: userReducer
})

const store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store