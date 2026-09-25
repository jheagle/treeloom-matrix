/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import getAxisLengths from './getAxisLengths'
import point from '../point/point'

describe('getAxisLengths', () => {
  test('counts the lenghts of each axis in the matrix and returns as a point object', () => {
    const lengths = point(2, 4, 6)
    const matrix = buildMatrix(lengths)
    expect(getAxisLengths(matrix)).toEqual(lengths)
  })
})
