'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
/**
 * The grid itself: a matrix of layers, rows and columns (json-dom items with the matrix.* traits), where each
 * column holds a tile with its point.
 */
require('core-js/stable')
const buildMatrix_1 = __importDefault(require('./buildMatrix'))
const cube_1 = __importDefault(require('./cube'))
const matrix_1 = __importDefault(require('./matrix'))
const square_1 = __importDefault(require('./square'))
const tile_1 = __importDefault(require('./tile'))
const updateMatrixPoints_1 = __importDefault(require('./updateMatrixPoints'))
exports.default = {
  buildMatrix: buildMatrix_1.default,
  cube: cube_1.default,
  matrix: matrix_1.default,
  square: square_1.default,
  tile: tile_1.default,
  updateMatrixPoints: updateMatrixPoints_1.default
}
