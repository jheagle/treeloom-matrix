/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from '../point/point'
import getLineIntersectPoints from './getLineIntersectPoints'

describe('getLineIntersectPoints', () => {
  test('returns an array of points from 0,0,0 to 0,0,3', () => {
    const start = point(0, 0, 0)
    const end = point(0, 0, 3)
    const result = getLineIntersectPoints(start, end)
    expect(result).toHaveLength(4)
  })
  test('returns an array of points from 0,0,0 to 3,0,0', () => {
    const start = point(0, 0, 0)
    const end = point(3, 0, 0)
    const result = getLineIntersectPoints(start, end)
    expect(result).toHaveLength(4)
  })
  test('returns an array of points from 0,0,0 to 0,3,0', () => {
    const start = point(0, 0, 0)
    const end = point(0, 3, 0)
    const result = getLineIntersectPoints(start, end)
    expect(result).toHaveLength(4)
  })
  test('returns an array of points from 0,0,0 to 3,3,3', () => {
    const start = point(0, 0, 0)
    const end = point(3, 3, 3)
    const result = getLineIntersectPoints(start, end)
    expect(result).toHaveLength(4)
  })
  // negative direction line
  test('returns an array of points from 3,3,3 to 0,0,0', () => {
    const start = point(3, 3, 3)
    const end = point(0, 0, 0)
    const result = getLineIntersectPoints(start, end)
    expect(result).toHaveLength(4)
  })

  test('returns array of points in rectangular diagonal, ', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const result = getLineIntersectPoints(start, end)
    expect(result).toHaveLength(3)
  })
})
