'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _getCoordinateRanges = _interopRequireDefault(require('../bounds/getCoordinateRanges.js'))
const _getMatrixRange = _interopRequireDefault(require('../bounds/getMatrixRange.js'))
const _point = _interopRequireDefault(require('../point/point.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Get random point within a matrix
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const randPoint = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  const coordinateRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  return (0, _point.default)(_siFunciona.default.randomInteger(coordinateRanges.x, minPoint.x), _siFunciona.default.randomInteger(coordinateRanges.y, minPoint.y), _siFunciona.default.randomInteger(coordinateRanges.z, minPoint.z))
}
const _default = exports.default = randPoint
