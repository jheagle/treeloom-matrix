/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from './point'

describe('point', () => {
  test('should return a point object with x, y, z coordinates', () => {
    const x = 1
    const y = 2
    const z = 3
    const expectedPoint = { x, y, z }
    expect(point(x, y, z)).toEqual(expectedPoint)
  })
})
