import areEqualPoints from '../point/areEqualPoints'
import getAbsolutePoint from '../point/getAbsolutePoint'
import point from '../point/point'
import pointsToStep from './pointsToStep'
import sortAxisCoordinate from '../point/sortAxisCoordinates'
import { Point } from '../point/types'
import { Line } from './types'

/**
 * Having provided two points, return an array of integer transition points connecting 'start' and 'end'.
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 */
const getLineRelativePoints = (start: Point, end: Point, line: Line = []): Line => {
  if (areEqualPoints(start, end)) {
    return [start]
  }

  // Get the difference between start and end and simplify each relative coordinate
  const simplifiedDirection = pointsToStep(start, end)

  // Increment each coordinate by 1 either in the positive or negative direction
  const stepPoint = point(
    (start.x < end.x) ? 1 : -1,
    (start.y < end.y) ? 1 : -1,
    (start.z < end.z) ? 1 : -1
  )

  // Use the sorted coordinates to determine the priority of updating each coordinate
  const [highest, middle, lowest] = sortAxisCoordinate(getAbsolutePoint(simplifiedDirection), 'desc')

  // The error range adustment for each cycle
  const incrementMid = 2 * middle.coordinate
  const incrementLow = 2 * lowest.coordinate

  // These are the upper limit ranges of error used to reset when we exceed the limit
  const errResetMid = 2 * (middle.coordinate - highest.coordinate)
  const errResetLow = 2 * (lowest.coordinate - highest.coordinate)

  // Update the coordinates of this point as we move along the line
  const currPoint = point(start.x, start.y, start.z)

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
    line.push(point(currPoint.x, currPoint.y, currPoint.z))
  }

  return line
}

export default getLineRelativePoints
