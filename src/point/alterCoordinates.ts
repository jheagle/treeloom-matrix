import 'core-js/stable'
import point from './point'
import { AlterCoordinate, Point } from './types'

/**
 * Alter the coordinates of a point using a function
 * @function
 * @param pnt - The point to alter (or null to start from empty coordinates)
 * @param fn - Called with each coordinate, its axis and the whole point
 * @returns A new point built from the altered coordinates
 */
const alterCoordinates = (pnt: Point | null, fn: AlterCoordinate): Point => point(fn(pnt?.x ?? null, 'x', pnt), fn(pnt?.y ?? null, 'y', pnt), fn(pnt?.z ?? null, 'z', pnt))

export default alterCoordinates
