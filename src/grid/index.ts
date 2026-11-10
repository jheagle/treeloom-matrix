/**
 * The grid itself: a matrix of layers, rows and columns (json-dom items with the matrix.* traits), where each
 * column holds a tile with its point.
 */
import buildMatrix from './buildMatrix'
import cube from './cube'
import matrix from './matrix'
import navigableGrid from './navigableGrid'
import square from './square'
import tile from './tile'
import updateMatrixPoints from './updateMatrixPoints'

export default {
  buildMatrix,
  cube,
  matrix,
  navigableGrid,
  square,
  tile,
  updateMatrixPoints
}
