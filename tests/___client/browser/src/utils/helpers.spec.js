import { expect } from 'chai';
import {
  buildKeyVideoStore,
  lastSubPath,
  toTime,
} from '../../../../../src/client/browser/src/utils/helpers';

describe('helpers', () => {
  describe('buildKeyVideoStore', () => {
    it('build key by a category', () => {
      const obj = {
        category: 'animation',
        subcategory: '',
        showby: '',
        duration: '',
        period: '',
      };
      const exp = buildKeyVideoStore(obj);
      const result = 'animation||||';
      expect(exp).to.equal(result);
    });

    it('build key by a category, showby', () => {
      const obj = {
        category: 'animation',
        subcategory: '',
        showby: 10,
        duration: '',
        period: '',
      };
      const exp = buildKeyVideoStore(obj);
      const result = 'animation||10||';
      expect(exp).to.equal(result);
    });

    it('build key by a category, showby, duration, period', () => {
      const obj = {
        category: 'animation',
        subcategory: '',
        showby: 10,
        duration: 'long',
        period: 7,
      };
      const exp = buildKeyVideoStore(obj);
      const result = 'animation||10|long|7';
      expect(exp).to.equal(result);
    });

    it('showby=null, duration=null, period=null. should be ||||', () => {
      const obj = {
        showby: null,
        duration: null,
        period: null,
      };
      const exp = buildKeyVideoStore(obj);
      const result = '||||';
      expect(exp).to.equal(result);
    });

    it('showby="10", duration=null, period="7". should be ||10||7', () => {
      const obj = {
        showby: "10",
        duration: null,
        period: "7",
      };
      const exp = buildKeyVideoStore(obj);
      const result = '||10||7';
      expect(exp).to.equal(result);
    });
  });
  describe('lastSubPath', () => {
    it('path', () => {
      const path = '/categories/animation';
      const exp = lastSubPath(path);
      const result = 'animation';
      expect(exp).to.equal(result);
    });
  });
  describe('toTime', () => {
    it('10 seconds', () => {
      const seconds = 10;
      const exp = toTime(seconds);
      const result = '00:10';
      expect(exp).to.equal(result);
    });

    it('60 seconds', () => {
      const seconds = 60;
      const exp = toTime(seconds);
      const result = '01:00';
      expect(exp).to.equal(result);
    });

    it('65 seconds', () => {
      const seconds = 65;
      const exp = toTime(seconds);
      const result = '01:05';
      expect(exp).to.equal(result);
    });

    it('185 seconds', () => {
      const seconds = 185;
      const exp = toTime(seconds);
      const result = '03:05';
      expect(exp).to.equal(result);
    });

    it('4800 seconds', () => {
      const seconds = 4800;
      const exp = toTime(seconds);
      const result = '01:20:00';
      expect(exp).to.equal(result);
    });
  });
});

