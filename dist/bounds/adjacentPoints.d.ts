import 'core-js/stable';
import { Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Return all valid points surrounding a provided point
 * @function
 * @param pnt - The point we want to find adjacent points for.
 * @param matrix - The matrix having the point.
 */
declare const adjacentPoints: (pnt: Point, matrix: Matrix) => Point[];
export default adjacentPoints;
