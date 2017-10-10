import { combineReducers } from 'redux';
import projects from './projects';
import vacancies from './vacancies';

const rootReducer = combineReducers({
  projects,
  vacancies,
});

export default rootReducer;
