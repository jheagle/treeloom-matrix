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
const getCoordinateRanges_1 = __importDefault(require("../bounds/getCoordinateRanges"));
const getMatrixRange_1 = __importDefault(require("../bounds/getMatrixRange"));
const point_1 = __importDefault(require("../point/point"));
/**
 * Get random point within a matrix
 * @param matrix - The matrix that the point will be contained within.
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randPoint = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
  const coordinateRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
  return (0, point_1.default)(si_funciona_1.default.randomInteger(coordinateRanges.x, minPoint.x), si_funciona_1.default.randomInteger(coordinateRanges.y, minPoint.y), si_funciona_1.default.randomInteger(coordinateRanges.z, minPoint.z));
};
exports.default = randPoint;