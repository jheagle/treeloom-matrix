import 'core-js/stable';
import { Point } from './types';
/**
 * Return the point with absolute coordinates.
 * @function
 * @param pnt - A Point to have coordinates switched to absolute units.
 */
declare const getAbsolutePoint: (pnt: Point) => Point;
export default getAbsolutePoint;
