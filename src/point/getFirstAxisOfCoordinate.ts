import 'core-js/stable'
import { Axis, Coordinate, Point } from './types'

/**
 * Having provided a coordinate number, find all corresponding axis, return the first match.
 * @param pnt - The Point containing a matching coordinate.
 * @param coordinate - The coordinate to search for.
 * @returns The first matching axis, or false when no axis matches
 */
const getFirstAxisOfCoordinate = (pnt: Point, coordinate: Coordinate): Axis | false => (Object.keys(pnt) as Axis[]).filter(
  (key) => pnt[key] === coordinate
)[0] || false

export default getFirstAxisOfCoordinate
