/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import pointsToStep from './pointsToStep'
import point from '../point/point'

describe('pointsToStep', () => {
  test('returns simplified coordinates for 0,0,0 to 0,0,3', () => {
    const start = point(0, 0, 0)
    const end = point(0, 0, 3)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(0)
    expect(step.y).toEqual(0)
    expect(step.z).toEqual(1)
  })
  test('returns simplified coordinates for 0,0,0 to 3,0,0', () => {
    const start = point(0, 0, 0)
    const end = point(3, 0, 0)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(1)
    expect(step.y).toEqual(0)
    expect(step.z).toEqual(0)
  })
  test('returns simplified coordinates for 0,0,0 to 0,3,0', () => {
    const start = point(0, 0, 0)
    const end = point(0, 3, 0)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(0)
    expect(step.y).toEqual(1)
    expect(step.z).toEqual(0)
  })
  test('returns simplified coordinates for 0,0,0 to 3,3,3', () => {
    const start = point(0, 0, 0)
    const end = point(3, 3, 3)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(1)
    expect(step.y).toEqual(1)
    expect(step.z).toEqual(1)
  })
  // negative direction line
  test('returns simplified coordinates for 3,3,3 to 0,0,0', () => {
    const start = point(3, 3, 3)
    const end = point(0, 0, 0)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(-1)
    expect(step.y).toEqual(-1)
    expect(step.z).toEqual(-1)
  })

  test('returns simplified coordinates for 0,0,0 to 6,4,2', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(3)
    expect(step.y).toEqual(2)
    expect(step.z).toEqual(1)
  })

  test('returns simplified coordinates for 5,5,5 to 5,5,5', () => {
    const start = point(5, 5, 5)
    const end = point(5, 5, 5)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(0)
    expect(step.y).toEqual(0)
    expect(step.z).toEqual(0)
  })

  test('returns simplified coordinates for 5,5,5 to 6,4,2', () => {
    const start = point(5, 5, 5)
    const end = point(6, 4, 2)
    const step = pointsToStep(start, end)
    expect(step.x).toEqual(1)
    expect(step.y).toEqual(-1)
    expect(step.z).toEqual(-3)
  })
})
