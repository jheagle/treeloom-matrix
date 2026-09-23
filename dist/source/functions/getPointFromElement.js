'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Retrieve the point associated with the provided element.
 * @function
 * @param {Node|HTMLElement} elem - Provide an element associated with a point.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromElement = elem => {
  if (typeof elem.parentNode?.parentNode?.parentNode?.childNodes === 'undefined') {
    // This seems unlikey to occur because there will be document items as parents
    throw Error('Invalid element or not an element representing a matrix point.')
  }
  return (0, _point.default)(Array.from(elem.parentNode.childNodes).indexOf(elem), Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode), Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode))
}
const _default = exports.default = getPointFromElement
