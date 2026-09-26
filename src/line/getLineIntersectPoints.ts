import 'core-js/stable'
import areEqualPoints from '../point/areEqualPoints'
import pointsToStep from './pointsToStep'
import { Direction, Point } from '../point/types'
import { Line } from './types'

/**
 * Recursively find the next point in a line from 'start' to 'end' using the provided direction. Return an array of points connecting 'start' and 'end'.
 * @param direction - The step from each point to the next
 * @param start - The point to add to the line, then continue from
 * @param end - The final line destination
 * @param line - The points found so far
 */
const nextIntersect = (direction: Direction, start: Point, end: Point, line: Line = []): Line => {
  line.push(start)
  return areEqualPoints(start, end)
    ? line
    : nextIntersect(direction, direction.next(start), end, line)
}

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1]). Line contains only exactly matched points
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 */
const getLineIntersectPoints = (start: Point, end: Point, line: Line = []): Line => {
  if (areEqualPoints(start, end)) {
    return line.concat([start])
  }
  // start and end differ here, so the step is a Direction
  const simplifiedDirection = pointsToStep(start, end) as Direction
  return nextIntersect(simplifiedDirection, start, end, line)
}

export default getLineIntersectPoints
