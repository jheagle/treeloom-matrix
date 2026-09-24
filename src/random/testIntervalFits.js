import 'core-js/stable'
import getCoordinateRanges from '../bounds/getCoordinateRanges.js'
import getMatrixRange from '../bounds/getMatrixRange.js'

/**
 * An object that has boolean values for each axis indicating whether the interval fits within the matrix.
 * @typedef {Object} IntervalFits
 * @property {boolean} x - Whether the interval fits within the x-axis of the matrix
 * @property {boolean} y - Whether the interval fits within the y-axis of the matrix
 * @property {boolean} z - Whether the interval fits within the z-axis of the matrix
 */

/**
 * Check each axis of the matrix to see if a length interval would fit within.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {number|null} [interval=null] - An interval where a line would intersect in the direction, null for unspecified
 * @param {module:matrixObjects~Point|null} [maxRanges=null] - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~IntervalFits}
 */
const testIntervalFits = (matrix, interval = null, maxRanges = null) => {
  if (interval === null) {
    return { x: true, y: true, z: true }
  }
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  // Use the available ranges as the max ranges
  maxRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  const absoluteInterval = Math.abs(interval)
  return { x: maxRanges.x > absoluteInterval, y: maxRanges.y > absoluteInterval, z: maxRanges.z > absoluteInterval }
}

export default testIntervalFits
