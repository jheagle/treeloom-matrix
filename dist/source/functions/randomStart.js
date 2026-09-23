'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _alterCoordinates = _interopRequireDefault(require('./alterCoordinates.js'))
const _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
const _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./getHighestAbsoluteCoordinate.js'))
const _getMatrixRange = _interopRequireDefault(require('./getMatrixRange.js'))
const _nextCell = _interopRequireDefault(require('./nextCell.js'))
const _randomPoint = _interopRequireDefault(require('./randomPoint.js'))
const _randDirectionWithInterval = _interopRequireDefault(require('./randDirectionWithInterval.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Generate a random starting point for a line with the provided length and direction.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix in which the line will be drawn.
 * @param {number|null} [length=null] - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param {module:matrixObjects~Direction|null} [dir=null] - The direction the line will extend towards, null will use a random direction within the matrix
 * @param {module:matrixObjects~Point} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = (matrix, length = null, dir = null, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  if (length === null) {
    const highestCoordinate = (0, _getHighestAbsoluteCoordinate.default)(maxRanges)
    // length must be at least 1, and less than the highest coordinate in the matrix
    length = _siFunciona.default.randomInteger(highestCoordinate - 2, 1)
  }
  if (dir === null) {
    dir = (0, _randDirectionWithInterval.default)(matrix, null, length, maxRanges)
  }
  // check direction has at least one non-zero component
  if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
    throw new Error('Direction must have at least one non-zero coordinate')
  }
  const multipleToLength = (0, _alterCoordinates.default)(dir, coordinate => {
    if (length % coordinate !== 0) {
      return null
    }
    return length / coordinate
  })
  const timesToLength = _siFunciona.default.reduceObject(multipleToLength, (times, coordinate) => {
    if (coordinate === null) {
      return times
    }
    if (coordinate < times) {
      return coordinate
    }
    return times
  }, length)
  for (let i = 0; i < timesToLength; ++i) {
    maxRanges = dir.prev(maxRanges)
  }
  return (0, _nextCell.default)(minPoint, (0, _randomPoint.default)(matrix, maxRanges))
}
const _default = exports.default = randomStart
