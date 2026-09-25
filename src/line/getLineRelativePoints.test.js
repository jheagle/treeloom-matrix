import point from '../point/point'
import getLineRelativePoints from './getLineRelativePoints'

describe('getLineRelativePoints', () => {
  test('returns an array of points from 0,0,0 to 0,0,3', () => {
    const start = point(0, 0, 0)
    const end = point(0, 0, 3)
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[3]).toEqual(end)
  })
  test('returns an array of points from 0,0,0 to 3,0,0', () => {
    const start = point(0, 0, 0)
    const end = point(3, 0, 0)
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[3]).toEqual(end)
  })
  test('returns an array of points from 0,0,0 to 0,3,0', () => {
    const start = point(0, 0, 0)
    const end = point(0, 3, 0)
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[3]).toEqual(end)
  })
  test('returns an array of points from 0,0,0 to 3,3,3', () => {
    const start = point(0, 0, 0)
    const end = point(3, 3, 3)
    const result = getLineRelativePoints(start, end)
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
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 2, y: 2, z: 2 })
    expect(result[2]).toEqual({ x: 1, y: 1, z: 1 })
    expect(result[3]).toEqual(end)
  })

  test('returns array of points in rectangular diagonal', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(7)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 1, y: 1, z: 0 })
    expect(result[2]).toEqual({ x: 2, y: 1, z: 1 })
    expect(result[3]).toEqual({ x: 3, y: 2, z: 1 })
    expect(result[4]).toEqual({ x: 4, y: 3, z: 1 })
    expect(result[5]).toEqual({ x: 5, y: 3, z: 2 })
    expect(result[6]).toEqual(end)
  })

  test('returns array one equal point', () => {
    const start = point(5, 5, 5)
    const end = point(5, 5, 5)
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(start)
    expect(result[0]).toEqual(end)
  })

  test('returns array of points where diff would have been negative', () => {
    const start = point(5, 5, 5)
    const end = point(6, 4, 2)
    const result = getLineRelativePoints(start, end)
    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual({ x: 5, y: 5, z: 4 })
    expect(result[2]).toEqual({ x: 6, y: 4, z: 3 })
    expect(result[3]).toEqual(end)
  })
})
