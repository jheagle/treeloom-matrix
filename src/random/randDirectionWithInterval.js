import 'core-js/stable'
import alterCoordinates from '../point/alterCoordinates.js'
import checkValidPoint from '../bounds/checkValidPoint.js'
import direction from '../point/direction.js'
import getAbsolutePoint from '../point/getAbsolutePoint.js'
import getAxisLengths from '../bounds/getAxisLengths.js'
import getCoordinateRanges from '../bounds/getCoordinateRanges.js'
import getMatrixRange from '../bounds/getMatrixRange.js'
import nextCell from '../point/nextCell.js'
import point from '../point/point.js'
import pointDifference from '../point/pointDifference.js'
import randDirection from './randDirection.js'
import randomPoint from './randomPoint.js'
import siFunciona from 'si-funciona'
import testIntervalFits from './testIntervalFits.js'

/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} [start=null] - The point the direction will start from, null for random
 * @param {number|null} [interval=null] - An interval where a line would intersect in the direction, null for random
 * @param {module:matrixObjects~Point|null} [maxRanges=null] - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const randDirectionWithInterval = (matrix, start = null, interval = null, maxRanges = null) => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  // Use the available ranges as the max ranges
  maxRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  let intervalFits = testIntervalFits(matrix, interval, start === null ? maxRanges : pointDifference(start, maxRanges))
  if (!intervalFits.x && !intervalFits.y && !intervalFits.z) {
    throw new Error(`The given interval (${interval}) will not fit in this matrix`)
  }
  if (start === null) {
    // The range is the the total numbers available, but the limit is the highest possible number
    let startLimits = pointDifference(point(1, 1, 1), maxRanges)
    if (interval !== null) {
      startLimits = alterCoordinates(startLimits, (coordinate, axis) => intervalFits[axis] ? coordinate - Math.abs(interval) : coordinate)
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
    const axisFit = siFunciona.reduceObject(intervalFits, (fitResults, fits, axis) => {
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
