import 'core-js/stable'
import getPointsForLines from '../line/getPointsForLines'
import point from '../point/point'
import nextCell from '../point/nextCell'
import checkValidPoint from './checkValidPoint'
import { logObject } from 'test-filesystem'

/**
 * Return all valid points surrounding a provided point
 * @function
 * @param {module:matrixObjects~Point} pnt - The point we want to find adjacent points for.
 * @param {module:matrixObjects~Matrix} matrix - The matrix having the point.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const adjacentPoints = (pnt, matrix) => getPointsForLines([
  [point(-1, -1, -1), point(-1, 1, -1)],
  [point(0, -1, -1), point(0, 1, -1)],
  [point(1, -1, -1), point(1, 1, -1)],
  [point(-1, -1, 0), point(-1, 1, 0)],
  [point(1, -1, 0), point(1, 1, 0)],
  [point(-1, -1, 1), point(-1, 1, 1)],
  [point(0, -1, 1), point(0, 1, 1)],
  [point(1, -1, 1), point(1, 1, 1)],
])
  .concat([
    point(0, -1, 0),
    point(0, 1, 0),
  ])
  .map(p => nextCell(pnt, p))
  .filter(p => checkValidPoint(p, matrix))

export default adjacentPoints
