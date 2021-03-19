
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
    default:
      return(state)
  }
}

export default reducer;

//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.