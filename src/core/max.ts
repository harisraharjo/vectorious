import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

/**
 * @static
 * @memberof module:Globals
 * @function max
 * @description
 * Gets the maximum value (largest) element of `x`.
 * Accelerated with BLAS `i?amax`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { max } from 'vectorious/core/max';
 *
 * max([1, 2, 3]); // => 3
 */
export const max = (x: NDArray | ArrayLike<any>): number => array(x).max();

/**
 * @function max
 * @memberof NDArray.prototype
 * @description
 * Gets the maximum value (smallest) element of current array.
 * Accelerated with BLAS `i?amax`.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).max(); // => 3
 */
export default function (this: NDArray): number {
  const { data: d1 } = this;
  let max: number = Number.NEGATIVE_INFINITY;

  const iter = new NDIter(this);

  for (const i of iter) {
    const value = d1[i];
    if (max < value) {
      max = value;
    }
  }

  return max;
}
