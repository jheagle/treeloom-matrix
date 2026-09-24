'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getCoordinateRanges = _interopRequireDefault(require('../bounds/getCoordinateRanges.js'))
const _getMatrixRange = _interopRequireDefault(require('../bounds/getMatrixRange.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
    return {
      x: true,
      y: true,
      z: true
    }
  }
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  // Use the available ranges as the max ranges
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  const absoluteInterval = Math.abs(interval)
  return {
    x: maxRanges.x > absoluteInterval,
    y: maxRanges.y > absoluteInterval,
    z: maxRanges.z > absoluteInterval
  }
}
const _default = exports.default = testIntervalFits
