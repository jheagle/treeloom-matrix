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
const matrix_1 = __importDefault(require("./matrix"));
const updateMatrixPoints_1 = __importDefault(require("./updateMatrixPoints"));
const treeloom_1 = __importDefault(require("treeloom"));
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * Create the matrix and assign the correct points to each tile.
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
const buildMatrix = (dimensions = {
  x: 0,
  y: 0,
  z: 1
}, props = {
  x: {},
  y: {},
  z: {},
  matrix: {}
}) => si_funciona_1.default.pipe(treeloom_1.default.setParentItemReferences, updateMatrixPoints_1.default)((0, matrix_1.default)(dimensions, props));
exports.default = buildMatrix;