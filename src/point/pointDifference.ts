import point from './point'
import { Point } from './types'

/**
 * Based on provided point and another point, get a point with the difference between each axis
 * @param start - The first point to compare
 * @param end - The other point to be compared
 */
const pointDifference = (start: Point, end: Point): Point => point(
  end.x - start.x,
  end.y - start.y,
  end.z - start.z
)

export default pointDifference
