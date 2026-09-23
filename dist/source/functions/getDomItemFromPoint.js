'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _checkValidPoint = _interopRequireDefault(require('./checkValidPoint'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Retrieve the DomItem associated with the provided point
 * @function
 * @param {module:matrixObjects~Point} pnt - A point corresponding to a DomItem.
 * @param {module:matrixObjects~Matrix} matrix - The matrix containing the point.
 * @returns {false|module:domObjects~DomItem}
 */
const getDomItemFromPoint = (pnt, matrix) => (0, _checkValidPoint.default)(pnt, matrix) ? matrix.children[pnt.z].children[pnt.y].children[pnt.x] : false
const _default = exports.default = getDomItemFromPoint
