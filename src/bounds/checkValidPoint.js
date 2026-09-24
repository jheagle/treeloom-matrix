import 'core-js/stable'
import getAxisLengths from './getAxisLengths'

/**
 * Test if the provided point exists in the matrix.
 * @function
 * @param {module:matrixObjects~Point} pnt - Provide a point to validate.
 * @param {module:matrixObjects~Matrix} matrix - The matrix that contains valid points.
 * @returns {boolean}
 */
const checkValidPoint = (pnt, matrix) => {
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
