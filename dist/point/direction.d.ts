import { Coordinate, Direction } from './types';
/**
 * Create a direction object having x, y, z properties and next/prev methods
 * @param x - The x difference along the line
 * @param y - The y difference along the line
 * @param z - The z difference along the line
 */
declare const direction: (x: Coordinate, y: Coordinate, z?: Coordinate) => Direction;
export default direction;
