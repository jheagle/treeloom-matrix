/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from '../point/point'
import { Line } from './types'
import { Point } from '../point/types'

const directions: Array<[Point['x'], Point['y']]> = [[1, 0], [0, 1]]

/**
 * Every straight, horizontal or vertical, line of exactly `length` points which fits within a grid of the given
 * dimensions (z is always 0 - no diagonals or 3D lines; dimensions.x is the number of columns, dimensions.y the
 * number of rows, matching getAxisLengths). Purely geometric: it knows nothing about what occupies a cell, so a
 * caller filters the result for any blocked-cell test of its own.
 * @param dimensions - The grid's own size (x = columns, y = rows).
 * @param length - The exact number of points each line must have.
 */
const getLinesOfLength = (dimensions: Point, length: number): Line[] => {
  const lines: Line[] = []
  for (let y = 0; y < dimensions.y; y++) {
    for (let x = 0; x < dimensions.x; x++) {
      for (const [stepX, stepY] of directions) {
        const endX = x + stepX * (length - 1)
        const endY = y + stepY * (length - 1)
        if (endX >= dimensions.x || endY >= dimensions.y) {
          continue
        }
        lines.push(Array.from({ length }, (_, i) => point(x + stepX * i, y + stepY * i, 0)))
      }
    }
  }
  return lines
}

export default getLinesOfLength
