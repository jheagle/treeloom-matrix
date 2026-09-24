'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _point = _interopRequireDefault(require('./point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Based on provided point and another point, get a point with the difference between each axis
 * @function
 * @param {module:matrixObjects~Point} start - The first point to compare
 * @param {module:matrixObjects~Point} end - The other point to be compared
 * @returns {module:matrixObjects~Point}
 */
const pointDifference = (start, end) => (0, _point.default)(end.x - start.x, end.y - start.y, end.z - start.z)
const _default = exports.default = pointDifference
