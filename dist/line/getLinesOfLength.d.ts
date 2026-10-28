import { Line } from './types';
import { Point } from '../point/types';
/**
 * Every straight, horizontal or vertical, line of exactly `length` points which fits within a grid of the given
 * dimensions (z is always 0 - no diagonals or 3D lines; dimensions.x is the number of columns, dimensions.y the
 * number of rows, matching getAxisLengths). Purely geometric: it knows nothing about what occupies a cell, so a
 * caller filters the result for any blocked-cell test of its own.
 * @param dimensions - The grid's own size (x = columns, y = rows).
 * @param length - The exact number of points each line must have.
 */
declare const getLinesOfLength: (dimensions: Point, length: number) => Line[];
export default getLinesOfLength;
