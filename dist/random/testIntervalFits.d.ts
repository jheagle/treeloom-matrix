import 'core-js/stable';
import { Point } from '../point/types';
import { Matrix } from '../grid/types';
import { IntervalFits } from './types';
/**
 * Check each axis of the matrix to see if a length interval would fit within.
 * @param matrix - The matrix that the point will be contained within.
 * @param interval - An interval where a line would intersect in the direction, null for unspecified
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
declare const testIntervalFits: (matrix: Matrix, interval?: number | null, maxRanges?: Point | null) => IntervalFits;
export default testIntervalFits;
