import getPointsForLines from '../line/getPointsForLines'
import point from '../point/point'
import nextCell from '../point/nextCell'
import checkValidPoint from './checkValidPoint'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Return all valid points surrounding a provided point
 * @param pnt - The point we want to find adjacent points for.
 * @param matrix - The matrix having the point.
 */
const adjacentPoints = (pnt: Point, matrix: Matrix): Point[] => getPointsForLines([
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
