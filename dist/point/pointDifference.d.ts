import 'core-js/stable';
import { Point } from './types';
/**
 * Based on provided point and another point, get a point with the difference between each axis
 * @function
 * @param start - The first point to compare
 * @param end - The other point to be compared
 */
declare const pointDifference: (start: Point, end: Point) => Point;
export default pointDifference;
