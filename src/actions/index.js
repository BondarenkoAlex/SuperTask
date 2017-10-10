/* eslint-disable no-use-before-define */
import {
  ADD_PROJECT,
  OPEN_CLOSE_PROJECT,
  REMOVE_PROJECT,
  ADD_VACANCY,
  OPEN_CLOSE_VACANCY,
  REMOVE_VACANCY,
} from '../constants';
import generateID from '../utils/generateID';
import { isArray } from '../utils/check';

export function addProject(value) {
  const id = generateID();
  const payload = {
    [id]: {
      id,
      title: value,
      isClosed: false,
      items: [],
    },
  };
  return actionCreater(ADD_PROJECT, payload);
}

export function removeProject(id) {
  return (dispatch, getState) => {
    const { projects } = getState();
    const { items } = projects[id];
    const payload = {
      projectId: id,
      vacancies: items,
    };
    dispatch(actionCreater(REMOVE_PROJECT, payload));
  };
}

export function openCloseProject(id) {
  return (dispatch, getState) => {
    const { projects } = getState();
    const { isClosed, items } = projects[id];

    dispatch(actionCreater(OPEN_CLOSE_PROJECT, id));
    if (!isClosed) {
      // закрыть все вакансии в проекте
      dispatch(openCloseVacancies(items));
    }
  };
}

export function addVacancy(projectId, value) {
  const id = generateID();
  const payload = {
    [id]: {
      id,
      title: value,
      isClosed: false,
      projectId,
    },
  };
  return actionCreater(ADD_VACANCY, payload);
}

export function removeVacancy(id) {
  // return actionCreater(REMOVE_VACANCY, vacancy);
  return (dispatch, getState) => {
    const { vacancies } = getState();
    const vacancy = vacancies[id];
    const { id: vacancyId, projectId } = vacancy;
    const payload = {
      projectId,
      vacancyId,
    };
    dispatch(actionCreater(REMOVE_VACANCY, payload));
  };
}

export function openCloseVacancies(ids) {
  return (dispatch, getState) => {
    const { vacancies } = getState();
    let payload;
    if (isArray(ids)) {
      payload = {
        ids,
        status: true,
      };
    } else {
      const { isClosed } = vacancies[ids];
      payload = {
        ids: [ids],
        status: !isClosed,
      };
    }
    dispatch(actionCreater(OPEN_CLOSE_VACANCY, payload));
  };
}

function actionCreater(type, payload) {
  return {
    type,
    payload,
  };
}

