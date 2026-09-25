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
const checkValidPoint_1 = __importDefault(require('../bounds/checkValidPoint'))
const direction_1 = __importDefault(require('../point/direction'))
const getAxisLengths_1 = __importDefault(require('../bounds/getAxisLengths'))
const getCoordinateRanges_1 = __importDefault(require('../bounds/getCoordinateRanges'))
const getMatrixRange_1 = __importDefault(require('../bounds/getMatrixRange'))
const nextCell_1 = __importDefault(require('../point/nextCell'))
const pointDifference_1 = __importDefault(require('../point/pointDifference'))
const randomPoint_1 = __importDefault(require('./randomPoint'))
/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @function
 * @param matrix - The matrix that the point will be contained within.
 * @param start - The point the direction will start from, null for random
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randDirection = (matrix, start = null, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix)
  // Use the available ranges as the max ranges
  maxRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges)
  if (start === null) {
    // random point with offset of minimum of matrix
    start = (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, maxRanges))
  }
  if (!(0, checkValidPoint_1.default)(start, matrix)) {
    const matrixDimensions = (0, getAxisLengths_1.default)(matrix)
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`)
  }
  // Find a valid point within the matrix to use as our next point
  const validPoint = (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, maxRanges))
  // Get the difference from start to the new
  const delta = (0, pointDifference_1.default)(start, validPoint)
  return (0, direction_1.default)(delta.x, delta.y, delta.z)
}
exports.default = randDirection
