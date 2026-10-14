/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import getLayerPoints from './getLayerPoints'

describe('getLayerPoints', () => {
  test('retrieves just the points on the given z-layer', () => {
    const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
    const result = getLayerPoints(matrix, 1)
    expect(result).toHaveLength(9)
    expect(result.every(point => point.z === 1)).toBe(true)
    expect(result).toEqual([
      { x: 0, y: 0, z: 1 }, { x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 1 },
      { x: 0, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 2, y: 1, z: 1 },
      { x: 0, y: 2, z: 1 }, { x: 1, y: 2, z: 1 }, { x: 2, y: 2, z: 1 },
    ])
  })

  test('a layer that does not exist finds nothing', () => {
    const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
    expect(getLayerPoints(matrix, 5)).toEqual([])
  })
})
