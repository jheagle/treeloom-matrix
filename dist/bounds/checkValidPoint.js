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
const getAxisLengths_1 = __importDefault(require("./getAxisLengths"));
/**
 * Test if the provided point exists in the matrix.
 * @param pnt - Provide a point to validate.
 * @param matrix - The matrix that contains valid points.
 */
const checkValidPoint = (pnt, matrix) => {
  const matrixDimensions = (0, getAxisLengths_1.default)(matrix);
  if (pnt.x >= matrixDimensions.x || pnt.y >= matrixDimensions.y || pnt.z >= matrixDimensions.z) {
    return false;
  }
  return !!matrix.children[pnt.z] && !!matrix.children[pnt.z].children[pnt.y] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point;
};
exports.default = checkValidPoint;