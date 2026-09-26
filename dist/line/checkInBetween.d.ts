import 'core-js/stable';
import { Point } from '../point/types';
import { Matrix } from '../grid/types';
import { TestPointStatus } from './types';
/**
 * Given two points, check the cells between using specified function.
 * When inclusive is set to true the provided start and end points will also be tested
 * @param start - The beginning point to check.
 * @param end - The terminating point to check between.
 * @param matrix - The grid of points all the points can exist on.
 * @param func - The test function which will return true or false.
 * @param inclusive - Choose whether to include or exclude the start and end points in the results.
 * @returns Whether at least one of the points passed the test
 */
declare const checkInBetween: (start: Point, end: Point, matrix: Matrix, func: TestPointStatus, inclusive?: boolean) => boolean;
export default checkInBetween;
