import areEqualPoints from './areEqualPoints.js'
import point from './point.js'

describe('areEqualPoints', () => {
    test('returns true for points with identical coordinates', () => {
        const p1 = point(1, 1, 1)
        const p2 = point(1, 1, 1)
        const result = areEqualPoints(p1, p2)
        expect(result).toBe(true)
    })
    test('returns false for points with different coordinates', () => {
        const p1 = point(1, 1, 1)
        const p2 = point(2, 2, 2)
        const result = areEqualPoints(p1, p2)
        expect(result).toBe(false)
    })
})
