import 'core-js/stable'
import { Coordinate, Point } from './types'

/**
 * Store the point data for an x, y, z Matrix.
 * @function
 * @param x - The numeric value for X-coordinate
 * @param y - The numeric value for Y-coordinate
 * @param z - The numeric value for Z-coordinate (default to 0 for 2D Matrix)
 */
const point = (x: Coordinate, y: Coordinate, z: Coordinate = 0): Point => ({ x: x, y: y, z: z })

export default point
