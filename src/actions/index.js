/* eslint-disable no-use-before-define */
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
import generateID from '../utils/generateID';

export function addProject(value) {
  const id = generateID();
  const payload = {
    [id]: {
      id,
      title: value,
      isClosed: true,
      items: [],
    },
  };
  return actionCreater(ADD_PROJECT, payload);
}

export function addVacancy(projectId, value) {
  const id = generateID();
  const payload = {
    [id]: {
      id,
      title: value,
      isClosed: true,
      projectId,
    },
  };
  return actionCreater(ADD_VACANCY, payload);
}

function actionCreater(type, payload) {
  return {
    type,
    payload,
  };
}
