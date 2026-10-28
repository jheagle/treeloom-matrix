import { Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Test if the provided point exists in the matrix.
 * @param pnt - Provide a point to validate.
 * @param matrix - The matrix that contains valid points.
 */
declare const checkValidPoint: (pnt: Point, matrix: Matrix) => boolean;
export default checkValidPoint;
