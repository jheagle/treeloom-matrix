/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getFirstAxisOfCoordinate from './getFirstAxisOfCoordinate'
import point from './point'

describe('getFirstAxisOfCoordinate', () => {
  test('should return the first axis of the coordinate', () => {
    const pnt = point(1, 2, 3)
    const coordinate = 2
    const result = getFirstAxisOfCoordinate(pnt, coordinate)
    expect(result).toBe('y')
  })
  test('should return false if the coordinate is not found', () => {
    const pnt = point(1, 2, 3)
    const coordinate = 4
    const result = getFirstAxisOfCoordinate(pnt, coordinate)
    expect(result).toBe(false)
  })
  test('should return the first axis if multiple axes have the same coordinate', () => {
    const pnt = point(1, 2, 2)
    const coordinate = 2
    const result = getFirstAxisOfCoordinate(pnt, coordinate)
    expect(result).toBe('y')
  })
})
