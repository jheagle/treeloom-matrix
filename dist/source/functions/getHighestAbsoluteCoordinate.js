'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return the first coordinate number with the highest absolute value.
 * @function
 * @param {module:matrixObjects~Point} pnt - A Point to be assessed.
 * @returns {module:matrixObjects~coordinate}
 */
const getHighestAbsoluteCoordinate = pnt => _siFunciona.default.reduceObject(pnt, _siFunciona.default.absoluteMax, 0)
const _default = exports.default = getHighestAbsoluteCoordinate
