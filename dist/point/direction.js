'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _point = _interopRequireDefault(require('./point.js'))
const _nextCell = _interopRequireDefault(require('./nextCell.js'))
const _prevCell = _interopRequireDefault(require('./prevCell.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Direction represents the delta from on point to another and indicactes the direction of travel.
 * @typedef {module:matrixObjects~Point} module:matrixObjects~Direction
 * @property {module:matrixObjects~coordinate} x - The X-coordinate is the x difference from starting to end point along a line.
 * @property {module:matrixObjects~coordinate} y - The Y-coordinate is the x difference from starting to end point along a line.
 * @property {module:matrixObjects~coordinate} z - The Z-coordinate is the x difference from starting to end point along a line.
 * @method next - Get the next point in the direction from a starting point
 * @method prev - Get the previous point in the direction from a starting point
 */

/**
 * Create a direction object having x, y, z properties and next/prev methods
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {module:matrixObjects~Direction}
 */
const direction = (x, y, z = 0) => {
  const simplifiedCoordinates = _siFunciona.default.simplestRatio(x, y, z)
  const dir = (0, _point.default)(...simplifiedCoordinates)
  dir.next = start => (0, _nextCell.default)(start, dir)
  dir.prev = end => (0, _prevCell.default)(end, dir)
  return dir
}
const _default = exports.default = direction
