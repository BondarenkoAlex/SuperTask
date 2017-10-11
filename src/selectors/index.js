/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { isEmpty } from '../utils/check';

const projectsSelector = state => state.projects;
const vacanciesSelector = state => state.vacancies;
const searchSelector = (_, props) => ({
  searchValue: props.searchValue,
  isOnlyOpen: props.isOnlyOpen,
});

export const projectSelector = createSelector(
  projectsSelector,
  vacanciesSelector,
  searchSelector,
  (projects, vacancies, searchObj) => {
    const { searchValue, isOnlyOpen } = searchObj;
    if (isEmpty(searchValue)) {
      return projects;
    }
    const result = {};
    Object.keys(projects).forEach((keyProject) => {
      const project = projects[keyProject];
      const { items } = project;
      const newItems = items.filter((id) => {
        const vacancy = vacancies[id];
        const { title, isClosed } = vacancy;
        const isSearch = title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        return isOnlyOpen
          ? isSearch && !isClosed
          : isSearch;
      });
      if (!isEmpty(newItems)) {
        // есть вакансии удовлетворяющие условиям
        result[keyProject] = {
          ...project,
          items: newItems,
        };
      }
    });
    debugger;
    return result;
  },
);
