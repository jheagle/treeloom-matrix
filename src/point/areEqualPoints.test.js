/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import areEqualPoints from './areEqualPoints'
import point from './point'

describe('areEqualPoints', () => {
  test('returns true for points with identical coordinates', () => {
    const p1 = point(1, 1, 1)
    const p2 = point(1, 1, 1)
    const result = areEqualPoints(p1, p2)
    expect(result).toBe(true)
  })
  test('returns false for points with different coordinates', () => {
    const p1 = point(1, 1, 1)
    const p2 = point(2, 2, 2)
    const result = areEqualPoints(p1, p2)
    expect(result).toBe(false)
  })
})
