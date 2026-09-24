'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _nextCell = _interopRequireDefault(require('../point/nextCell.js'))
const _point = _interopRequireDefault(require('../point/point.js'))
const _pointDifference = _interopRequireDefault(require('../point/pointDifference.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Using a max an min point, find the ranges for each coordinate.
 * @function
 * @param {module:matrixObjects~Point} minPoint - The smallest point in the matrix
 * @param {module:matrixObjects~Point} maxPoint - The largest point in the matrix
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const getCoordinateRanges = (minPoint, maxPoint, maxRanges = null) => {
  // Find the range by getting delta of min and max, then add 1 to each access to included the max point in the range
  const coordinateRanges = (0, _nextCell.default)((0, _pointDifference.default)(minPoint, maxPoint), (0, _point.default)(1, 1, 1))
  if (maxRanges) {
    coordinateRanges.x = Math.min(coordinateRanges.x, maxRanges.x)
    coordinateRanges.y = Math.min(coordinateRanges.y, maxRanges.y)
    coordinateRanges.z = Math.min(coordinateRanges.z, maxRanges.z)
  }
  return coordinateRanges
}
const _default = exports.default = getCoordinateRanges
