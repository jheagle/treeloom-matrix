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
 * Lines between points: find the points a line passes through, and test the points along it.
 */
const checkInBetween_1 = __importDefault(require("./checkInBetween"));
const getLineIntersectPoints_1 = __importDefault(require("./getLineIntersectPoints"));
const getLinePoints_1 = __importDefault(require("./getLinePoints"));
const getLineRelativePoints_1 = __importDefault(require("./getLineRelativePoints"));
const getLineTransitionPoints_1 = __importDefault(require("./getLineTransitionPoints"));
const getLinesOfLength_1 = __importDefault(require("./getLinesOfLength"));
const getPointsForLines_1 = __importDefault(require("./getPointsForLines"));
const lineEndPoint_1 = __importDefault(require("./lineEndPoint"));
const pointsToStep_1 = __importDefault(require("./pointsToStep"));
const testPointsBetween_1 = __importDefault(require("./testPointsBetween"));
exports.default = {
  checkInBetween: checkInBetween_1.default,
  getLineIntersectPoints: getLineIntersectPoints_1.default,
  getLinePoints: getLinePoints_1.default,
  getLineRelativePoints: getLineRelativePoints_1.default,
  getLineTransitionPoints: getLineTransitionPoints_1.default,
  getLinesOfLength: getLinesOfLength_1.default,
  getPointsForLines: getPointsForLines_1.default,
  lineEndPoint: lineEndPoint_1.default,
  pointsToStep: pointsToStep_1.default,
  testPointsBetween: testPointsBetween_1.default
};