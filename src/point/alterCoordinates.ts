import 'core-js/stable'
import point from './point'

/**
 * @callback alterCoordinate
 * @param {module:matrixObjects~coordinate|null} pnt - The coordinate to alter
 * @param {module:matrixObjects~axis} axis - The axis for the coordinate being altered
 * @param {module:matrixObjects~Point|null} point - The point that the coordinate is part of
 * @returns {module:matrixObjects~coordinate|null} - The altered coordinate
 */

/**
 * Alter the coordinates of a point using a function
 * @function
 * @param {module:matrixObjects~Point|null} pnt 
 * @param {module:matrixFunctions~alterCoordinate} fn 
 * @returns {module:matrixObjects~Point}
 */
const alterCoordinates = (pnt, fn) => point(fn(pnt?.x ?? null, 'x', pnt), fn(pnt?.y ?? null, 'y', pnt), fn(pnt?.z ?? null, 'z', pnt))

export default alterCoordinates
