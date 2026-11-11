/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from '../point/point'
import lineEndPoint from './lineEndPoint'

describe('lineEndPoint', () => {
  test('get the correct end point along x-axis', () => {
    const start = point(0, 0, 0)
    const length = 5
    const dir = point(1, 0, 0)
    const endPoint = lineEndPoint(start, length, dir)
    expect(endPoint).toEqual(point(4, 0, 0))
  })
  test('get the correct end point along y-axis', () => {
    const start = point(0, 0, 0)
    const length = 5
    const dir = point(0, 1, 0)
    const endPoint = lineEndPoint(start, length, dir)
    expect(endPoint).toEqual(point(0, 4, 0))
  })
  test('get the correct end point along z-axis', () => {
    const start = point(0, 0, 0)
    const length = 5
    const dir = point(0, 0, 1)
    const endPoint = lineEndPoint(start, length, dir)
    expect(endPoint).toEqual(point(0, 0, 4))
  })
  test('get the correct end point diagonal x,y', () => {
    const start = point(0, 0, 0)
    const length = 5
    const dir = point(1, 1, 0)
    const endPoint = lineEndPoint(start, length, dir)
    expect(endPoint).toEqual(point(4, 4, 0))
  })
  test('get the correct end point diagonal x,y,z', () => {
    const start = point(0, 0, 0)
    const length = 5
    const dir = point(1, 1, 1)
    const endPoint = lineEndPoint(start, length, dir)
    expect(endPoint).toEqual(point(4, 4, 4))
  })
  test('get the correct end point negative diagonal x,y,z', () => {
    const start = point(4, 4, 0)
    const length = 5
    const dir = point(-1, -1, 1)
    const endPoint = lineEndPoint(start, length, dir)
    expect(endPoint).toEqual(point(0, 0, 4))
  })
})
