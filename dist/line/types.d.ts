import type { Matrix } from '../grid/types';
import type { Point } from '../point/types';
/**
 * A line is the array of points which connect a start and an end point (both included).
 */
export type Line = Point[];
/**
 * The method used for finding the points of a line:
 * 'relative' steps along the line, 'intersect' only keeps points exactly on the line, 'transition' interpolates.
 */
export type LineType = 'relative' | 'intersect' | 'transition';
/**
 * The arguments for one line, these match the parameters of getLinePoints.
 */
export type LineSegment = [start: Point, end: Point, type?: LineType, line?: Line];
/**
 * A function which tests a point (in the given matrix) and returns true or false.
 */
export type TestPointStatus = (pnt: Point, matrix: Matrix) => boolean;
/**
 * The points between two points, sorted by the result of the test.
 */
export interface PointsBetween {
    /** The points which passed the test */
    true: Point[];
    /** The points which failed the test */
    false: Point[];
}
