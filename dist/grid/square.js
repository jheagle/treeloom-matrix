'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _buildMatrix = _interopRequireDefault(require('./buildMatrix.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return a single layer matrix where x and y are equal
 * @function
 * @param {Array.<module:matrixObjects~MatrixTile>} [x=[]] - All the data to be presented as part of the
 * specified point, requires MatrixTile base
 * @param {Array.<module:matrixObjects~MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
 * @param {Array.<module:matrixObjects~MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
 * @param {Array.<module:matrixObjects~Matrix>} [matrix=[]] - Additional data to append to the Matrix
 * @param {number} size - Used to define height and width as equal values (depth is set to 1)
 * @returns {module:matrixObjects~Matrix}
 */
const square = ({
  x = [],
  y = [],
  z = [],
  matrix = []
} = {}, size) => (0, _buildMatrix.default)({
  x: size,
  y: size,
  z: 1
}, {
  x,
  y,
  z,
  matrix
})
const _default = exports.default = square
