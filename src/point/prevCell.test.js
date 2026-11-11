/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import prevCell from './prevCell'
import point from './point'

describe('prevCell', () => {
  test('should return the previous cell for a given point and offset', () => {
    const testPoint = point(1, 1, 1)
    const offset = point(1, 0, 0)
    expect(prevCell(testPoint, offset)).toEqual(point(0, 1, 1))
  })
})
