import 'core-js/stable'
import checkValidPoint from '../bounds/checkValidPoint.js'
import direction from '../point/direction.js'
import getAxisLengths from '../bounds/getAxisLengths.js'
import getCoordinateRanges from '../bounds/getCoordinateRanges.js'
import getMatrixRange from '../bounds/getMatrixRange.js'
import nextCell from '../point/nextCell.js'
import pointDifference from '../point/pointDifference.js'
import randomPoint from './randomPoint.js'

/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} [start=null] - The point the direction will start from, null for random
 * @param {module:matrixObjects~Point|null} [maxRanges=null] - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const randDirection = (matrix, start = null, maxRanges = null) => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  // Use the available ranges as the max ranges
  maxRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  if (start === null) {
    // random point with offset of minimum of matrix
    start = nextCell(minPoint, randomPoint(matrix, maxRanges))
  }
  if (!checkValidPoint(start, matrix)) {
    const matrixDimensions = getAxisLengths(matrix)
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`)
  }
  // Find a valid point within the matrix to use as our next point
  const validPoint = nextCell(minPoint, randomPoint(matrix, maxRanges))
  // Get the difference from start to the new
  const delta = pointDifference(start, validPoint)
  return direction(delta.x, delta.y, delta.z)
}

export default randDirection
