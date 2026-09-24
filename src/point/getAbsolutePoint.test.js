import getAbsolutePoint from './getAbsolutePoint.js'
import point from './point.js'

describe('getAbsolutePoint', () => {
    test('should return the point with absolute coordinates', () => {
        const testPoint = point(-5, 3, 2)
        expect(getAbsolutePoint(testPoint)).toEqual({ x: 5, y: 3, z: 2 })
    })
})
