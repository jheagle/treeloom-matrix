import 'core-js/stable';
import { AxisCoordinatePairs, Point } from './types';
/**
 * Take a point and sort the coordinates, return an array of them sorted.
 * @function
 * @param pnt - the Point to be sorted
 * @param direction - 'asc'|'desc'
 */
declare const sortAxisCoordinates: (pnt: Point, direction?: "asc" | "desc") => AxisCoordinatePairs;
export default sortAxisCoordinates;
