import 'core-js/stable';
import { Direction, Point } from './types';
/**
 * Based on provided point and point direction generate next point.
 * @function
 * @param pnt - Provide the current / initial point
 * @param dir - Provide the direction to be applied to find the next point
 */
declare const nextCell: (pnt: Point, dir: Point | Direction) => Point;
export default nextCell;
