import direction from './direction.js'

describe('direction', () => {
    test('should return a direction object with x, y, z properties and next/prev methods', () => {
        const dir = direction(1, 2, 3)
        expect(dir).toHaveProperty('x', 1)
        expect(dir).toHaveProperty('y', 2)
        expect(dir).toHaveProperty('z', 3)
        expect(typeof dir.next).toBe('function')
        expect(typeof dir.prev).toBe('function')
    })
    test('should simplify the direction to its simplest ratio', () => {
        const dir = direction(2, 4, 6)
        expect(dir).toHaveProperty('x', 1)
        expect(dir).toHaveProperty('y', 2)
        expect(dir).toHaveProperty('z', 3)
    })
    test('create direction with zeros', () => {
        const dir = direction(0, 0, 0)
        expect(dir).toHaveProperty('x', 0)
        expect(dir).toHaveProperty('y', 0)
        expect(dir).toHaveProperty('z', 0)
    })
    // the methods "next" and "prev" are tested in nextCell.test.js and prevCell.test.js respectively
})
