/* eslint-disable no-shadow */
import {
  REMOVE_PROJECT,
  ADD_VACANCY,
  OPEN_CLOSE_VACANCY,
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

    case REMOVE_VACANCY: {
      const vacs = { ...state };
      const { vacancyId } = action.payload;
      delete vacs[vacancyId];
      return vacs;
    }

    case REMOVE_PROJECT: {
      const vacs = { ...state };
      const { vacancies } = action.payload;
      vacancies.forEach((id) => {
        delete vacs[id];
      });
      return vacs;
    }

    case OPEN_CLOSE_VACANCY: {
      const vacs = { ...state };
      const {
        ids,
        status,
      } = action.payload;
      ids.forEach((id) => {
        vacs[id].isClosed = status;
      });
      return vacs;
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
