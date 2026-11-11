/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import alterCoordinates from '../point/alterCoordinates'
import checkValidPoint from '../bounds/checkValidPoint'
import direction from '../point/direction'
import getAbsolutePoint from '../point/getAbsolutePoint'
import getAxisLengths from '../bounds/getAxisLengths'
import getCoordinateRanges from '../bounds/getCoordinateRanges'
import getMatrixRange from '../bounds/getMatrixRange'
import nextCell from '../point/nextCell'
import point from '../point/point'
import pointDifference from '../point/pointDifference'
import randDirection from './randDirection'
import randomPoint from './randomPoint'
import siFunciona from 'si-funciona'
import testIntervalFits from './testIntervalFits'
import { Axis, Direction, Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @param matrix - The matrix that the point will be contained within.
 * @param start - The point the direction will start from, null for random
 * @param interval - An interval where a line would intersect in the direction, null for random
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randDirectionWithInterval = (matrix: Matrix, start: Point | null = null, interval: number | null = null, maxRanges: Point | null = null): Direction => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  // Use the available ranges as the max ranges
  maxRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  const intervalFits = testIntervalFits(matrix, interval, start === null ? maxRanges : pointDifference(start, maxRanges))
  if (!intervalFits.x && !intervalFits.y && !intervalFits.z) {
    throw new Error(`The given interval (${interval}) will not fit in this matrix`)
  }
  if (start === null) {
    // The range is the the total numbers available, but the limit is the highest possible number
    let startLimits = pointDifference(point(1, 1, 1), maxRanges)
    if (interval !== null) {
      startLimits = alterCoordinates(startLimits, (coordinate, axis) => intervalFits[axis] ? coordinate - Math.abs(interval as number) : coordinate)
    }
    // random point with offset of minimum of matrix
    start = nextCell(minPoint, randomPoint(matrix, startLimits))
  }
  if (!checkValidPoint(start, matrix)) {
    const matrixDimensions = getAxisLengths(matrix)
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`)
  }
  // Reduce limits by start (absolute values)
  const startOffset = getAbsolutePoint(pointDifference(minPoint, start))
  // end limits should be offset by start point coordinates and ensure at least one end is interval distance from start
  const endLimits = point(maxRanges.x - startOffset.x - 1, maxRanges.y - startOffset.y - 1, maxRanges.z - startOffset.z - 1)
  const randDir = randDirection(matrix, start, endLimits)
  const validPoint = nextCell(startOffset, randDir.next(start))
  const delta = pointDifference(start, validPoint)
  // check if any coordinate already has the coorect interval
  if (interval !== null) {
    // none of the coordinates have the interval, so pick a valid one to update
    const axisFit: Axis[] = siFunciona.reduceObject(intervalFits, (fitResults: Axis[], fits: boolean, axis: Axis) => {
      if (fits) {
        fitResults.push(axis)
      }
      return fitResults
    }, [])
    // Pick a random axis that fits and set that coordinate to the interval
    const fixedAxis = axisFit[siFunciona.randomInteger(axisFit.length)]
    delta[fixedAxis] = interval
  }
  return direction(delta.x, delta.y, delta.z)
}

export default randDirectionWithInterval
