import point from './point'
import { Direction, Point } from './types'

/**
 * Based on provided point and point direction generate previous point.
 * @param pnt - Provide the current / initial point
 * @param dir - Provide the direction to be applied to find the previous point
 */
const prevCell = (pnt: Point, dir: Point | Direction): Point => point(pnt.x - dir.x, pnt.y - dir.y, pnt.z - dir.z)

export default prevCell
