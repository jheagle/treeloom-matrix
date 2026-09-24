'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _alterCoordinates = _interopRequireDefault(require('../point/alterCoordinates.js'))
const _checkValidPoint = _interopRequireDefault(require('../bounds/checkValidPoint.js'))
const _direction = _interopRequireDefault(require('../point/direction.js'))
const _getAbsolutePoint = _interopRequireDefault(require('../point/getAbsolutePoint.js'))
const _getAxisLengths = _interopRequireDefault(require('../bounds/getAxisLengths.js'))
const _getCoordinateRanges = _interopRequireDefault(require('../bounds/getCoordinateRanges.js'))
const _getMatrixRange = _interopRequireDefault(require('../bounds/getMatrixRange.js'))
const _nextCell = _interopRequireDefault(require('../point/nextCell.js'))
const _point = _interopRequireDefault(require('../point/point.js'))
const _pointDifference = _interopRequireDefault(require('../point/pointDifference.js'))
const _randDirection = _interopRequireDefault(require('./randDirection.js'))
const _randomPoint = _interopRequireDefault(require('./randomPoint.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _testIntervalFits = _interopRequireDefault(require('./testIntervalFits.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  // Use the available ranges as the max ranges
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  const intervalFits = (0, _testIntervalFits.default)(matrix, interval, start === null ? maxRanges : (0, _pointDifference.default)(start, maxRanges))
  if (!intervalFits.x && !intervalFits.y && !intervalFits.z) {
    throw new Error(`The given interval (${interval}) will not fit in this matrix`)
  }
  if (start === null) {
    // The range is the the total numbers available, but the limit is the highest possible number
    let startLimits = (0, _pointDifference.default)((0, _point.default)(1, 1, 1), maxRanges)
    if (interval !== null) {
      startLimits = (0, _alterCoordinates.default)(startLimits, (coordinate, axis) => intervalFits[axis] ? coordinate - Math.abs(interval) : coordinate)
    }
    // random point with offset of minimum of matrix
    start = (0, _nextCell.default)(minPoint, (0, _randomPoint.default)(matrix, startLimits))
  }
  if (!(0, _checkValidPoint.default)(start, matrix)) {
    const matrixDimensions = (0, _getAxisLengths.default)(matrix)
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`)
  }
  // Reduce limits by start (absolute values)
  const startOffset = (0, _getAbsolutePoint.default)((0, _pointDifference.default)(minPoint, start))
  // end limits should be offset by start point coordinates and ensure at least one end is interval distance from start
  const endLimits = (0, _point.default)(maxRanges.x - startOffset.x - 1, maxRanges.y - startOffset.y - 1, maxRanges.z - startOffset.z - 1)
  const randDir = (0, _randDirection.default)(matrix, start, endLimits)
  const validPoint = (0, _nextCell.default)(startOffset, randDir.next(start))
  const delta = (0, _pointDifference.default)(start, validPoint)
  // check if any coordinate already has the coorect interval
  if (interval !== null) {
    // none of the coordinates have the interval, so pick a valid one to update
    const axisFit = _siFunciona.default.reduceObject(intervalFits, (fitResults, fits, axis) => {
      if (fits) {
        fitResults.push(axis)
      }
      return fitResults
    }, [])
    // Pick a random axis that fits and set that coordinate to the interval
    const fixedAxis = axisFit[_siFunciona.default.randomInteger(axisFit.length)]
    delta[fixedAxis] = interval
  }
  return (0, _direction.default)(delta.x, delta.y, delta.z)
}
const _default = exports.default = randDirectionWithInterval
