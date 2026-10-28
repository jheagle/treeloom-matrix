import { Point } from '../point/types';
import { Line } from './types';
/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 * @param transitions - specify the desired number of transitions, resulting points will be transitions+1 (defaults to
 * the largest absolute difference between the points).
 */
declare const getLineTransitionPoints: (start: Point, end: Point, line?: Line, transitions?: number | null) => Line;
export default getLineTransitionPoints;
