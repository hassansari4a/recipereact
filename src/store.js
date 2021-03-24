import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { recipeReducer } from './reducers/recipes'

const reducers = combineReducers({
  recipes: recipeReducer,
})

const initialState = {
  recipes: localStorage.getItem('recipeData')? JSON.parse(localStorage.getItem('recipeData')) : []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store