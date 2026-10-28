import { Direction, Point } from './types';
/**
 * Based on provided point and point direction generate previous point.
 * @param pnt - Provide the current / initial point
 * @param dir - Provide the direction to be applied to find the previous point
 */
declare const prevCell: (pnt: Point, dir: Point | Direction) => Point;
export default prevCell;
