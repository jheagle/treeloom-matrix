'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getAxisLengths = _interopRequireDefault(require('./getAxisLengths'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Test if the provided point exists in the matrix.
 * @function
 * @param {module:matrixObjects~Point} pnt - Provide a point to validate.
 * @param {module:matrixObjects~Matrix} matrix - The matrix that contains valid points.
 * @returns {boolean}
 */
const checkValidPoint = (pnt, matrix) => {
  const matrixDimensions = (0, _getAxisLengths.default)(matrix)
  if (pnt.x >= matrixDimensions.x || pnt.y >= matrixDimensions.y || pnt.z >= matrixDimensions.z) {
    return false
  }
  return !!matrix.children[pnt.z] && !!matrix.children[pnt.z].children[pnt.y] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point
}
const _default = exports.default = checkValidPoint
