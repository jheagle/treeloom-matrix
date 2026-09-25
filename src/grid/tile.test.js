import tile from './tile'

describe('tile', () => {
    test('should return a tile with empty point object', () => {
        expect(tile()).toEqual({ point: {} })
    })
})
