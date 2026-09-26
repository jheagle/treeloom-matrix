import 'core-js/stable';
import { Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Return point-like object with all of the axis lengths.
 * @param matrix - The matrix to get the dimensions of.
 */
declare const getAxisLengths: (matrix: Matrix) => Point;
export default getAxisLengths;
