"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const si_funciona_1 = __importDefault(require("si-funciona"));
const alterCoordinates_1 = __importDefault(require("../point/alterCoordinates"));
const getCoordinateRanges_1 = __importDefault(require("../bounds/getCoordinateRanges"));
const getHighestAbsoluteCoordinate_1 = __importDefault(require("../point/getHighestAbsoluteCoordinate"));
const getMatrixRange_1 = __importDefault(require("../bounds/getMatrixRange"));
const nextCell_1 = __importDefault(require("../point/nextCell"));
const randomPoint_1 = __importDefault(require("./randomPoint"));
const randDirectionWithInterval_1 = __importDefault(require("./randDirectionWithInterval"));
/**
 * Generate a random starting point for a line with the provided length and direction.
 * @param matrix - The matrix in which the line will be drawn.
 * @param length - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param dir - The direction the line will extend towards, null will use a random direction within the matrix
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randomStart = (matrix, length = null, dir = null, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
  maxRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
  // length must be at least 1, and less than the highest coordinate in the matrix
  const lineLength = length ?? si_funciona_1.default.randomInteger((0, getHighestAbsoluteCoordinate_1.default)(maxRanges) - 2, 1);
  if (dir === null) {
    dir = (0, randDirectionWithInterval_1.default)(matrix, null, lineLength, maxRanges);
  }
  // check direction has at least one non-zero component
  if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
    throw new Error('Direction must have at least one non-zero coordinate');
  }
  const multipleToLength = (0, alterCoordinates_1.default)(dir, coordinate => {
    if (lineLength % coordinate !== 0) {
      return null;
    }
    return lineLength / coordinate;
  });
  const timesToLength = si_funciona_1.default.reduceObject(multipleToLength, (times, coordinate) => {
    if (coordinate === null) {
      return times;
    }
    if (coordinate < times) {
      return coordinate;
    }
    return times;
  }, lineLength);
  for (let i = 0; i < timesToLength; ++i) {
    maxRanges = dir.prev(maxRanges);
  }
  return (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, maxRanges));
};
exports.default = randomStart;