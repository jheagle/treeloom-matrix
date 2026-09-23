'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return point-like object with all of the axis lengths.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix to get the dimensions of.
 * @returns {module:matrixObjects~Point}
 */
const getAxisLengths = matrix => (0, _point.default)(matrix.children[0].children[0].children.length, matrix.children[0].children.length, matrix.children.length)
const _default = exports.default = getAxisLengths
