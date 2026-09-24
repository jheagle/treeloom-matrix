import 'core-js/stable'
import siFunciona from 'si-funciona'

/**
 * Return the first coordinate number with the highest absolute value.
 * @function
 * @param {module:matrixObjects~Point} pnt - A Point to be assessed.
 * @returns {module:matrixObjects~coordinate}
 */
const getHighestAbsoluteCoordinate = pnt => siFunciona.reduceObject(pnt, siFunciona.absoluteMax, 0)

export default getHighestAbsoluteCoordinate
