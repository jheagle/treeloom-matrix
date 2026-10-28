"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const areEqualPoints_1 = __importDefault(require("../point/areEqualPoints"));
const point_1 = __importDefault(require("../point/point"));
const pointDifference_1 = __importDefault(require("../point/pointDifference"));
const getHighestAbsoluteCoordinate_1 = __importDefault(require("../point/getHighestAbsoluteCoordinate"));
/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 * @param transitions - specify the desired number of transitions, resulting points will be transitions+1 (defaults to
 * the largest absolute difference between the points).
 */
const getLineTransitionPoints = (start, end, line = [], transitions = null) => {
  if ((0, areEqualPoints_1.default)(start, end)) {
    return [start];
  }
  const difference = (0, pointDifference_1.default)(start, end);
  if (transitions === null) {
    transitions = Math.abs((0, getHighestAbsoluteCoordinate_1.default)(difference));
  }
  for (let i = 0; i <= transitions; ++i) {
    // Calculate the fractional distance (t) from 0 to 1
    const t = i / transitions;
    // Linear interpolation formula
    const x = start.x + (end.x - start.x) * t;
    const y = start.y + (end.y - start.y) * t;
    const z = start.z + (end.z - start.z) * t;
    line.push((0, point_1.default)(x, y, z));
  }
  return line;
};
exports.default = getLineTransitionPoints;