import siFunciona from 'si-funciona'
import { Point } from './types'

/**
 * Return the point with absolute coordinates.
 * @param pnt - A Point to have coordinates switched to absolute units.
 */
const getAbsolutePoint = (pnt: Point): Point => siFunciona.mapObject(pnt, Math.abs, 0)

export default getAbsolutePoint
