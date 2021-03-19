
export const initialState = {
  smurfs: [],
  loading: false,
  errorMessage: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ("SMURF_FETCH"):
      return ({
        ...state,
        smurfs: action.payload
      })
    default:
      return(state)
  }
}

export default reducer;

//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.