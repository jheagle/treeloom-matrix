import 'core-js/stable'
import checkValidPoint from '../bounds/checkValidPoint'
import direction from '../point/direction'
import getAxisLengths from '../bounds/getAxisLengths'
import getCoordinateRanges from '../bounds/getCoordinateRanges'
import getMatrixRange from '../bounds/getMatrixRange'
import nextCell from '../point/nextCell'
import pointDifference from '../point/pointDifference'
import randomPoint from './randomPoint'
import { Direction, Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @param matrix - The matrix that the point will be contained within.
 * @param start - The point the direction will start from, null for random
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randDirection = (matrix: Matrix, start: Point | null = null, maxRanges: Point | null = null): Direction => {
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
