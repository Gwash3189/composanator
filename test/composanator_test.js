/* eslint-env mocha */

import { right, left } from '../src/composanator';
import { expect } from 'chai';

describe('composanator', function () {
  const leftConcat = (x) => `${x}left`;
  const rightConcat = (x) => `${x}right`;

  describe('right', function () {
    it('composes the functions from right to left', () => {
      expect(right(leftConcat, rightConcat)(''))
        .to.equal('rightleft');
    });
  });

  describe('left', function () {
    it('composes the functions from left to right', () => {
      expect(left(leftConcat, rightConcat)(''))
        .to.equal('leftright');
    });
  });
});
