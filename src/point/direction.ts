/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from './point'
import nextCell from './nextCell'
import prevCell from './prevCell'
import siFunciona from 'si-funciona'
import { Coordinate, Direction, Point } from './types'

/**
 * Create a direction object having x, y, z properties and next/prev methods
 * @param x - The x difference along the line
 * @param y - The y difference along the line
 * @param z - The z difference along the line
 */
const direction = (x: Coordinate, y: Coordinate, z: Coordinate = 0): Direction => {
  const simplifiedCoordinates = siFunciona.simplestRatio(x, y, z)
  const [dx, dy, dz] = simplifiedCoordinates as Coordinate[]
  const dir = point(dx, dy, dz) as Direction
  dir.next = (start: Point) => nextCell(start, dir)
  dir.prev = (end: Point) => prevCell(end, dir)
  return dir
}

export default direction
