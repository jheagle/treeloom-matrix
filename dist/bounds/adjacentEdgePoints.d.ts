import 'core-js/stable';
import { Point } from '../point/types';
import { Matrix } from '../grid/types';
/**
 * Return all points which touch on edges (not diagonal)
 * @param pnt - The point we want to find adjacent points for.
 * @param matrix - The matrix having the point.
 */
declare const adjacentEdgePoints: (pnt: Point, matrix: Matrix) => Point[];
export default adjacentEdgePoints;
