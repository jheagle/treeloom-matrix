import 'core-js/stable';
import { Point } from '../point/types';
/**
 * Using a max an min point, find the ranges for each coordinate.
 * @param minPoint - The smallest point in the matrix
 * @param maxPoint - The largest point in the matrix
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns The number of available coordinates on each axis
 */
declare const getCoordinateRanges: (minPoint: Point, maxPoint: Point, maxRanges?: Point | null) => Point;
export default getCoordinateRanges;
