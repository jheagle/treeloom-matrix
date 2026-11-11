/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getCoordinateRanges from '../bounds/getCoordinateRanges'
import getMatrixRange from '../bounds/getMatrixRange'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'
import { IntervalFits } from './types'

/**
 * Check each axis of the matrix to see if a length interval would fit within.
 * @param matrix - The matrix that the point will be contained within.
 * @param interval - An interval where a line would intersect in the direction, null for unspecified
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const testIntervalFits = (matrix: Matrix, interval: number | null = null, maxRanges: Point | null = null): IntervalFits => {
  if (interval === null) {
    return { x: true, y: true, z: true }
  }
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  // Use the available ranges as the max ranges
  const ranges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  const absoluteInterval = Math.abs(interval)
  return { x: ranges.x > absoluteInterval, y: ranges.y > absoluteInterval, z: ranges.z > absoluteInterval }
}

export default testIntervalFits
