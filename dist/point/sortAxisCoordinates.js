"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Take a point and sort the coordinates, return an array of them sorted.
 * @param pnt - the Point to be sorted
 * @param direction - 'asc'|'desc'
 */
const sortAxisCoordinates = (pnt, direction = 'desc') => {
  const sortFn = direction === 'desc' ? (a, b) => b.coordinate - a.coordinate : (a, b) => a.coordinate - b.coordinate;
  const axisCoordinatePairs = [{
    axis: 'x',
    coordinate: pnt.x
  }, {
    axis: 'y',
    coordinate: pnt.y
  }, {
    axis: 'z',
    coordinate: pnt.z
  }];
  return axisCoordinatePairs.sort(sortFn);
};
exports.default = sortAxisCoordinates;