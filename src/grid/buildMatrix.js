import matrix from './matrix.js'
import updateMatrixPoints from './updateMatrixPoints.js'
import jsonDom from 'json-dom'
import siFunciona from 'si-funciona'

/**
 * Create the matrix and assign the correct points to each tile.
 * @function
 * @param {module:matrixObjects~Point} dimensions - The dimensions of the matrix to be created
 * @param {module:matrixObjects~coordinate} dimensions.x - The width of the matrix
 * @param {module:matrixObjects~coordinate} dimensions.y - The height of the matrix
 * @param {module:matrixObjects~coordinate} dimensions.z - The depth of the matrix
 * @param {Object} props - Additional properties to be added to the matrix
 * @param {Array.<module:matrixObjects~MatrixTile>} props.x - Additional properties to be added to the x axis
 * @param {Array.<module:matrixObjects~MatrixRow>} props.y - Additional properties to be added to the y axis
 * @param {Array.<module:matrixObjects~MatrixLayer>} props.z - Additional properties to be added to the z axis
 * @param {Array.<module:matrixObjects~Matrix>} props.matrix - Additional properties to be added to the matrix
 * @returns {module:matrixObjects~Matrix}
 */
const buildMatrix = (
  dimensions = { x: 0, y: 0, z: 1 },
  props = { x: [], y: [], z: [], matrix: [] }
) => siFunciona.pipe(
  jsonDom.setParentItemReferences,
  updateMatrixPoints
)(matrix(dimensions, props))

export default buildMatrix
