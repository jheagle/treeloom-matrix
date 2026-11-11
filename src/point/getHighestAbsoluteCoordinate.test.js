/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getHighestAbsoluteCoordinate from './getHighestAbsoluteCoordinate'
import point from './point'

describe('getHighestAbsoluteCoordinate', () => {
  test('should return the highest absolute coordinate value', () => {
    const testPoint = point(-5, 3, 2)
    expect(getHighestAbsoluteCoordinate(testPoint)).toBe(-5)
  })
})
