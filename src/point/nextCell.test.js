/**
 * @jest-environment jsdom
 */
import nextCell from './nextCell'
import point from './point'

describe('nextCell', () => {
  test('should return the next cell for a given point and offset', () => {
    const testPoint = point(1, 1, 1)
    const offset = point(1, 0, 0)
    expect(nextCell(testPoint, offset)).toEqual(point(2, 1, 1))
  })
})
