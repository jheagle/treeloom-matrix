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
function alterCoordinates(pnt, fn) {
  return (0, point_1.default)(fn(pnt?.x ?? null, 'x', pnt), fn(pnt?.y ?? null, 'y', pnt), fn(pnt?.z ?? null, 'z', pnt));
}
exports.default = alterCoordinates;