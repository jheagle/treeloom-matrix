'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _checkValidPoint = _interopRequireDefault(require('./checkValidPoint.js'))
const _direction = _interopRequireDefault(require('../objects/direction.js'))
const _getAxisLengths = _interopRequireDefault(require('./getAxisLengths.js'))
const _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
const _getMatrixRange = _interopRequireDefault(require('./getMatrixRange.js'))
const _nextCell = _interopRequireDefault(require('./nextCell.js'))
const _pointDifference = _interopRequireDefault(require('./pointDifference.js'))
const _randomPoint = _interopRequireDefault(require('./randomPoint.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  // Use the available ranges as the max ranges
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  if (start === null) {
    // random point with offset of minimum of matrix
    start = (0, _nextCell.default)(minPoint, (0, _randomPoint.default)(matrix, maxRanges))
  }
  if (!(0, _checkValidPoint.default)(start, matrix)) {
    const matrixDimensions = (0, _getAxisLengths.default)(matrix)
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`)
  }
  // Find a valid point within the matrix to use as our next point
  const validPoint = (0, _nextCell.default)(minPoint, (0, _randomPoint.default)(matrix, maxRanges))
  // Get the difference from start to the new
  const delta = (0, _pointDifference.default)(start, validPoint)
  return (0, _direction.default)(delta.x, delta.y, delta.z)
}
const _default = exports.default = randDirection
