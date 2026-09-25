import 'core-js/stable'
import areEqualPoints from '../point/areEqualPoints'
import pointsToStep from './pointsToStep'

/**
 * Recursively find the next point in a line from 'start' to 'end' using the provided direction. Return an array of points connecting 'start' and 'end'.
 * @function
 * @param {module:matrixObjects~Direction} direction 
 * @param {module:matrixObjects~Point} start 
 * @param {module:matrixObjects~Point} end 
 * @param {Array.<module:matrixObjects~Point>} line 
 * @returns {Array.<module:matrixObjects~Point>}
 */
const nextIntersect = (direction, start, end, line = []) => {
  line.push(start)
  return areEqualPoints(start, end)
    ? line
    : nextIntersect(direction, direction.next(start), end, line)
}

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1]). Line contains only exactly matched points
 * @function
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getLineIntersectPoints = (start, end, line = []) => {
  if (areEqualPoints(start, end)) {
    return line.concat([start])
  }
  const simplifiedDirection = pointsToStep(start, end)
  return nextIntersect(simplifiedDirection, start, end, line)
}

export default getLineIntersectPoints
