import 'core-js/stable';
import { Point } from '../point/types';
import { Line, LineType } from './types';
/**
 * Find the points that a line would cross from 'start' to 'end' and return the array of points
 * @function
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param type - select the method used for finding the points: 'relative'|'intersect'|'transition'
 * @param line - The points found so far, the resulting points are added to it.
 * @returns The points connecting start and end
 */
declare const getLinePoints: (start: Point, end: Point, type?: LineType, line?: Line) => Line;
export default getLinePoints;
