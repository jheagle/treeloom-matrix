import tile from './tile.js'

describe('tile', () => {
    test('should return a tile with empty point object', () => {
        expect(tile()).toEqual({ point: {} })
    })
})
