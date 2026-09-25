import 'core-js/stable'
import point from '../point/point'
import { Direction, Point } from '../point/types'

/**
 * Given a start point, line length, and a direction, generate the end point of the line.
 * @function
 * @param start - The selected starting point.
 * @param length - The total length of the line.
 * @param dir - The direction of the line.
 */
const lineEndPoint = (start: Point, length: number, dir: Point | Direction): Point => point(
  start.x + dir.x * (length - 1),
  start.y + dir.y * (length - 1),
  start.z + dir.z * (length - 1)
)

export default lineEndPoint
