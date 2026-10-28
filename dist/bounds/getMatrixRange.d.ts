import { Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Get the lowest and highest points in the matrix as the range.
 * @param matrix - The matrix to find the range of.
 * @returns The lowest point followed by the highest point (empty when the matrix has no points)
 */
declare const getMatrixRange: (matrix: Matrix) => Point[];
export default getMatrixRange;
