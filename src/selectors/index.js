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
    if (isEmpty(searchValue) && !isOnlyOpen) {
      return projects;
    }
    const result = {};
    Object.keys(projects).forEach((keyProject) => {
      const project = projects[keyProject];
      const { items } = project;
      const newItems = items.filter((id) => {
        const vacancy = vacancies[id];
        const { title, isClosed } = vacancy;
        const isOpen = isOnlyOpen && !isClosed;
        // если строка поиска пустая, то все вакансии включаются в выборку
        const isFinded = isEmpty(searchValue)
          ? true
          : title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        if (!isEmpty(searchValue) && isOnlyOpen) {
          // только открытые со словами
          return isOpen && isFinded;
        } else if (isEmpty(searchValue) && isOnlyOpen) {
          // только открытые
          return isOpen;
        }
        // только со словами
        return isFinded;
      });
      if (!isEmpty(newItems)) {
        // есть вакансии удовлетворяющие условиям
        result[keyProject] = {
          ...project,
          items: newItems,
        };
      }
    });

    return result;
  },
);
