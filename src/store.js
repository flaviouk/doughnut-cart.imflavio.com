import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducer as doughnuts } from 'ducks/doughnuts'

const reducers = combineReducers({
  doughnuts
})

const middleware = [thunk]
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, compose(applyMiddleware(...middleware), devTools))

export default store
