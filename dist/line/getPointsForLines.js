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
const getLinePoints_1 = __importDefault(require("./getLinePoints"));
/**
 * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
 * array of all points captured for each line segment
 * @param lines - An array of line segments, each is the arguments for getLinePoints (start, end, and optionally the type).
 * @returns All the points of all the lines in one array
 */
const getPointsForLines = lines => lines.reduce((pointsArray, line) => pointsArray.concat((0, getLinePoints_1.default)(...line)), []);
exports.default = getPointsForLines;