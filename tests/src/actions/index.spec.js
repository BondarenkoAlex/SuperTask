/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import '../../setupTests';
import { addProject } from '../../../src/actions';

describe('actions', () => {
  describe('Добавление проекта', () => {
    let result;

    before(() => {
      const value = 'Hello';
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

      it('Внутренний объект payload должен иметь свойство title и равно Hello', () => {
        const key = Object.keys(result.payload).pop();
        const value = result.payload[key];
        expect(value).to.have.nested.property('title', 'Hello');
      });

      it('Внутренний объект payload должен иметь свойство isClosed и равно false', () => {
        const key = Object.keys(result.payload).pop();
        const value = result.payload[key];
        expect(value).to.have.nested.property('isClosed', false);
      });

      it('Внутренний объект payload должен иметь свойство items как массив и быть пустым', () => {
        const key = Object.keys(result.payload).pop();
        const value = result.payload[key];
        expect(value.items).to.be.an('array').and.to.be.empty;
      });
    });
  });
});
