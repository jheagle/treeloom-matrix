/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from './point'
import { Axis, Coordinate, Point, PointLike } from './types'

/**
 * Alter the coordinates of a point using a function. The point (or its coordinates) may be null, then the function
 * receives null for those coordinates.
 * @param pnt - The point to alter (or null to start from empty coordinates)
 * @param fn - Called with each coordinate, its axis and the whole point
 * @returns A new point built from the altered coordinates
 */
function alterCoordinates<Value extends Coordinate | null> (
  pnt: Point,
  fn: (coordinate: Coordinate, axis: Axis, point: Point) => Value
): PointLike<Value>
function alterCoordinates<Value extends Coordinate | null> (
  pnt: PointLike<Coordinate | null> | null,
  fn: (coordinate: Coordinate | null, axis: Axis, point: PointLike<Coordinate | null> | null) => Value
): PointLike<Value>
function alterCoordinates (
  pnt: PointLike<Coordinate | null> | null,
  fn: (coordinate: any, axis: Axis, point: any) => Coordinate | null
): PointLike<Coordinate | null> {
  return point(
    fn(pnt?.x ?? null, 'x', pnt) as Coordinate,
    fn(pnt?.y ?? null, 'y', pnt) as Coordinate,
    fn(pnt?.z ?? null, 'z', pnt) as Coordinate
  )
}

export default alterCoordinates
