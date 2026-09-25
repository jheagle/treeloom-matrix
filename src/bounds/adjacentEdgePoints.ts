import 'core-js/stable'
import point from '../point/point'
import nextCell from '../point/nextCell'
import checkValidPoint from './checkValidPoint'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Return all points which touch on edges (not diagonal)
 * @function
 * @param pnt - The point we want to find adjacent points for.
 * @param matrix - The matrix having the point.
 */
const adjacentEdgePoints = (pnt: Point, matrix: Matrix): Point[] => [
  point(-1, 0, 0),
  point(1, 0, 0),
  point(0, -1, 0),
  point(0, 1, 0),
  point(0, 0, -1),
  point(0, 0, 1)
].map(p => nextCell(pnt, p)).filter(p => checkValidPoint(p, matrix))

export default adjacentEdgePoints
