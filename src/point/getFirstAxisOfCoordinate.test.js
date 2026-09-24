import getFirstAxisOfCoordinate from './getFirstAxisOfCoordinate.js'
import point from './point.js'

describe('getFirstAxisOfCoordinate', () => {
    test('should return the first axis of the coordinate', () => {
        const pnt = point(1, 2, 3)
        const coordinate = 2
        const result = getFirstAxisOfCoordinate(pnt, coordinate)
        expect(result).toBe('y')
    })
    test('should return false if the coordinate is not found', () => {
        const pnt = point(1, 2, 3)
        const coordinate = 4
        const result = getFirstAxisOfCoordinate(pnt, coordinate)
        expect(result).toBe(false)
    })
    test('should return the first axis if multiple axes have the same coordinate', () => {
        const pnt = point(1, 2, 2)
        const coordinate = 2
        const result = getFirstAxisOfCoordinate(pnt, coordinate)
        expect(result).toBe('y')
    })
})
