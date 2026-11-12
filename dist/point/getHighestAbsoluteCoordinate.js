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
/**
 * Return the first coordinate number with the highest absolute value.
 * @param pnt - A Point to be assessed.
 */
const getHighestAbsoluteCoordinate = pnt => si_funciona_1.default.reduceObject(pnt, si_funciona_1.default.absoluteMax, 0);
exports.default = getHighestAbsoluteCoordinate;