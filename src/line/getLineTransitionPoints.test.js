import point from '../point/point.js'
import getLineTransitionPoints from './getLineTransitionPoints.js'

describe('getLineTransitionPoints', () => {
  test('returns an array of points from 0,0,0 to 0,0,3', () => {
    const start = point(0, 0, 0)
    const end = point(0, 0, 3)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[3]).toEqual(end)
  })
  test('returns an array of points from 0,0,0 to 3,0,0', () => {
    const start = point(0, 0, 0)
    const end = point(3, 0, 0)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[3]).toEqual(end)
  })
  test('returns an array of points from 0,0,0 to 0,3,0', () => {
    const start = point(0, 0, 0)
    const end = point(0, 3, 0)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[3]).toEqual(end)
  })
  test('returns an array of points from 0,0,0 to 3,3,3', () => {
    const start = point(0, 0, 0)
    const end = point(3, 3, 3)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 1, y: 1, z: 1 })
    expect(result[2]).toEqual({ x: 2, y: 2, z: 2 })
    expect(result[3]).toEqual(end)
  })
  // negative direction line
  test('returns an array of points from 3,3,3 to 0,0,0', () => {
    const start = point(3, 3, 3)
    const end = point(0, 0, 0)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 2, y: 2, z: 2 })
    expect(result[2]).toEqual({ x: 1, y: 1, z: 1 })
    expect(result[3]).toEqual(end)
  })

  test('returns array of points in rectangular diagonal', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(7)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 1, y: 0.6666666666666666, z: 0.3333333333333333 })
    expect(result[2]).toEqual({ x: 2, y: 1.3333333333333333, z: 0.6666666666666666 })
    expect(result[3]).toEqual({ x: 3, y: 2, z: 1 })
    expect(result[4]).toEqual({ x: 4, y: 2.6666666666666665, z: 1.3333333333333333 })
    expect(result[5]).toEqual({ x: 5, y: 3.3333333333333335, z: 1.6666666666666667 })
    expect(result[6]).toEqual(end)
  })

  test('returns array one equal point', () => {
    const start = point(5, 5, 5)
    const end = point(5, 5, 5)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(start)
    expect(result[0]).toEqual(end)
  })

  test('returns array of points where diff would have been negative', () => {
    const start = point(5, 5, 5)
    const end = point(6, 4, 2)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 5.333333333333333, y: 4.666666666666667, z: 4 })
    expect(result[2]).toEqual({ x: 5.666666666666667, y: 4.333333333333333, z: 3 })
    expect(result[3]).toEqual(end)
  })

  test('returns array of points in rectangular diagonal, with specified 3 points', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const result = getLineTransitionPoints(start, end, [], 2)
    expect(result).toHaveLength(3)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 3, y: 2, z: 1 })
    expect(result[2]).toEqual(end)
  })
})
