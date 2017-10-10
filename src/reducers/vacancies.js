import {
  ADD_PROJECT,
  CLOSE_PROJECT,
  REFRESH_PROJECT,
  REMOVE_PROJECT,
  ADD_VACANCY,
  CLOSE_VACANCY,
  REFRESH_VACANCY,
  REMOVE_VACANCY,
} from '../constants';

const initialState = {};

function vacancies(state = initialState, action) {
  switch (action.type) {
    case ADD_VACANCY: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case '': {
      return {
        ...state,
        isFetching: false,
        error: null,
        items: action.payload,
      };
    }

    case '': {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export default vacancies;
