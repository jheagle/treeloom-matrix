import 'core-js/stable'
import point from '../point/point'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Return point-like object with all of the axis lengths.
 * @function
 * @param matrix - The matrix to get the dimensions of.
 */
const getAxisLengths = (matrix: Matrix): Point => point(
  matrix.children[0].children[0].children.length,
  matrix.children[0].children.length,
  matrix.children.length
)

export default getAxisLengths
