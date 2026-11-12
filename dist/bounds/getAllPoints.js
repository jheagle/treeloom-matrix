"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Return an array of all the points in the matrix
 * @param matrix - The matrix (or any level of it) to retrieve points from.
 * @param allPoints - The array of points to add the found points to.
 */
const getAllPoints = (matrix, allPoints = []) => matrix.point ? allPoints.concat([matrix.point]) : matrix.children.reduce((allPoints, child) => allPoints.concat(getAllPoints(child, [])), []);
exports.default = getAllPoints;