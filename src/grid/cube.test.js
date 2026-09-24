/**
 * @jest-environment jsdom
 */
import cube from './cube.js'

describe('cube', () => {
  test('grid is 1 deep, and 10 by 10', () => {
    const grid = cube({}, 10)
    expect(grid.children.length).toBe(10)
    expect(grid.children[0].children.length).toBe(10)
    expect(grid.children[0].children[0].children.length).toBe(10)
  })
})
