import 'core-js/stable'
import siFunciona from 'si-funciona'

/**
 * Return the point with absolute coordinates.
 * @function
 * @param {module:matrixObjects~Point} pnt - A Point to have coordinates switched to absolute units.
 * @returns {module:matrixObjects~Point}
 */
const getAbsolutePoint = pnt => siFunciona.mapObject(pnt, Math.abs, 0)

export default getAbsolutePoint
