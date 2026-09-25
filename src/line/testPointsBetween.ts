import 'core-js/stable'
import getLinePoints from './getLinePoints'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'
import { PointsBetween, TestPointStatus } from './types'

/**
 * Given a start and end point, test the points between with the provided function. Return the points as part of true
 * and / or false properties based on the test.
 * @function
 * @param start - The beginning point to check.
 * @param end - The terminating point to check between.
 * @param matrix - The grid of points all the points can exist on.
 * @param func - The test function which will return true or false.
 * @param inclusive - Choose whether to include or exclude the start and end points in the results.
 */
const testPointsBetween = (start: Point, end: Point, matrix: Matrix, func: TestPointStatus, inclusive: boolean = true): PointsBetween => getLinePoints(start, end).filter(
  (_prop, i, line) => ((i !== 0 && i !== line.length - 1) || inclusive)
).reduce(
  (newPoints: PointsBetween, next) => {
    newPoints[func(next, matrix) ? 'true' : 'false'].push(next)
    return newPoints
  },
  { true: [], false: [] }
)

export default testPointsBetween
