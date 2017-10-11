/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  shallow,
  mount,
  render,
} from 'enzyme';
import { expect } from 'chai';
import App from '../../../src/components/App';
import '../../setupTests';

describe('App', () => {
  it('Компонент App должен существовать', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });

  it('Тег h1 должен существовать', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('Тег div должен существовать', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
