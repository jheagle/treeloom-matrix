/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix.js'
import checkValidPoint from '../bounds/checkValidPoint.js'
import direction from '../point/direction.js'
import point from '../point/point.js'
import randomStart from './randomStart.js'

describe('randomStart', () => {
  test('returns a point with coordinates within the specified limits', () => {
    const length = 5
    const dir = direction(1, 0, 0)
    const matrix = buildMatrix(point(10, 10, 10))
    const result = randomStart(matrix, length, dir)
    const nextPoint = dir.next(result)
    expect(checkValidPoint(nextPoint, matrix)).toBe(true)
  })
  test('returns a point with coordinates within the matrix when no maxRanges are provided', () => {
    const length = 5
    const dir = direction(1, 0, 0)
    const matrix = buildMatrix(point(10, 10, 10))
    const result = randomStart(matrix, length, dir)
    const nextPoint = dir.next(result)
    expect(checkValidPoint(nextPoint, matrix)).toBe(true)
  })
  test('returns a point with coordinates within the specified maxRanges', () => {
    const length = 5
    const dir = direction(1, 0, 0)
    const matrix = buildMatrix(point(10, 10, 10))
    const maxRanges = point(5, 5, 5)
    const result = randomStart(matrix, length, dir, maxRanges)
    const nextPoint = dir.next(result)
    expect(checkValidPoint(nextPoint, matrix)).toBe(true)
  })
  test('throws an error if the direction has no non-zero components', () => {
    const length = 5
    const dir = direction(0, 0, 0)
    const matrix = buildMatrix(point(10, 10, 10))
    expect(() => randomStart(matrix, length, dir)).toThrow('Direction must have at least one non-zero coordinate')
  })
  test('returns a point with coordinates within the matrix when no length or direction are provided', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const result = randomStart(matrix)
    expect(checkValidPoint(result, matrix)).toBe(true)
  })
  test('returns a point with coordinates within the specified maxRanges when no length or direction are provided', () => {
    const matrix = buildMatrix(point(10, 10, 10))
    const maxRanges = point(5, 5, 5)
    const result = randomStart(matrix, null, null, maxRanges)
    expect(checkValidPoint(result, matrix)).toBe(true)
  })
  test('returns a point with coordinates when no direction is provided but a length is provided', () => {
    const length = 5
    const matrix = buildMatrix(point(10, 10, 10))
    const result = randomStart(matrix, length)
    expect(checkValidPoint(result, matrix)).toBe(true)
  })
})
