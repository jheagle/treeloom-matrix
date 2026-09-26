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
const areEqualPoints_1 = __importDefault(require('../point/areEqualPoints'))
const direction_1 = __importDefault(require('../point/direction'))
const point_1 = __importDefault(require('../point/point'))
const pointDifference_1 = __importDefault(require('../point/pointDifference'))
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * Find the lowest common ratio of the difference between the coordinates of two points.
 * @param start - The first point to assess.
 * @param end - The other point to assess.
 * @returns A Direction, or just the point 0, 0, 0 when both points are the same
 */
const pointsToStep = (start, end) => {
  if ((0, areEqualPoints_1.default)(start, end)) {
    return (0, point_1.default)(0, 0, 0)
  }
  const difference = (0, pointDifference_1.default)(start, end)
  const simplifiedCoordinates = si_funciona_1.default.simplestRatio(difference.x, difference.y, difference.z)
  const [dx, dy, dz] = simplifiedCoordinates
  return (0, direction_1.default)(dx, dy, dz)
}
exports.default = pointsToStep
