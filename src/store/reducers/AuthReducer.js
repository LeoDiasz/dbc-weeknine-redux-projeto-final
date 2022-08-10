const INITIAL_STATE = {
  loading: true,
  token: null
}

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "auth/signIn":
      return {
        ...state,
        token: action.token,
        loading: false,
      }

    case "auth/signOut":
      return {
        ...state,
        token: null
      }

    case "auth/isAuth":
      return {
        ...state,
        token: action.token
      }

    case "auth/isLoading":
      return {
        ...state,
        loading: false
      }
    
    default:
      return state
  }

}