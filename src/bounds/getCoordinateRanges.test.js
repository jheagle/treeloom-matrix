/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getCoordinateRanges from './getCoordinateRanges'
import point from '../point/point'

describe('getCoordinateRanges', () => {
  test('returns the correct ranges for a matrix', () => {
    const ranges = getCoordinateRanges(point(0, 0, 0), point(2, 3, 4))
    expect(ranges).toEqual({ x: 3, y: 4, z: 5 })
  })
  test('returns the correct ranges for a matrix with maxRanges', () => {
    const minPoint = point(0, 0, 0)
    const maxPoint = point(2, 3, 4)
    const maxRanges = point(2, 3, 4)
    const ranges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
    expect(ranges).toEqual({ x: 2, y: 3, z: 4 })
  })
})
