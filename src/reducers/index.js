// Объеденяет все редьюсеры
import { combineReducers } from "redux"
// Первый - позволяет создать store, второй - подключить redux-thunk
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import getItems from "./reducer"

const rootReducers = combineReducers({
  mainReducer: getItems,
})

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)
