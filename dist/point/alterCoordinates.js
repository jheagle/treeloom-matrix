'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _point = _interopRequireDefault(require('./point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @callback alterCoordinate
 * @param {module:matrixObjects~coordinate|null} pnt - The coordinate to alter
 * @param {module:matrixObjects~axis} axis - The axis for the coordinate being altered
 * @param {module:matrixObjects~Point|null} point - The point that the coordinate is part of
 * @returns {module:matrixObjects~coordinate|null} - The altered coordinate
 */

/**
 * Alter the coordinates of a point using a function
 * @function
 * @param {module:matrixObjects~Point|null} pnt
 * @param {module:matrixFunctions~alterCoordinate} fn
 * @returns {module:matrixObjects~Point}
 */
const alterCoordinates = (pnt, fn) => (0, _point.default)(fn(pnt?.x ?? null, 'x', pnt), fn(pnt?.y ?? null, 'y', pnt), fn(pnt?.z ?? null, 'z', pnt))
const _default = exports.default = alterCoordinates
