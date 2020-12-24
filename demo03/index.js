import createStore from './redux/createStore'
import combineReducer from './redux/combineReducer'

import counterReducer from './reducer/counterReducer'
import infoReducer from './reducer/infoReducer'

const reducer = combineReducer({
  counter: counterReducer,
  info: infoReducer
})

let initState = {}

const store = createStore(reducer, initState)

store.subScribe(() => {
  let state = store.getState()
  console.log(state.counter.count)
})

store.subScribe(() => {
  let state = store.getState()
  console.log(state.info.name, state.info.description)
})

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: '学习redux他不香吗'
})

store.dispatch({
  type: 'SET_DESCRIPTION',
  description: '香，是真香！'
})