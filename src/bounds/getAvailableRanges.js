import 'core-js/stable'
import getCoordinateRanges from './getCoordinateRanges.js'
import getMatrixRange from './getMatrixRange.js'

/**
 * Find the range of the matrix from smallest to largest point.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const getAvailableRanges = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  return getCoordinateRanges(minPoint, maxPoint, maxRanges)
}

export default getAvailableRanges
