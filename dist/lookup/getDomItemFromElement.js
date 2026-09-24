'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getDomItemFromPoint = _interopRequireDefault(require('./getDomItemFromPoint'))
const _getPointFromElement = _interopRequireDefault(require('./getPointFromElement'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @function
 * @param {Node|HTMLElement} elem - Provide an element having an associated DomItem.
 * @param {module:matrixObjects~Matrix} matrix - The matrix potentially containing the DomItem with Point.
 * @returns {false|module:domObjects~DomItem}
 */
const getDomItemFromElement = (elem, matrix) => (0, _getDomItemFromPoint.default)((0, _getPointFromElement.default)(elem), matrix)
const _default = exports.default = getDomItemFromElement
