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
const matrix_1 = __importDefault(require('./matrix'))
const updateMatrixPoints_1 = __importDefault(require('./updateMatrixPoints'))
const json_dom_1 = __importDefault(require('json-dom'))
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * Create the matrix and assign the correct points to each tile.
 * @function
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
const buildMatrix = (dimensions = {
  x: 0,
  y: 0,
  z: 1
}, props = {
  x: {},
  y: {},
  z: {},
  matrix: {}
}) => si_funciona_1.default.pipe(json_dom_1.default.setParentItemReferences, updateMatrixPoints_1.default)((0, matrix_1.default)(dimensions, props))
exports.default = buildMatrix
