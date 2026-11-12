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
const getLineIntersectPoints_1 = __importDefault(require("./getLineIntersectPoints"));
const getLineRelativePoints_1 = __importDefault(require("./getLineRelativePoints"));
const getLineTransitionPoints_1 = __importDefault(require("./getLineTransitionPoints"));
/**
 * Find the points that a line would cross from 'start' to 'end' and return the array of points
 * @param start - The starting location of the line.
 * @param end - The final line destination.
 * @param type - select the method used for finding the points: 'relative'|'intersect'|'transition'
 * @param line - The points found so far, the resulting points are added to it.
 * @returns The points connecting start and end
 */
const getLinePoints = (start, end, type = 'relative', line = []) => {
  switch (type) {
    case 'relative':
      return (0, getLineRelativePoints_1.default)(start, end, line);
    case 'intersect':
      return (0, getLineIntersectPoints_1.default)(start, end, line);
    case 'transition':
      return (0, getLineTransitionPoints_1.default)(start, end, line);
    default:
      throw Error(`The given type: '${type}' is invalid. Valid types are 'relative', 'intersect', 'transition'`);
  }
};
exports.default = getLinePoints;