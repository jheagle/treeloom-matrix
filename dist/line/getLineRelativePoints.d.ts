import 'core-js/stable';
import { Point } from '../point/types';
import { Line } from './types';
/**
 * Having provided two points, return an array of integer transition points connecting 'start' and 'end'.
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 */
declare const getLineRelativePoints: (start: Point, end: Point, line?: Line) => Line;
export default getLineRelativePoints;
