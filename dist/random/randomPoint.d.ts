import 'core-js/stable';
import { Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Get random point within a matrix
 * @function
 * @param matrix - The matrix that the point will be contained within.
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
declare const randPoint: (matrix: Matrix, maxRanges?: Point | null) => Point;
export default randPoint;
