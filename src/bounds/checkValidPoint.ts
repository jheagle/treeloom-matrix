import 'core-js/stable'
import getAxisLengths from './getAxisLengths'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Test if the provided point exists in the matrix.
 * @param pnt - Provide a point to validate.
 * @param matrix - The matrix that contains valid points.
 */
const checkValidPoint = (pnt: Point, matrix: Matrix): boolean => {
  const matrixDimensions = getAxisLengths(matrix)
  if (pnt.x >= matrixDimensions.x || pnt.y >= matrixDimensions.y || pnt.z >= matrixDimensions.z) {
    return false
  }
  return !!matrix.children[pnt.z] &&
    !!matrix.children[pnt.z].children[pnt.y] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point
}

export default checkValidPoint
