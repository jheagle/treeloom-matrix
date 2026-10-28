import { Direction, Point } from '../point/types';
/**
 * Find the lowest common ratio of the difference between the coordinates of two points.
 * @param start - The first point to assess.
 * @param end - The other point to assess.
 * @returns A Direction, or just the point 0, 0, 0 when both points are the same
 */
declare const pointsToStep: (start: Point, end: Point) => Point | Direction;
export default pointsToStep;
