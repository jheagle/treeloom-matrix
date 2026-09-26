import 'core-js/stable'
import areEqualPoints from '../point/areEqualPoints'
import point from '../point/point'
import pointDifference from '../point/pointDifference'
import getHighestAbsoluteCoordinate from '../point/getHighestAbsoluteCoordinate'
import { Point } from '../point/types'
import { Line } from './types'

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 * @param transitions - specify the desired number of transitions, resulting points will be transitions+1 (defaults to
 * the largest absolute difference between the points).
 */
const getLineTransitionPoints = (start: Point, end: Point, line: Line = [], transitions: number | null = null): Line => {
  if (areEqualPoints(start, end)) {
    return [start]
  }
  const difference = pointDifference(start, end)
  if (transitions === null) {
    transitions = Math.abs(getHighestAbsoluteCoordinate(difference))
  }
  for (let i = 0; i <= transitions; ++i) {
    // Calculate the fractional distance (t) from 0 to 1
    const t = i / transitions

    // Linear interpolation formula
    const x = start.x + (end.x - start.x) * t
    const y = start.y + (end.y - start.y) * t
    const z = start.z + (end.z - start.z) * t

    line.push(point(x, y, z))
  }

  return line
}

export default getLineTransitionPoints
