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

describe('Набор', () => {
  it('Компонент App должен существовать', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });

  // it('contains spec with an expectation', () => {
  //   expect(shallow(<Foo />).is('.foo')).to.equal(true);
  // });
  //
  // it('contains spec with an expectation', () => {
  //   expect(mount(<Foo />).find('.foo').length).to.equal(1);
  // });
  //
  // it('can run an expectation with render', () => {
  //   expect(render(<Foo />).find('.foo').length).to.equal(1);
  // });
});
