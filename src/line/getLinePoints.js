import 'core-js/stable'
import getLineIntersectPoints from './getLineIntersectPoints.js'
import getLineRelativePoints from './getLineRelativePoints.js'
import getLineTransitionPoints from './getLineTransitionPoints.js'

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
      return getLineRelativePoints(start, end, line)
    case 'intersect':
      return getLineIntersectPoints(start, end, line)
    case 'transition':
      return getLineTransitionPoints(start, end, line)
    default:
      throw Error(`The given type: '${type}' is invalid. Valid types are 'relative', 'intersect', 'transition'`)
  }
}

export default getLinePoints
