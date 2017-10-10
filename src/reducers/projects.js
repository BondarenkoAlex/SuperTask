/* eslint-disable no-shadow */
import {
  ADD_PROJECT,
  OPEN_CLOSE_PROJECT,
  REMOVE_PROJECT,
  ADD_VACANCY,
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

    case REMOVE_PROJECT: {
      const projects = state;
      const { projectId } = action.payload;
      delete projects[projectId];
      return projects;
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

    case REMOVE_VACANCY: {
      const {
        projectId,
        vacancyId,
      } = action.payload;
      const project = state[projectId];
      const { items } = project;
      const newItems = items.filter(key => key !== vacancyId);
      return {
        ...state,
        [projectId]: {
          ...project,
          items: newItems,
        },
      };
    }

    case OPEN_CLOSE_PROJECT: {
      const id = action.payload;
      const project = state[id];
      const { isClosed } = project;
      return {
        ...state,
        [id]: {
          ...project,
          isClosed: !isClosed,
        },
      };
    }

    default:
      return state;
  }
}

export default projects;
