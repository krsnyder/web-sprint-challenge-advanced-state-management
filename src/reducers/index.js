import {BEGIN_FETCH, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, SET_ERROR} from '../actions'

export const initialState = {
  smurfs: [],
  loading: false,
  errorMessage: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_FETCH:
      return ({
        ...state,
        loading: true,
        error: ""
      })
    case FETCH_SUCCESS:
      return ({
        ...state,
        smurfs: action.payload,
        loading: false
      })
    case FETCH_FAIL:
      return ({
        ...state,
        errorMessage: action.payload,
        loading: false
      })
    case ADD_SMURF:
      return ({
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            position: action.payload.position,
            nickname: action.payload.nickname,
            description: action.payload.description
          }
        ]
      })
    case SET_ERROR:
      return ({
        ...state,
        errorMessage: action.payload
      })
    default:
      return(state)
  }
}

export default reducer;