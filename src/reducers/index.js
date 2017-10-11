import { combineReducers } from 'redux';
import projects from './projects';
import vacancies from './vacancies';
/*
* Example store
*
rootReducer = {
  projects: {
    kki1h2v0n: {
      id: 'kki1h2v0n',
      title: 'New project',
      isClosed: false,
      items: [
        'jmeuwtedn',
        'x3vp0g5wp',
      ],
    },
  },
  vacancies: {
    jmeuwtedn: {
      id: 'jmeuwtedn',
      title: 'New vacancy 1',
      isClosed: true,
      projectId: 'kki1h2v0n',
    },
    x3vp0g5wp: {
      id: 'x3vp0g5wp',
      title: 'New vacancy 2',
      isClosed: false,
      projectId: 'kki1h2v0n',
    },
  },
};
*/
const rootReducer = combineReducers({
  projects,
  vacancies,
});

export default rootReducer;
