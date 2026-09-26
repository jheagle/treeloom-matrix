import 'core-js/stable';
import { Direction, Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Generate a random starting point for a line with the provided length and direction.
 * @param matrix - The matrix in which the line will be drawn.
 * @param length - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param dir - The direction the line will extend towards, null will use a random direction within the matrix
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
declare const randomStart: (matrix: Matrix, length?: number | null, dir?: Direction | null, maxRanges?: Point | null) => Point;
export default randomStart;
