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
const point_1 = __importDefault(require("../point/point"));
const directions = [[1, 0], [0, 1]];
/**
 * Every straight, horizontal or vertical, line of exactly `length` points which fits within a grid of the given
 * dimensions (z is always 0 - no diagonals or 3D lines; dimensions.x is the number of columns, dimensions.y the
 * number of rows, matching getAxisLengths). Purely geometric: it knows nothing about what occupies a cell, so a
 * caller filters the result for any blocked-cell test of its own.
 * @param dimensions - The grid's own size (x = columns, y = rows).
 * @param length - The exact number of points each line must have.
 */
const getLinesOfLength = (dimensions, length) => {
  const lines = [];
  for (let y = 0; y < dimensions.y; y++) {
    for (let x = 0; x < dimensions.x; x++) {
      for (const [stepX, stepY] of directions) {
        const endX = x + stepX * (length - 1);
        const endY = y + stepY * (length - 1);
        if (endX >= dimensions.x || endY >= dimensions.y) {
          continue;
        }
        lines.push(Array.from({
          length
        }, (_, i) => (0, point_1.default)(x + stepX * i, y + stepY * i, 0)));
      }
    }
  }
  return lines;
};
exports.default = getLinesOfLength;