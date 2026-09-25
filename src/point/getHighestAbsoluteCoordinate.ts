import 'core-js/stable'
import siFunciona from 'si-funciona'
import { Coordinate, Point } from './types'

/**
 * Return the first coordinate number with the highest absolute value.
 * @function
 * @param pnt - A Point to be assessed.
 */
const getHighestAbsoluteCoordinate = (pnt: Point): Coordinate => siFunciona.reduceObject(pnt, siFunciona.absoluteMax, 0)

export default getHighestAbsoluteCoordinate
