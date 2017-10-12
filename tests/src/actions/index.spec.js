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
  describe('Добавление проекта', () => {
    let result;
    let valueExpected;

    before(() => {
      const value = 'Hello';
      valueExpected = {
        title: 'Hello',
        isClosed: false,
        items: [],
      };

      result = addProject(value);
    });

    describe('Объект для dispatch', () => {
      it('Должен быть объектом', () => {
        expect(result).to.be.an('object');
      });

      it('Должен иметь свойство type', () => {
        expect(result).to.have.property('type');
      });

      it('Должен иметь свойство payload', () => {
        expect(result).to.have.property('payload');
      });

      it('Payload должен иметь одно свойство', () => {
        expect(Object.keys(result.payload)).to.have.lengthOf(1);
      });

      it('Внутренний объект payload должен быть эквивалентен', () => {
        // const key = Object.keys(result.payload).pop();
        // const value = result.payload[key];
        // expect(value).to.deep.equal({
        //   title: 'Hello',
        //   isClosed: false,
        //   items: [],
        // });
        //expect(result.payload).to.deep.include({a: 1});
      });
    });
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
