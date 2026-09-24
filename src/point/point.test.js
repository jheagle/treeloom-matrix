import point from './point.js'

describe('point', () => {
    test('should return a point object with x, y, z coordinates', () => {
        const x = 1
        const y = 2
        const z = 3
        const expectedPoint = { x: x, y: y, z: z }
        expect(point(x, y, z)).toEqual(expectedPoint)
    })
})