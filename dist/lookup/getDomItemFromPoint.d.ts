import { Point } from '../point/types';
import { Matrix, MatrixColumn } from '../grid/types';
/**
 * Retrieve the DomItem associated with the provided point
 * @param pnt - A point corresponding to a DomItem.
 * @param matrix - The matrix containing the point.
 * @returns The DomItem (a column), or false when the point is not in the matrix
 */
declare const getDomItemFromPoint: (pnt: Point, matrix: Matrix) => MatrixColumn | false;
export default getDomItemFromPoint;
