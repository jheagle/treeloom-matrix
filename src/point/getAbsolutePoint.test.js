/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getAbsolutePoint from './getAbsolutePoint'
import point from './point'

describe('getAbsolutePoint', () => {
  test('should return the point with absolute coordinates', () => {
    const testPoint = point(-5, 3, 2)
    expect(getAbsolutePoint(testPoint)).toEqual({ x: 5, y: 3, z: 2 })
  })
})
