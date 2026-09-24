/**
 * @jest-environment jsdom
 */
import nextCell from './nextCell.js'
import point from './point.js'
import matrix from '../grid/matrix.js'

describe('nextCell', () => {
    test('should return the next cell for a given point and offset', () => {
        const testPoint = point(1, 1, 1)
        const offset = point(1, 0, 0)
        expect(nextCell(testPoint, offset)).toEqual(point(2, 1, 1))
    })
})
