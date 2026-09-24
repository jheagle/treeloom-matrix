'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _areEqualPoints = _interopRequireDefault(require('../point/areEqualPoints.js'))
const _getAbsolutePoint = _interopRequireDefault(require('../point/getAbsolutePoint.js'))
const _point = _interopRequireDefault(require('../point/point.js'))
const _pointsToStep = _interopRequireDefault(require('./pointsToStep.js'))
const _sortAxisCoordinates = _interopRequireDefault(require('../point/sortAxisCoordinates.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Having provided two points, return an array of integer transition points connecting 'start' and 'end'.
 * @function
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getLineRelativePoints = (start, end, line = []) => {
  if ((0, _areEqualPoints.default)(start, end)) {
    return [start]
  }

  // Get the difference between start and end and simplify each relative coordinate
  const simplifiedDirection = (0, _pointsToStep.default)(start, end)

  // Increment each coordinate by 1 either in the positive or negative direction
  const stepPoint = (0, _point.default)(start.x < end.x ? 1 : -1, start.y < end.y ? 1 : -1, start.z < end.z ? 1 : -1)

  // Use the sorted coordinates to determine the priority of updating each coordinate
  const [highest, middle, lowest] = (0, _sortAxisCoordinates.default)((0, _getAbsolutePoint.default)(simplifiedDirection), 'desc')

  // The error range adustment for each cycle
  const incrementMid = 2 * middle.coordinate
  const incrementLow = 2 * lowest.coordinate

  // These are the upper limit ranges of error used to reset when we exceed the limit
  const errResetMid = 2 * (middle.coordinate - highest.coordinate)
  const errResetLow = 2 * (lowest.coordinate - highest.coordinate)

  // Update the coordinates of this point as we move along the line
  const currPoint = (0, _point.default)(start.x, start.y, start.z)

  // These are the error ranges on the lower bound that we will update for each point
  let errRangeMid = 2 * middle.coordinate - highest.coordinate
  let errRangeLow = 2 * lowest.coordinate - highest.coordinate
  line.push(start)
  while (currPoint[highest.axis] !== end[highest.axis]) {
    // Increment highest axis of currPoint by stepPoint highest axis (1 or -1)
    currPoint[highest.axis] += stepPoint[highest.axis]
    if (errRangeMid < 0) {
      errRangeMid += incrementMid
    } else {
      currPoint[middle.axis] += stepPoint[middle.axis]
      errRangeMid += errResetMid
    }
    if (errRangeLow < 0) {
      errRangeLow += incrementLow
    } else {
      currPoint[lowest.axis] += stepPoint[lowest.axis]
      errRangeLow += errResetLow
    }
    line.push((0, _point.default)(currPoint.x, currPoint.y, currPoint.z))
  }
  return line
}
const _default = exports.default = getLineRelativePoints
