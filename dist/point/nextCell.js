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
 * Based on provided point and point direction generate next point.
 * @param pnt - Provide the current / initial point
 * @param dir - Provide the direction to be applied to find the next point
 */
const nextCell = (pnt, dir) => (0, point_1.default)(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z);
exports.default = nextCell;