/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import checkValidPoint from './checkValidPoint'
import point from '../point/point'
import buildMatrix from '../grid/buildMatrix'

describe('checkValidPoint', () => {
  test('should return true for a valid point in a matrix', () => {
    const testMatrix = buildMatrix({ x: 2, y: 2, z: 2 })
    const testPoint = point(1, 1, 1)
    expect(checkValidPoint(testPoint, testMatrix)).toBe(true)
  })

  test('should return false for an invalid point in a matrix', () => {
    const testMatrix = buildMatrix({ x: 2, y: 2, z: 2 })
    const testPoint = point(3, 3, 3)
    expect(checkValidPoint(testPoint, testMatrix)).toBe(false)
  })

  test('should return false for point exceeds matrix', () => {
    const testMatrix = buildMatrix({ x: 2, y: 1, z: 1 })
    const testPoint = point(1, 1, 1)
    expect(checkValidPoint(testPoint, testMatrix)).toBe(false)
  })
})
