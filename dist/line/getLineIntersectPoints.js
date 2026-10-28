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
const pointsToStep_1 = __importDefault(require("./pointsToStep"));
/**
 * Recursively find the next point in a line from 'start' to 'end' using the provided direction. Return an array of points connecting 'start' and 'end'.
 * @param direction - The step from each point to the next
 * @param start - The point to add to the line, then continue from
 * @param end - The final line destination
 * @param line - The points found so far
 */
const nextIntersect = (direction, start, end, line = []) => {
  line.push(start);
  return (0, areEqualPoints_1.default)(start, end) ? line : nextIntersect(direction, direction.next(start), end, line);
};
/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1]). Line contains only exactly matched points
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param line - The resulting line to connect start and end.
 */
const getLineIntersectPoints = (start, end, line = []) => {
  if ((0, areEqualPoints_1.default)(start, end)) {
    return line.concat([start]);
  }
  // start and end differ here, so the step is a Direction
  const simplifiedDirection = (0, pointsToStep_1.default)(start, end);
  return nextIntersect(simplifiedDirection, start, end, line);
};
exports.default = getLineIntersectPoints;