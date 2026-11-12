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
const getCoordinateRanges_1 = __importDefault(require("./getCoordinateRanges"));
const getMatrixRange_1 = __importDefault(require("./getMatrixRange"));
/**
 * Find the range of the matrix from smallest to largest point.
 * @param matrix - The matrix that the point will be contained within.
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns The number of available coordinates on each axis
 */
const getAvailableRanges = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
  return (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
};
exports.default = getAvailableRanges;