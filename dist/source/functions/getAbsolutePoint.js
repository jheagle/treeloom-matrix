'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return the point with absolute coordinates.
 * @function
 * @param {module:matrixObjects~Point} pnt - A Point to have coordinates switched to absolute units.
 * @returns {module:matrixObjects~Point}
 */
const getAbsolutePoint = pnt => _siFunciona.default.mapObject(pnt, Math.abs, 0)
const _default = exports.default = getAbsolutePoint
