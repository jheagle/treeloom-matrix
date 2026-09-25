import 'core-js/stable';
import { Point } from '../point/types';
import { Line } from './types';
/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1]). Line contains only exactly matched points
 * @function
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 */
declare const getLineIntersectPoints: (start: Point, end: Point, line?: Line) => Line;
export default getLineIntersectPoints;
