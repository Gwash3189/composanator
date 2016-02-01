/* eslint-env mocha */

import { right, left } from '../src/composanator';
import { expect } from 'chai';

describe('composanator', function () {
  const timeBy2 = (x) => 2 * x;
  const divideBy2 = (x) => x / 2;
  describe('right', function () {
    it('composes the functions from right to left', () => {
      expect(right(timeBy2, divideBy2)(1))
        .to.equal(1);
    });
  });

  describe('left', function () {
    it('composes the functions from left to right', () => {
      expect(left(timeBy2, divideBy2)(2))
        .to.equal(2);
    });
  });
});
