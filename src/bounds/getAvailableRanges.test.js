/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import getAvailableRanges from './getAvailableRanges'
import point from '../point/point'

describe('getAvailableRanges', () => {
  test('returns the correct ranges for a matrix', () => {
    const matrix = buildMatrix(point(3, 4, 5))
    const ranges = getAvailableRanges(matrix)
    expect(ranges).toEqual({ x: 3, y: 4, z: 5 })
  })
  test('returns the correct ranges for a matrix with maxRanges', () => {
    const matrix = buildMatrix(point(3, 4, 5))
    const maxRanges = point(2, 3, 4)
    const ranges = getAvailableRanges(matrix, maxRanges)
    expect(ranges).toEqual({ x: 2, y: 3, z: 4 })
  })
})
