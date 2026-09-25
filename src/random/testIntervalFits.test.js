/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import testIntervalFits from './testIntervalFits'

describe('testIntervalFits', () => {
  test('returns true for all axis when interval is null', () => {
    const matrix = buildMatrix({ x: 10, y: 10, z: 10 })
    const result = testIntervalFits(matrix, null)
    expect(result).toEqual({ x: true, y: true, z: true })
  })
  test('returns true for all axis when interval is less than the matrix dimensions', () => {
    const matrix = buildMatrix({ x: 10, y: 10, z: 10 })
    const result = testIntervalFits(matrix, 5)
    expect(result).toEqual({ x: true, y: true, z: true })
  })
  test('returns false for axis where interval exceeds the matrix dimensions', () => {
    const matrix = buildMatrix({ x: 10, y: 10, z: 10 })
    const result = testIntervalFits(matrix, 15)
    expect(result).toEqual({ x: false, y: false, z: false })
  })
  test('returns true for axis where interval is less than the matrix dimensions and false for others', () => {
    const matrix = buildMatrix({ x: 4, y: 6, z: 4 })
    const result = testIntervalFits(matrix, 5)
    expect(result).toEqual({ x: false, y: true, z: false })
  })
})