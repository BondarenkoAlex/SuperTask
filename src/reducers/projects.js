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

function projects(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case ADD_VACANCY: {
      const vacancy = Object.keys(action.payload).map(key => action.payload[key]).pop();
      const { id, projectId } = vacancy;
      const project = state[projectId];
      const { items } = project;
      const newItems = [...items, id];
      return {
        ...state,
        [projectId]: {
          ...project,
          items: newItems,
        },
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

export default projects;
