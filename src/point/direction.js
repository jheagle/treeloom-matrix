import 'core-js/stable'
import point from './point.js'
import nextCell from './nextCell.js'
import prevCell from './prevCell.js'
import siFunciona from 'si-funciona'

/**
 * Direction represents the delta from on point to another and indicactes the direction of travel.
 * @typedef {module:matrixObjects~Point} module:matrixObjects~Direction
 * @property {module:matrixObjects~coordinate} x - The X-coordinate is the x difference from starting to end point along a line.
 * @property {module:matrixObjects~coordinate} y - The Y-coordinate is the x difference from starting to end point along a line.
 * @property {module:matrixObjects~coordinate} z - The Z-coordinate is the x difference from starting to end point along a line.
 * @method next - Get the next point in the direction from a starting point
 * @method prev - Get the previous point in the direction from a starting point
 */

/**
 * Create a direction object having x, y, z properties and next/prev methods
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @returns {module:matrixObjects~Direction}
 */
const direction = (x, y, z = 0) => {
    const simplifiedCoordinates = siFunciona.simplestRatio(x, y, z)
    const dir = point(...simplifiedCoordinates)
    dir.next = start => nextCell(start, dir)
    dir.prev = end => prevCell(end, dir)
    return dir
}

export default direction
