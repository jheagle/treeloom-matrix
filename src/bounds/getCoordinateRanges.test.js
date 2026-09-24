import getCoordinateRanges from './getCoordinateRanges.js'
import point from '../point/point.js'

describe('getCoordinateRanges', () => {
  test('returns the correct ranges for a matrix', () => {
    const ranges = getCoordinateRanges(point(0, 0, 0), point(2, 3, 4))
    expect(ranges).toEqual({ x: 3, y: 4, z: 5 })
  })
  test('returns the correct ranges for a matrix with maxRanges', () => {
    const minPoint = point(0, 0, 0)
    const maxPoint = point(2, 3, 4)
    const maxRanges = point(2, 3, 4)
    const ranges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
    expect(ranges).toEqual({ x: 2, y: 3, z: 4 })
  })
})
