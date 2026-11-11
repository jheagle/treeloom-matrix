/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import pointDifference from './pointDifference'
import point from './point'

describe('pointDifference', () => {
  test('return difference along x', () => {
    const start = point(0, 0, 0)
    const end = point(10, 0, 0)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })

  test('return difference along y', () => {
    const start = point(0, 0, 0)
    const end = point(0, 10, 0)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })

  test('return difference along z', () => {
    const start = point(0, 0, 0)
    const end = point(0, 0, 10)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })

  test('return difference diagonal x,y', () => {
    const start = point(0, 0, 0)
    const end = point(10, 10, 0)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })

  test('return difference diagonal x,z', () => {
    const start = point(0, 0, 0)
    const end = point(10, 0, 10)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })

  test('return difference diagonal y,z', () => {
    const start = point(0, 0, 0)
    const end = point(0, 10, 10)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })

  test('return difference diagonal x,y,z', () => {
    const start = point(0, 0, 0)
    const end = point(10, 10, 10)
    const result = pointDifference(start, end)
    expect(result).toEqual(end)
  })
})
