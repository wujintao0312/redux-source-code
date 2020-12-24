let initState = {
  name: '我是前端爱好者',
  description: '这是前端十八部进阶教程'
}

export default function info(state, action) {
  if (!state) {
    state = initState
  }
  switch(action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state
  }
}