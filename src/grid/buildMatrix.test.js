/**
 * @jest-environment jsdom
 */
import buildMatrix from './buildMatrix.js'

describe('buildMatrix', () => {
  test('default one layer with no dimensions', () => {
    const grid = buildMatrix()
    expect(grid.children.length).toBe(1)
    expect(grid.children[0].children.length).toBe(0)
  })
  test('will have parentItem references', () => {
    const grid = buildMatrix({ x: 1, y: 1, z: 1 })
    const layer = grid.children[0]
    const row = layer.children[0]
    const column = row.children[0]
    expect(column.point).toEqual({ x: 0, y: 0, z: 0 })
    expect(column.parentItem).toBe(row)
    expect(row.parentItem).toBe(layer)
    expect(layer.parentItem).toBe(grid)
    expect(grid.parentItem).toBeNull()
  })

  // test set matrix with dimensions of 2x2x2
  test('set matrix with dimensions of 2x2x2 and points are assigned', () => {
    const matrix = buildMatrix({ x: 2, y: 2, z: 2 })
    expect(matrix.children.length).toBe(2)
    expect(matrix.children[0].children.length).toBe(2)
    expect(matrix.children[0].children[0].children.length).toBe(2)
    expect(matrix.children[0].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 0 })
    expect(matrix.children[0].children[0].children[1].point).toEqual({ x: 1, y: 0, z: 0 })
    expect(matrix.children[0].children[1].children[0].point).toEqual({ x: 0, y: 1, z: 0 })
    expect(matrix.children[0].children[1].children[1].point).toEqual({ x: 1, y: 1, z: 0 })
    expect(matrix.children[1].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 1 })
    expect(matrix.children[1].children[0].children[1].point).toEqual({ x: 1, y: 0, z: 1 })
    expect(matrix.children[1].children[1].children[0].point).toEqual({ x: 0, y: 1, z: 1 })
    expect(matrix.children[1].children[1].children[1].point).toEqual({ x: 1, y: 1, z: 1 })
  })

  // test add custom classname properties to each layer, row, and column, matrix
  test('add custom classname properties to each layer, row, and column, matrix', () => {
    const grid = buildMatrix(
      { x: 10, y: 10, z: 10 },
      { x: { attributes: { className: 'class-x' } }, y: { attributes: { className: 'class-y' } }, z: { attributes: { className: 'class-z' } }, matrix: { attributes: { className: 'class-matrix' } } }
    )
    expect(grid.children.length).toBe(10)
    expect(grid.children[9].children.length).toBe(10)
    expect(grid.children[9].children[9].children.length).toBe(10)
    expect(grid.attributes.className).toBe('class-matrix')
    expect(grid.children[9].attributes.className).toBe('class-z')
    expect(grid.children[9].children[9].attributes.className).toBe('class-y')
    expect(grid.children[9].children[9].children[9].attributes.className).toBe('class-x')
  })
})
