/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix.js'
import getMatrixRange from './getMatrixRange.js'

describe('getMatrixRange', () => {
    test('retrieves the lowest and highest points in the matrix', () => {
        const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
        const result = getMatrixRange(matrix)
        expect(result).toHaveLength(2)
        const [lowest, highest] = result
        expect(lowest).toEqual({ x: 0, y: 0, z: 0 })
        expect(highest).toEqual({ x: 2, y: 2, z: 2 })
    })
    test('retrieves the lowest and highest points in a non-cubical matrix', () => {
        const matrix = buildMatrix({ x: 2, y: 3, z: 4 })
        const result = getMatrixRange(matrix)
        expect(result).toHaveLength(2)
        const [lowest, highest] = result
        expect(lowest).toEqual({ x: 0, y: 0, z: 0 })
        expect(highest).toEqual({ x: 1, y: 2, z: 3 })
    })
})
