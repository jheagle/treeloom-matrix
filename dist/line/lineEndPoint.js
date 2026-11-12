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
const point_1 = __importDefault(require("../point/point"));
/**
 * Given a start point, line length, and a direction, generate the end point of the line.
 * @param start - The selected starting point.
 * @param length - The total length of the line.
 * @param dir - The direction of the line.
 */
const lineEndPoint = (start, length, dir) => (0, point_1.default)(start.x + dir.x * (length - 1), start.y + dir.y * (length - 1), start.z + dir.z * (length - 1));
exports.default = lineEndPoint;