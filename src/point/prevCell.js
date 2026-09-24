import 'core-js/stable'
import point from './point'

/**
 * Based on provided point and point direction generate previous point.
 * @function
 * @param {module:matrixObjects~Point} pnt - Provide the current / initial point
 * @param {module:matrixObjects~Direction} dir - Provide the direction to be applied to find the previous point
 * @returns {module:matrixObjects~Point}
 */
const prevCell = (pnt, dir) => point(pnt.x - dir.x, pnt.y - dir.y, pnt.z - dir.z)

export default prevCell
