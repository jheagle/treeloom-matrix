"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const alterCoordinates_1 = __importDefault(require("../point/alterCoordinates"));
const checkValidPoint_1 = __importDefault(require("../bounds/checkValidPoint"));
const direction_1 = __importDefault(require("../point/direction"));
const getAbsolutePoint_1 = __importDefault(require("../point/getAbsolutePoint"));
const getAxisLengths_1 = __importDefault(require("../bounds/getAxisLengths"));
const getCoordinateRanges_1 = __importDefault(require("../bounds/getCoordinateRanges"));
const getMatrixRange_1 = __importDefault(require("../bounds/getMatrixRange"));
const nextCell_1 = __importDefault(require("../point/nextCell"));
const point_1 = __importDefault(require("../point/point"));
const pointDifference_1 = __importDefault(require("../point/pointDifference"));
const randDirection_1 = __importDefault(require("./randDirection"));
const randomPoint_1 = __importDefault(require("./randomPoint"));
const si_funciona_1 = __importDefault(require("si-funciona"));
const testIntervalFits_1 = __importDefault(require("./testIntervalFits"));
/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @param matrix - The matrix that the point will be contained within.
 * @param start - The point the direction will start from, null for random
 * @param interval - An interval where a line would intersect in the direction, null for random
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randDirectionWithInterval = (matrix, start = null, interval = null, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
  // Use the available ranges as the max ranges
  maxRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
  const intervalFits = (0, testIntervalFits_1.default)(matrix, interval, start === null ? maxRanges : (0, pointDifference_1.default)(start, maxRanges));
  if (!intervalFits.x && !intervalFits.y && !intervalFits.z) {
    throw new Error(`The given interval (${interval}) will not fit in this matrix`);
  }
  if (start === null) {
    // The range is the the total numbers available, but the limit is the highest possible number
    let startLimits = (0, pointDifference_1.default)((0, point_1.default)(1, 1, 1), maxRanges);
    if (interval !== null) {
      startLimits = (0, alterCoordinates_1.default)(startLimits, (coordinate, axis) => intervalFits[axis] ? coordinate - Math.abs(interval) : coordinate);
    }
    // random point with offset of minimum of matrix
    start = (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, startLimits));
  }
  if (!(0, checkValidPoint_1.default)(start, matrix)) {
    const matrixDimensions = (0, getAxisLengths_1.default)(matrix);
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`);
  }
  // Reduce limits by start (absolute values)
  const startOffset = (0, getAbsolutePoint_1.default)((0, pointDifference_1.default)(minPoint, start));
  // end limits should be offset by start point coordinates and ensure at least one end is interval distance from start
  const endLimits = (0, point_1.default)(maxRanges.x - startOffset.x - 1, maxRanges.y - startOffset.y - 1, maxRanges.z - startOffset.z - 1);
  const randDir = (0, randDirection_1.default)(matrix, start, endLimits);
  const validPoint = (0, nextCell_1.default)(startOffset, randDir.next(start));
  const delta = (0, pointDifference_1.default)(start, validPoint);
  // check if any coordinate already has the coorect interval
  if (interval !== null) {
    // none of the coordinates have the interval, so pick a valid one to update
    const axisFit = si_funciona_1.default.reduceObject(intervalFits, (fitResults, fits, axis) => {
      if (fits) {
        fitResults.push(axis);
      }
      return fitResults;
    }, []);
    // Pick a random axis that fits and set that coordinate to the interval
    const fixedAxis = axisFit[si_funciona_1.default.randomInteger(axisFit.length)];
    delta[fixedAxis] = interval;
  }
  return (0, direction_1.default)(delta.x, delta.y, delta.z);
};
exports.default = randDirectionWithInterval;