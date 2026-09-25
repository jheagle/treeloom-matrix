import 'core-js/stable';
import { Axis, Coordinate, Point } from './types';
/**
 * Having provided a coordinate number, find all corresponding axis, return the first match.
 * @function
 * @param pnt - The Point containing a matching coordinate.
 * @param coordinate - The coordinate to search for.
 * @returns The first matching axis, or false when no axis matches
 */
declare const getFirstAxisOfCoordinate: (pnt: Point, coordinate: Coordinate) => Axis | false;
export default getFirstAxisOfCoordinate;
