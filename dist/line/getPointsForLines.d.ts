import 'core-js/stable';
import { Line, LineSegment } from './types';
/**
 * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
 * array of all points captured for each line segment
 * @function
 * @param lines - An array of line segments, each is the arguments for getLinePoints (start, end, and optionally the type).
 * @returns All the points of all the lines in one array
 */
declare const getPointsForLines: (lines: LineSegment[]) => Line;
export default getPointsForLines;
