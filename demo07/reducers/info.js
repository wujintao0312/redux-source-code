let initState = {
  name: '我们都是前端爱好者',
  desc: '热爱无止境'
}

export default function info(state, action) {
  if (!state)  state = initState
  switch(action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESC':
      return {
        ...state,
        desc: action.desc
      }
    default:
      return state
  }
}