'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
const _getMatrixRange = _interopRequireDefault(require('./getMatrixRange.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Find the range of the matrix from smallest to largest point.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const getAvailableRanges = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  return (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
}
const _default = exports.default = getAvailableRanges
