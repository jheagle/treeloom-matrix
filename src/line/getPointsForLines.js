import 'core-js/stable'
import getLinePoints from './getLinePoints.js'

/**
 * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
 * array of all points captured for each line segment
 * @function
 * @param {Array.<Array.<module:matrixObjects~Point>>} lines - An array of lines only containing start and end.
 * @returns {Array.<Array.<module:matrixObjects~Point>>}
 */
const getPointsForLines = lines => lines.reduce(
  (pointsArray, line) => pointsArray.concat(getLinePoints(...line)),
  []
)

export default getPointsForLines
