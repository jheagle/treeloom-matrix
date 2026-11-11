/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import matrix from './matrix'

describe('matrix', () => {
  test('default one layer with no dimensions', () => {
    const grid = matrix()
    expect(grid.children.length).toBe(1)
    expect(grid.children[0].children.length).toBe(0)
  })

  // test set matrix with dimensions of 10x10x10
  test('set matrix with dimensions of 10x10x10', () => {
    const grid = matrix({ x: 10, y: 10, z: 10 })
    expect(grid.children.length).toBe(10)
    expect(grid.children[0].children.length).toBe(10)
    expect(grid.children[0].children[0].children.length).toBe(10)
  })

  test('every layer, row and tile gets its own unique id, not a copy of the first one built', () => {
    const grid = matrix({ x: 3, y: 3, z: 3 })
    const ids = []
    grid.children.forEach(layer => {
      ids.push(layer.id)
      layer.children.forEach(row => {
        ids.push(row.id)
        row.children.forEach(tile => ids.push(tile.id))
      })
    })
    expect(new Set(ids).size).toBe(ids.length)
  })

  // test add custom classname properties to each layer, row, and column, matrix
  test('add custom classname properties to each layer, row, and column, matrix', () => {
    const grid = matrix(
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
