/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import adjacentEdgePoints from './adjacentEdgePoints'
import point from '../point/point'
import buildMatrix from '../grid/buildMatrix'

describe('adjacentEdgePoints', () => {
  test('returns all points which touch on edges (not diagonal)', () => {
    const m = buildMatrix({ x: 3, y: 3, z: 3 })
    const pnt = point(1, 1, 1)
    const result = adjacentEdgePoints(pnt, m)
    expect(result).toHaveLength(6)
  })
  test('returns only valid points within the matrix', () => {
    const m = buildMatrix({ x: 3, y: 3, z: 3 })
    const pnt = point(0, 0, 0)
    const result = adjacentEdgePoints(pnt, m)
    expect(result).toHaveLength(3)
  })
})
