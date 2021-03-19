
export const initialState = {
  smurfs: [],
  loading: false,
  errorMessage: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ("BEGIN_FETCH"):
      return ({
        ...state,
        loading: true
      })
    case ("FETCH_SUCCESS"):
      return ({
        ...state,
        smurfs: action.payload,
        loading: false
      })
    case ("FETCH_FAIL"):
      return ({
        ...state,
        errorMessage: action.payload,
        loading: false
      })
    case ("ADD_SMURF"):
      return ({
        ...state,
        smurfs: [...state.smurfs, action.payload]
      })
    case ("ERROR"):
      return ({
        ...state,
        errorMessage: action.payload
      })
    default:
      return(state)
  }
}

export default reducer;