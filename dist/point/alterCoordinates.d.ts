import 'core-js/stable';
import { Axis, Coordinate, Point, PointLike } from './types';
/**
 * Alter the coordinates of a point using a function. The point (or its coordinates) may be null, then the function
 * receives null for those coordinates.
 * @param pnt - The point to alter (or null to start from empty coordinates)
 * @param fn - Called with each coordinate, its axis and the whole point
 * @returns A new point built from the altered coordinates
 */
declare function alterCoordinates<Value extends Coordinate | null>(pnt: Point, fn: (coordinate: Coordinate, axis: Axis, point: Point) => Value): PointLike<Value>;
declare function alterCoordinates<Value extends Coordinate | null>(pnt: PointLike<Coordinate | null> | null, fn: (coordinate: Coordinate | null, axis: Axis, point: PointLike<Coordinate | null> | null) => Value): PointLike<Value>;
export default alterCoordinates;
