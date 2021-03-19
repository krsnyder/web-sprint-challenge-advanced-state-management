import axios from 'axios';

export const BEGIN_FETCH = "BEGIN_FETCH"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"
export const ADD_SMURF = "ADD_SMURF"
export const SET_ERROR = "SET_ERROR"

const fetchSmurfs = () => {
  return (dispatch => {
    console.log("Fetching....")
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

export const setError = err => {
  return({type:SET_ERROR, payload:err})
}

export default fetchSmurfs