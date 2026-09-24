import alterCoordinates from './alterCoordinates.js'

describe('alterCoordinates', () => {
    test('should alter the coordinates of a point using a function', () => {
        const pnt = { x: 1, y: 2, z: 3 }
        const fn = (value, axis) => value + 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 2, y: 3, z: 4 })
    })
    test('should alter the coordinates of a point using a function that depends on the axis', () => {
        const pnt = { x: 1, y: 2, z: 3 }
        const fn = (value, axis) => axis === 'x' ? value + 1 : value - 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 2, y: 1, z: 2 })
    })
    test('should alter the coordinates of a point using a function that depends on the point', () => {
        const pnt = { x: 1, y: 2, z: 3 }
        const fn = (value, axis, point) => value + point.x
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 2, y: 3, z: 4 })
    })
    test('should handle null values in the point', () => {
        const pnt = { x: null, y: 2, z: null }
        const fn = (value, axis) => value === null ? 0 : value + 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 0, y: 3, z: 0 })
    })
    test('should handle a point with missing coordinates', () => {
        const pnt = { x: 1 }
        const fn = (value, axis) => value === null ? 0 : value + 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 2, y: 0, z: 0 })
    })
    test('should handle a point with all coordinates missing', () => {
        const pnt = {}
        const fn = (value, axis) => value === null ? 0 : value + 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 0, y: 0, z: 0 })
    })
    test('should handle a point with all coordinates null', () => {
        const pnt = { x: null, y: null, z: null }
        const fn = (value, axis) => value === null ? 0 : value + 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 0, y: 0, z: 0 })
    })
    test('should handle null point', () => {
        const pnt = null
        const fn = (value, axis) => value === null ? 0 : value + 1
        const result = alterCoordinates(pnt, fn)
        expect(result).toEqual({ x: 0, y: 0, z: 0 })
    })
})
