/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from '../point/point'
import getPointsForLines from './getPointsForLines'

describe('getPointsLines', () => {
  test('takes several point arrays and returns points for all lines', () => {
    // create an array of arrays with start and end points that generates multiple lines
    const startEndPoints = [
      [point(-1, -1, -1), point(-1, 1, -1)],
      [point(0, -1, -1), point(0, 1, -1)],
      [point(1, -1, -1), point(1, 1, -1)],
      [point(-1, -1, 0), point(-1, 1, 0)],
      [point(1, -1, 0), point(1, 1, 0)],
      [point(-1, -1, 1), point(-1, 1, 1)],
      [point(0, -1, 1), point(0, 1, 1)],
      [point(1, -1, 1), point(1, 1, 1)],
    ]

    // return all of the points in all of the lines
    const foundPoints = getPointsForLines(startEndPoints)

    // test that all of the expected points are returned.
    expect(foundPoints.length).toBe(24)
  })
})
