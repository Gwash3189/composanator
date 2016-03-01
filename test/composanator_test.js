/* eslint-env mocha */

import { right, left } from '../src/composanator';
import { expect } from 'chai';

describe('composanator', function () {
  let result;
  const leftConcat = (x) => `${x}left`;
  const rightConcat = (x) => `${x}right`;

  describe('right', function () {
    beforeEach(() => {
      result = right(leftConcat, rightConcat)('');
    });

    it('composes the functions from right to left', () => {
      expect(result)
        .to.equal('rightleft');
    });
  });

  describe('left', function () {
    beforeEach(() => {
      result = left(leftConcat, rightConcat)('');
    });

    it('composes the functions from left to right', () => {
      expect(result)
        .to.equal('leftright');
    });
  });
});
