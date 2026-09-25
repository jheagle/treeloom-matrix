import 'core-js/stable'
import buildMatrix from './buildMatrix'

/**
 * Return a matrix where x, y, and z are equal
 * @function
 * @param {Array.<module:matrixObjects~MatrixTile>} [x=[]] - All the data to be presented as part of the
 * specified point, requires MatrixTile base
 * @param {Array.<module:matrixObjects~MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
 * @param {Array.<module:matrixObjects~MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
 * @param {Array.<module:matrixObjects~Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
 * @param {number} size - Used to define height, width, and depth as equal values
 * @returns {module:matrixObjects~Matrix}
 */
const cube = ({ x = [], y = [], z = [], matrix = [] } = {}, size) => buildMatrix(
  { x: size, y: size, z: size },
  { x: x, y: y, z: z, matrix: matrix }
)

export default cube
