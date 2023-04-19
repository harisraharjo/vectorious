import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { sin: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function sin
 * @description Returns the sine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { sin } from 'vectorious/core/sin';
 *
 * sin([0, Math.PI / 2, Math.PI]); // => array([0, 1, 0])
 */
export const sin = (x: NDArray | ArrayLike<any>): NDArray => array(x).sin();

/**
 * @function sin
 * @memberof NDArray.prototype
 * @description Returns the sine of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([0, Math.PI / 2, Math.PI]).sin(); // <=> array([0, 1, 0])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i!] = f(d1[i!]);
  }

  return this;
}
