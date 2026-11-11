/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import sortAxisCoordinates from './sortAxisCoordinates'
import point from './point'

describe('sortAxisCoordinates', () => {
  test('sorts with high-low x,y,z', () => {
    const pnt = point(20, 10, 5)
    expect(sortAxisCoordinates(pnt)).toEqual([
      { axis: 'x', coordinate: pnt.x },
      { axis: 'y', coordinate: pnt.y },
      { axis: 'z', coordinate: pnt.z },
    ])
  })
  test('sorts with high-low y,z,x', () => {
    const pnt = point(5, 20, 10)
    expect(sortAxisCoordinates(pnt)).toEqual([
      { axis: 'y', coordinate: pnt.y },
      { axis: 'z', coordinate: pnt.z },
      { axis: 'x', coordinate: pnt.x },
    ])
  })
  test('sorts with high-low z,x,y', () => {
    const pnt = point(10, 5, 20)
    expect(sortAxisCoordinates(pnt)).toEqual([
      { axis: 'z', coordinate: pnt.z },
      { axis: 'x', coordinate: pnt.x },
      { axis: 'y', coordinate: pnt.y },
    ])
  })
  test('sorts with low-high x,y,z', () => {
    const pnt = point(5, 10, 20)
    expect(sortAxisCoordinates(pnt, 'asc')).toEqual([
      { axis: 'x', coordinate: pnt.x },
      { axis: 'y', coordinate: pnt.y },
      { axis: 'z', coordinate: pnt.z },
    ])
  })
  test('sorts with low-high y,z,x', () => {
    const pnt = point(20, 5, 10)
    expect(sortAxisCoordinates(pnt, 'asc')).toEqual([
      { axis: 'y', coordinate: pnt.y },
      { axis: 'z', coordinate: pnt.z },
      { axis: 'x', coordinate: pnt.x },
    ])
  })
  test('sorts with low-high z,x,y', () => {
    const pnt = point(10, 20, 5)
    expect(sortAxisCoordinates(pnt, 'asc')).toEqual([
      { axis: 'z', coordinate: pnt.z },
      { axis: 'x', coordinate: pnt.x },
      { axis: 'y', coordinate: pnt.y },
    ])
  })
})
