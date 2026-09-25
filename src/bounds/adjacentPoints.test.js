/**
 * @jest-environment jsdom
 */
import adjacentPoints from './adjacentPoints'
import point from '../point/point'
import buildMatrix from '../grid/buildMatrix'

describe('adjacentPoints', () => {
    test('returns an array of points surrounding a point', () => {
        const pnt = point(1, 1, 1)
        const m = buildMatrix({ x: 3, y: 3, z: 3 })
        const result = adjacentPoints(pnt, m)
        expect(result).toHaveLength(26)
    })
    test('returns an array of points surrounding a point with some invalid points', () => {
        const pnt = point(0, 0, 0)
        const m = buildMatrix({ x: 3, y: 3, z: 3 })
        const result = adjacentPoints(pnt, m)
        expect(result).toHaveLength(7)
    })
    test('returns an array of points surrounding a point with all invalid points', () => {
        const pnt = point(0, 0, 0)
        const m = buildMatrix({ x: 1, y: 1, z: 1 })
        const result = adjacentPoints(pnt, m)
        expect(result).toHaveLength(0)
    })
})
