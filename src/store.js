import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { recipeReducer } from './reducers/recipes'

const reducers = combineReducers({
  recipes: recipeReducer,
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store