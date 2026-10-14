import 'core-js/stable'
import areEqualPoints from '../point/areEqualPoints'
import direction from '../point/direction'
import point from '../point/point'
import pointDifference from '../point/pointDifference'
import siFunciona from 'si-funciona'
import { Direction, Point } from '../point/types'

/**
 * Find the lowest common ratio of the difference between the coordinates of two points.
 * @param start - The first point to assess.
 * @param end - The other point to assess.
 * @returns A Direction, or just the point 0, 0, 0 when both points are the same
 */
const pointsToStep = (start: Point, end: Point): Point | Direction => {
  if (areEqualPoints(start, end)) {
    return point(0, 0, 0)
  }
  const difference = pointDifference(start, end)
  const simplifiedCoordinates = siFunciona.simplestRatio(difference.x, difference.y, difference.z)
  const [dx, dy, dz] = simplifiedCoordinates as number[]
  return direction(dx, dy, dz)
}

export default pointsToStep
