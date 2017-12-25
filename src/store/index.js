// DEVELOPMENT
// import {createStore, applyMiddleware, compose} from 'redux'
// import {createLogger} from 'redux-logger'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
//
// import rootReducer from '../reducers'
// const enhancer = composeWithDevTools(
//   applyMiddleware(thunk, createLogger())
// )
//
// export default function configureStore (initialState) {
//   return createStore(rootReducer, initialState, enhancer)
// }

// PRODUCTION
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
};
