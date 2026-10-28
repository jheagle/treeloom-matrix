import { Direction, Point } from '../point/types';
/**
 * Given a start point, line length, and a direction, generate the end point of the line.
 * @param start - The selected starting point.
 * @param length - The total length of the line.
 * @param dir - The direction of the line.
 */
declare const lineEndPoint: (start: Point, length: number, dir: Point | Direction) => Point;
export default lineEndPoint;
