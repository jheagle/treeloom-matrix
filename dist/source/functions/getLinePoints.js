'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getLineIntersectPoints = _interopRequireDefault(require('./getLineIntersectPoints.js'))
const _getLineRelativePoints = _interopRequireDefault(require('./getLineRelativePoints.js'))
const _getLineTransitionPoints = _interopRequireDefault(require('./getLineTransitionPoints.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Find the points that a line would cross from 'start' to 'end' and return the array of points
 * @function
 * @param {module:matrixObjects~Point} start
 * @param {module:matrixObjects~Point} end
 * @param {string|'relative'|'intersect'|'transition'} [type='relative'] - select the method used for finding the points: 'relative'|'intersect'|'transition'
 * @param {Array.<Array.<module:matrixObjects~Point>>} [lines=[]] - An array of lines only containing start and end.
 * @returns {Array.<Array.<module:matrixObjects~Point>>}
 */
const getLinePoints = (start, end, type = 'relative', line = []) => {
  switch (type) {
    case 'relative':
      return (0, _getLineRelativePoints.default)(start, end, line)
    case 'intersect':
      return (0, _getLineIntersectPoints.default)(start, end, line)
    case 'transition':
      return (0, _getLineTransitionPoints.default)(start, end, line)
    default:
      throw Error(`The given type: '${type}' is invalid. Valid types are 'relative', 'intersect', 'transition'`)
  }
}
const _default = exports.default = getLinePoints
