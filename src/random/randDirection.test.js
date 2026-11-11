/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import buildMatrix from '../grid/buildMatrix'
import checkValidPoint from '../bounds/checkValidPoint'
import getAbsolutePoint from '../point/getAbsolutePoint'
import point from '../point/point'
import randDirection from './randDirection'

describe('randDirection', () => {
  test('result when there is no more room within the matrix', () => {
    const matrix = buildMatrix(point(1, 1, 1))
    const start = point(0, 0, 0)
    const result = randDirection(matrix, start)
    expect(result.prev(start)).toEqual(start)
  })
  test('returns a direction that uses maximum matrix range', () => {
    const matrix = buildMatrix(point(2, 2, 2))
    const start = point(1, 1, 1)
    const result = randDirection(matrix, start)
    expect([0, -1]).toContain(result.x)
    expect([0, -1]).toContain(result.y)
    expect([0, -1]).toContain(result.z)
  })
  test('returns a direction that creates a point within the matrix', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const start = point(4, 4, 4)
    const result = randDirection(matrix, start)
    expect(result).toHaveProperty('x')
    expect(result).toHaveProperty('y')
    expect(result).toHaveProperty('z')
    const pointInMatrix = result.next(start)
    expect(checkValidPoint(pointInMatrix, matrix)).toBe(true)
  })
  test('results in error if the start point does not fit the matrix', () => {
    const matrix = buildMatrix(point(2, 1, 1))
    const start = point(1, 1, 1)
    expect(() => randDirection(matrix, start)).toThrow('The given point (1, 1, 1) is not valid within the given matrix (2, 1, 1)')
  })
  test('returns a direction that creates a point within the matrix when no start point is provided', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const result = randDirection(matrix)
    const absolutePoint = getAbsolutePoint(result)
    // point should fit within the matrix
    expect(checkValidPoint(absolutePoint, matrix)).toBe(true)
  })
})
