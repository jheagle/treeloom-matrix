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
/**
 * The grid itself: a matrix of layers, rows and columns (treeloom items with the matrix.* traits), where each
 * column holds a tile with its point.
 */
const buildMatrix_1 = __importDefault(require("./buildMatrix"));
const cube_1 = __importDefault(require("./cube"));
const matrix_1 = __importDefault(require("./matrix"));
const navigableGrid_1 = __importDefault(require("./navigableGrid"));
const square_1 = __importDefault(require("./square"));
const tile_1 = __importDefault(require("./tile"));
const updateMatrixPoints_1 = __importDefault(require("./updateMatrixPoints"));
exports.default = {
  buildMatrix: buildMatrix_1.default,
  cube: cube_1.default,
  matrix: matrix_1.default,
  navigableGrid: navigableGrid_1.default,
  square: square_1.default,
  tile: tile_1.default,
  updateMatrixPoints: updateMatrixPoints_1.default
};