/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import nextCell from './nextCell'
import point from './point'

describe('nextCell', () => {
  test('should return the next cell for a given point and offset', () => {
    const testPoint = point(1, 1, 1)
    const offset = point(1, 0, 0)
    expect(nextCell(testPoint, offset)).toEqual(point(2, 1, 1))
  })
})
