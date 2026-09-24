'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.reduce.js')
require('core-js/stable')
const _getAllPoints = _interopRequireDefault(require('./getAllPoints.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Get the lowest and highest points in the matrix as the range.
 * @function
 * @param {module:matrixObjects~Matrix} matrix
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getMatrixRange = matrix => (0, _getAllPoints.default)(matrix).reduce((range, point) => {
  if (range.length === 0) {
    range.push(_siFunciona.default.cloneObject(point), _siFunciona.default.cloneObject(point))
  }
  if (point.x < range[0].x) {
    range[0].x = point.x
  }
  if (point.y < range[0].y) {
    range[0].y = point.y
  }
  if (point.z < range[0].z) {
    range[0].z = point.z
  }
  if (point.x > range[1].x) {
    range[1].x = point.x
  }
  if (point.y > range[1].y) {
    range[1].y = point.y
  }
  if (point.z > range[1].z) {
    range[1].z = point.z
  }
  return range
}, [])
const _default = exports.default = getMatrixRange
