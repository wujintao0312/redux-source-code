let initState = {
  name: '我我外地生',
  description: '富士康开发技术'
}

export default function info(state, action) {
  if(!state) {
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
        descrription: action.description
      }
    default:
      return state
  }
  
}