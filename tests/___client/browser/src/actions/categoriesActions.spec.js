import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import {
  CATEGORIES_GET_REQUEST,
  CATEGORIES_GET_SUCCESS,
  CATEGORIES_GET_FAILURE,
} from '../../../../../src/client/browser/src/constants/categories';
import {
  getCategoriesIfNeed,
} from '../../../../../src/client/browser/src/actions/categoriesActions';
import categoriesResp from './response/categoriesResp';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Categories` actions', () => {
  describe('Success respond', () => {
    beforeEach(() => {
      fetchMock.get('*', {
        body: categoriesResp,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('Must have two calls of dispatch', () => {
      const store = mockStore({ categories: { itemsByKey: {} } });
      return store.dispatch(getCategoriesIfNeed())
        .then(
          () => {
            const actions = store.getActions();
            const length = actions.length;
            expect(length).to.equal(2);
          },
        );
    });

    it('Must have two types of dispatch: CATEGORIES_GET_REQUEST and CATEGORIES_GET_SUCCESS', () => {
      const store = mockStore({ categories: { itemsByKey: {} } });
      return store.dispatch(getCategoriesIfNeed())
        .then(
          () => {
            const actions = store.getActions();
            const action1 = actions[0];
            const action2 = actions[1];
            expect(action1.type).to.equal(CATEGORIES_GET_REQUEST);
            expect(action2.type).to.equal(CATEGORIES_GET_SUCCESS);
          },
        );
    });
  });

  describe('Failed respond', () => {
    beforeEach(() => {
      fetchMock.get('*', {
        body: { error: 'The requested user could not be found' },
        status: 404,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('Must have two types of dispatch: CATEGORIES_GET_REQUEST and CATEGORIES_GET_FAILURE', () => {
      const store = mockStore({ categories: { itemsByKey: {} } });
      return store.dispatch(getCategoriesIfNeed())
        .then(
          () => {},

          () => {
            const actions = store.getActions();
            const action1 = actions[0];
            const action2 = actions[1];
            expect(action1.type).to.equal(CATEGORIES_GET_REQUEST);
            expect(action2.type).to.equal(CATEGORIES_GET_FAILURE);
          },
        );
    });
  });
});
