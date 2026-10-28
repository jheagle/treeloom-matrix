"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const getCoordinateRanges_1 = __importDefault(require("../bounds/getCoordinateRanges"));
const getMatrixRange_1 = __importDefault(require("../bounds/getMatrixRange"));
/**
 * Check each axis of the matrix to see if a length interval would fit within.
 * @param matrix - The matrix that the point will be contained within.
 * @param interval - An interval where a line would intersect in the direction, null for unspecified
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const testIntervalFits = (matrix, interval = null, maxRanges = null) => {
  if (interval === null) {
    return {
      x: true,
      y: true,
      z: true
    };
  }
  const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
  // Use the available ranges as the max ranges
  const ranges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
  const absoluteInterval = Math.abs(interval);
  return {
    x: ranges.x > absoluteInterval,
    y: ranges.y > absoluteInterval,
    z: ranges.z > absoluteInterval
  };
};
exports.default = testIntervalFits;