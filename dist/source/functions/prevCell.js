'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Based on provided point and point direction generate previous point.
 * @function
 * @param {module:matrixObjects~Point} pnt - Provide the current / initial point
 * @param {module:matrixObjects~Direction} dir - Provide the direction to be applied to find the previous point
 * @returns {module:matrixObjects~Point}
 */
const prevCell = (pnt, dir) => (0, _point.default)(pnt.x - dir.x, pnt.y - dir.y, pnt.z - dir.z)
const _default = exports.default = prevCell
