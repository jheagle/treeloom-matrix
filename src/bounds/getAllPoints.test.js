/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import getAllPoints from './getAllPoints'

describe('getAllPoints', () => {
  test('retrieves all the points in the matrix', () => {
    const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
    const result = getAllPoints(matrix)
    expect(result).toHaveLength(27)
    expect(result).toEqual([
      { x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 2, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 2, y: 1, z: 0 },
      { x: 0, y: 2, z: 0 }, { x: 1, y: 2, z: 0 }, { x: 2, y: 2, z: 0 },

      { x: 0, y: 0, z: 1 }, { x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 1 },
      { x: 0, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 2, y: 1, z: 1 },
      { x: 0, y: 2, z: 1 }, { x: 1, y: 2, z: 1 }, { x: 2, y: 2, z: 1 },

      { x: 0, y: 0, z: 2 }, { x: 1, y: 0, z: 2 }, { x: 2, y: 0, z: 2 },
      { x: 0, y: 1, z: 2 }, { x: 1, y: 1, z: 2 }, { x: 2, y: 1, z: 2 },
      { x: 0, y: 2, z: 2 }, { x: 1, y: 2, z: 2 }, { x: 2, y: 2, z: 2 },
    ])
  })
})
