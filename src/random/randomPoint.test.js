/**
 * @jest-environment jsdom
 */
import randomPoint from './randomPoint'
import buildMatrix from '../grid/buildMatrix'
import point from '../point/point'

describe('randomPoint', () => {
    test('retrieves a random point within the matrix', () => {
        const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
        const result = randomPoint(matrix)
        expect(result).toHaveProperty('x')
        expect(result).toHaveProperty('y')
        expect(result).toHaveProperty('z')
        expect(result.x).toBeGreaterThanOrEqual(0)
        expect(result.x).toBeLessThanOrEqual(2)
        expect(result.y).toBeGreaterThanOrEqual(0)
        expect(result.y).toBeLessThanOrEqual(2)
        expect(result.z).toBeGreaterThanOrEqual(0)
        expect(result.z).toBeLessThanOrEqual(2)
    })
    test('can get full range of points within the matrix', () => {
        const matrix = buildMatrix({ x: 1, y: 1, z: 1 })
        const result = randomPoint(matrix)
        expect(result).toEqual(point(0, 0, 0))
    })
    test('retrieves a random point within the matrix with maxRanges', () => {
        const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
        const maxRanges = point(1, 1, 1)
        const result = randomPoint(matrix, maxRanges)
        expect(result).toHaveProperty('x')
        expect(result).toHaveProperty('y')
        expect(result).toHaveProperty('z')
        expect(result.x).toBeGreaterThanOrEqual(0)
        expect(result.x).toBeLessThanOrEqual(1)
        expect(result.y).toBeGreaterThanOrEqual(0)
        expect(result.y).toBeLessThanOrEqual(1)
        expect(result.z).toBeGreaterThanOrEqual(0)
        expect(result.z).toBeLessThanOrEqual(1)
    })
})
