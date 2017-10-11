import React from 'react';
import {
  shallow,
  mount,
  render,
} from 'enzyme';
import { expect } from 'chai';
import '../../setupTests';

import { ADD_PROJECT } from '../../../src/constants';
import { addProject } from '../../../src/actions';

describe('actions', () => {
  it('Компонент App должен существовать', () => {
    const value = 'Hello';
    const expectedValue = {
      title: 'Hello',
      isClosed: false,
      items: [],
    };
    expect(addProject(value)).toEqual(expectedValue )
  });

  // it('Тег h1 должен существовать', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('h1')).to.have.length(1);
  // });
  //
  // it('Тег div должен существовать', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('div')).to.have.length(1);
  // });
});
