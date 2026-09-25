import 'core-js/stable'
import getCoordinateRanges from './getCoordinateRanges'
import getMatrixRange from './getMatrixRange'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Find the range of the matrix from smallest to largest point.
 * @function
 * @param matrix - The matrix that the point will be contained within.
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns The number of available coordinates on each axis
 */
const getAvailableRanges = (matrix: Matrix, maxRanges: Point | null = null): Point => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  return getCoordinateRanges(minPoint, maxPoint, maxRanges)
}

export default getAvailableRanges
