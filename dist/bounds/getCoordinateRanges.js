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
const nextCell_1 = __importDefault(require('../point/nextCell'))
const point_1 = __importDefault(require('../point/point'))
const pointDifference_1 = __importDefault(require('../point/pointDifference'))
/**
 * Using a max an min point, find the ranges for each coordinate.
 * @function
 * @param minPoint - The smallest point in the matrix
 * @param maxPoint - The largest point in the matrix
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns The number of available coordinates on each axis
 */
const getCoordinateRanges = (minPoint, maxPoint, maxRanges = null) => {
  // Find the range by getting delta of min and max, then add 1 to each access to included the max point in the range
  const coordinateRanges = (0, nextCell_1.default)((0, pointDifference_1.default)(minPoint, maxPoint), (0, point_1.default)(1, 1, 1))
  if (maxRanges) {
    coordinateRanges.x = Math.min(coordinateRanges.x, maxRanges.x)
    coordinateRanges.y = Math.min(coordinateRanges.y, maxRanges.y)
    coordinateRanges.z = Math.min(coordinateRanges.z, maxRanges.z)
  }
  return coordinateRanges
}
exports.default = getCoordinateRanges
