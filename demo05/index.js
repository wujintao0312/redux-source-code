import { createStore, combineReducer } from './redux'
import countReducer from './reducers/count'
import infoReducer from './reducers/info'

const reducer = combineReducer({
  count: countReducer
})

const store = createStore(reducer)

// store.subScribe(() => {
//   console.log(store.getState())
// })

store.subScribe(() => {
  const state = store.getState()
  console.log(state.count.count)
})

store.subScribe(() => {
  const state = store.getState()
  console.log(state.info.name, state.info.description)
})

const nextReducer = combineReducer({
  count: countReducer,
  info: infoReducer
})

store.replaceReducer(nextReducer)

// store.dispatch({
//   type: 'INCREMENT'
// })

store.dispatch({
  type: 'SET_NAME',
  name: '周三的早晨'
})