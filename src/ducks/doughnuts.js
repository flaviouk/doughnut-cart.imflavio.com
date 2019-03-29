import { getLocalStorage, setLocalStorage } from 'utils'
import data from 'data'

const types = {
  DOUGHNUTS_ATTEMPT_LOAD: 'DOUGHNUTS_ATTEMPT_LOAD',
  DOUGHNUTS_LOAD_SUCCESS: 'DOUGHNUTS_LOAD_SUCCESS',
  DOUGHNUTS_LOAD_FAIL: 'DOUGHNUTS_LOAD_FAIL'
}

export const actions = {
  attemptLoad: () => dispatch => {
    dispatch({ type: types.DOUGHNUTS_ATTEMPT_LOAD })

    // this would ideally be an environment variable
    if (process.env.NODE_ENV === 'production') {
      dispatch(actions.loadSuccess(data.doughnuts))
    } else {
      fetch('http://localhost:4000/doughnuts')
        .then(res => res.json().then(data => dispatch(actions.loadSuccess(data))))
        .catch(actions.loadFail)
    }
  },

  loadSuccess: data => ({ type: types.DOUGHNUTS_LOAD_SUCCESS, data }),

  loadFail: error => ({ type: types.DOUGHNUTS_LOAD_FAIL, error })
}

const initialState = {
  isLoading: true,
  data: getLocalStorage('DOUGHNUTS') || [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DOUGHNUTS_ATTEMPT_LOAD:
      return Object.assign(state, { isLoading: true })
    case types.DOUGHNUTS_LOAD_SUCCESS:
      setLocalStorage('DOUGHNUTS', action.data)
      return { isLoading: false, data: action.data, error: '' }
    case types.DOUGHNUTS_LOAD_FAIL:
      return { isLoading: false, data: state.data, error: action.error.toString() }
    default:
      return state
  }
}
