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
const point_1 = __importDefault(require("./point"));
/**
 * Based on provided point and another point, get a point with the difference between each axis
 * @param start - The first point to compare
 * @param end - The other point to be compared
 */
const pointDifference = (start, end) => (0, point_1.default)(end.x - start.x, end.y - start.y, end.z - start.z);
exports.default = pointDifference;