/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import checkValidPoint from '../bounds/checkValidPoint'
import getAbsolutePoint from '../point/getAbsolutePoint'
import point from '../point/point'
import randDirectionWithInterval from './randDirectionWithInterval'

describe('randDirectionWithInterval', () => {
  test('result when there is no more room within the matrix', () => {
    const matrix = buildMatrix(point(1, 1, 1))
    const start = point(0, 0, 0)
    const result = randDirectionWithInterval(matrix, start)
    expect(result.prev(start)).toEqual(start)
  })
  test('returns a direction that uses maximum matrix range', () => {
    const matrix = buildMatrix(point(2, 2, 2))
    const start = point(1, 1, 1)
    const result = randDirectionWithInterval(matrix, start)
    expect([0, -1]).toContain(result.x)
    expect([0, -1]).toContain(result.y)
    expect([0, -1]).toContain(result.z)
  })
  test('returns a direction that creates a point within the matrix', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const start = point(4, 4, 4)
    const result = randDirectionWithInterval(matrix, start)
    expect(result).toHaveProperty('x')
    expect(result).toHaveProperty('y')
    expect(result).toHaveProperty('z')
    const pointInMatrix = result.next(start)
    expect(checkValidPoint(pointInMatrix, matrix)).toBe(true)
  })
  test('results in error if the start point does not fit the matrix', () => {
    const matrix = buildMatrix(point(2, 1, 1))
    const start = point(1, 1, 1)
    expect(() => randDirectionWithInterval(matrix, start)).toThrow('The given point (1, 1, 1) is not valid within the given matrix (2, 1, 1)')
  })
  test('returns a direction that creates a point within the matrix when no start point is provided', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const result = randDirectionWithInterval(matrix)
    const absolutePoint = getAbsolutePoint(result)
    // point should fit within the matrix
    expect(checkValidPoint(absolutePoint, matrix)).toBe(true)
  })
  test('with out of range interval returns error', () => {
    const matrix = buildMatrix(point(9, 9, 9))
    const start = point(4, 4, 4)
    const interval = 6
    expect(() => randDirectionWithInterval(matrix, start, interval)).toThrow(Error(`The given interval (${interval}) will not fit in this matrix`))
  })
  test('returns a direction with interval used', () => {
    const matrix = buildMatrix(point(9, 9, 9))
    const start = point(4, 4, 4)
    const interval = 3
    const result = randDirectionWithInterval(matrix, start, interval)
    const pointInMatrix = result.next(start)
    expect(checkValidPoint(pointInMatrix, matrix)).toBe(true)
  })
  test('get direction without specified start and when one axis is same as interval', () => {
    const matrix = buildMatrix(point(3, 6, 9))
    const interval = 6
    const result = randDirectionWithInterval(matrix, null, interval)
    expect(checkValidPoint(result, matrix)).toBe(true)
    // the z axis should fit within or be equal to the interval
    expect(6 % result.z).toEqual(0)
  })
  test('find the bad case where the result is 3,1,2 for length of 5', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const length = 5
    const result = randDirectionWithInterval(matrix, null, length)
    expect(checkValidPoint(result, matrix)).toBe(true)
  })
})
