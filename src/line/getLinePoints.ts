import 'core-js/stable'
import getLineIntersectPoints from './getLineIntersectPoints'
import getLineRelativePoints from './getLineRelativePoints'
import getLineTransitionPoints from './getLineTransitionPoints'
import { Point } from '../point/types'
import { Line, LineType } from './types'

/**
 * Find the points that a line would cross from 'start' to 'end' and return the array of points
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param type - select the method used for finding the points: 'relative'|'intersect'|'transition'
 * @param line - The points found so far, the resulting points are added to it.
 * @returns The points connecting start and end
 */
const getLinePoints = (start: Point, end: Point, type: LineType = 'relative', line: Line = []): Line => {
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
