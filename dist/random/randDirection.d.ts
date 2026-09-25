import 'core-js/stable';
import { Direction, Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @function
 * @param matrix - The matrix that the point will be contained within.
 * @param start - The point the direction will start from, null for random
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
declare const randDirection: (matrix: Matrix, start?: Point | null, maxRanges?: Point | null) => Direction;
export default randDirection;
