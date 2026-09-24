'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.filter.js')
require('core-js/stable')
const _point = _interopRequireDefault(require('../point/point'))
const _nextCell = _interopRequireDefault(require('../point/nextCell'))
const _checkValidPoint = _interopRequireDefault(require('./checkValidPoint'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return all points which touch on edges (not diagonal)
 * @function
 * @param {module:matrixObjects~Point} pnt - The point we want to find adjacent points for.
 * @param {module:matrixObjects~Matrix} matrix - The matrix having the point.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const adjacentEdgePoints = (pnt, matrix) => [(0, _point.default)(-1, 0, 0), (0, _point.default)(1, 0, 0), (0, _point.default)(0, -1, 0), (0, _point.default)(0, 1, 0), (0, _point.default)(0, 0, -1), (0, _point.default)(0, 0, 1)].map(p => (0, _nextCell.default)(pnt, p)).filter(p => (0, _checkValidPoint.default)(p, matrix))
const _default = exports.default = adjacentEdgePoints
