import React from 'react';
import { expect } from 'chai';
import '../../setupTests';
import { ADD_PROJECT } from '../../../src/constants';
import projectsReducer from '../../../src/reducers/projects';

describe('reducers', () => {
  it('Состояние инициализации', () => {
    const state = projectsReducer(undefined, {});
    expect(state).to.be.an('object').and.to.be.empty;
  });

  it(`Должен обрабатывать ${ADD_PROJECT} с пустым состоянием`, () => {
    const payload = {
      1: {
        id: '1',
        title: 'New project',
        isClosed: false,
        items: [],
      },
    };
    const action = {
      type: ADD_PROJECT,
      payload,
    };
    const state = projectsReducer(undefined, action);
    expect(state).deep.equal(payload);
  });

  it(`Должен обрабатывать ${ADD_PROJECT} с непустым состоянием`, () => {
    const payload = {
      1: {
        id: '1',
        title: 'New project',
        isClosed: false,
        items: [],
      },
    };
    const action = {
      type: ADD_PROJECT,
      payload,
    };
    const state = projectsReducer({ 2: {} }, action);
    expect(state).deep.equal({ 2: {}, ...payload });
  });
});
