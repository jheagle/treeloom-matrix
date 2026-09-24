import getHighestAbsoluteCoordinate from './getHighestAbsoluteCoordinate.js'
import point from './point.js'

describe('getHighestAbsoluteCoordinate', () => {
    test('should return the highest absolute coordinate value', () => {
        const testPoint = point(-5, 3, 2)
        expect(getHighestAbsoluteCoordinate(testPoint)).toBe(-5)
    })
})
