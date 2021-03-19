import axios from 'axios';

export const BEGIN_FETCH = "BEGIN_FETCH"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"
export const ADD_SMURF = "ADD_SMURF"
export const ERROR = "ERROR"

export const fetchSmurfs = () => {
  return (dispatch => {
    dispatch({type: BEGIN_FETCH})
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({type:FETCH_SUCCESS, payload:res.data})
      })
      .catch(err => {
        dispatch({ type: FETCH_FAIL, payload: err })
    })
  })
}

export const addSmurf = smurfInfo => {
  return({type:ADD_SMURF, payload:smurfInfo})
}

export const errorMessage = err => {
  return({type:ERROR, payload:err})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.