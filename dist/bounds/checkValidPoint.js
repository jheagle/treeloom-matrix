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
require('core-js/stable')
const getAxisLengths_1 = __importDefault(require('./getAxisLengths'))
/**
 * Test if the provided point exists in the matrix.
 * @function
 * @param pnt - Provide a point to validate.
 * @param matrix - The matrix that contains valid points.
 */
const checkValidPoint = (pnt, matrix) => {
  const matrixDimensions = (0, getAxisLengths_1.default)(matrix)
  if (pnt.x >= matrixDimensions.x || pnt.y >= matrixDimensions.y || pnt.z >= matrixDimensions.z) {
    return false
  }
  return !!matrix.children[pnt.z] && !!matrix.children[pnt.z].children[pnt.y] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point
}
exports.default = checkValidPoint
