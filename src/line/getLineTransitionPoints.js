import 'core-js/stable'
import areEqualPoints from '../point/areEqualPoints.js'
import point from '../point/point.js'
import pointDifference from '../point/pointDifference.js'
import getHighestAbsoluteCoordinate from '../point/getHighestAbsoluteCoordinate.js'

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @function
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {number|null} transistions - specify the desired number of transitions, resulting points will be transistions+1.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getLineTransitionPoints = (start, end, line = [], transitions = null) => {
  if (areEqualPoints(start, end)) {
    return [start]
  }
  const difference = pointDifference(start, end)
  if (transitions === null) {
    transitions = Math.abs(getHighestAbsoluteCoordinate(difference))
  }
  for (let i = 0; i <= transitions; ++i) {
    // Calculate the fractional distance (t) from 0 to 1
    const t = i / transitions;

    // Linear interpolation formula
    const x = start.x + (end.x - start.x) * t
    const y = start.y + (end.y - start.y) * t
    const z = start.z + (end.z - start.z) * t

    line.push(point(x, y, z))
  }

  return line
}

export default getLineTransitionPoints
