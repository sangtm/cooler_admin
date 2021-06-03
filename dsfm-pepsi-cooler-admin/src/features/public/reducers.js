import * as actionTypes from './actionTypes';

const initialState = {
  provinces: [],
  districts: [],
  wards: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_PROVINCES_SUCCESS: {
      return {
        ...state,
        provinces: action.payload.data
      }
    }

    case actionTypes.GET_DISTRICTS_SUCCESS: {
      return {
        ...state,
        districts: action.payload.data
      }
    }

    case actionTypes.GET_WARDS_SUCCESS: {
      return {
        ...state,
        wards: action.payload.data
      }
    }

    default: {
      return state;
    }
  }
}