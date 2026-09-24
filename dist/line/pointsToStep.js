'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _areEqualPoints = _interopRequireDefault(require('../point/areEqualPoints.js'))
const _direction = _interopRequireDefault(require('../point/direction.js'))
const _point = _interopRequireDefault(require('../point/point.js'))
const _pointDifference = _interopRequireDefault(require('../point/pointDifference.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Find the lowest common ratio of the difference between the coordinates of two points.
 * @function
 * @param {module:matrixObjects~Point} start - The first point to assess.
 * @param {module:matrixObjects~Point} end - The other point to assess.
 * @returns {module:matrixObjects~Direction}
 */
const pointsToStep = (start, end) => {
  if ((0, _areEqualPoints.default)(start, end)) {
    return (0, _point.default)(0, 0, 0)
  }
  const difference = (0, _pointDifference.default)(start, end)
  const simplifiedCoordinates = _siFunciona.default.simplestRatio(difference.x, difference.y, difference.z)
  return (0, _direction.default)(...simplifiedCoordinates)
}
const _default = exports.default = pointsToStep
