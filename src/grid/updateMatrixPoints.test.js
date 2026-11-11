/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import updateMatrixPoints from './updateMatrixPoints'
import matrix from './matrix'

describe('updateMatrixPoints', () => {
  test('should update the points for each DomItem in a matrix', () => {
    // create a matrix with 2 layers, 2 rows, and 2 tiles
    const testMatrix = matrix({ x: 2, y: 2, z: 2 })
    // update the points for each DomItem in the matrix
    const updatedMatrix = updateMatrixPoints(testMatrix)
    // assert that the points have been updated
    expect(updatedMatrix.children[0].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 0 })
    expect(updatedMatrix.children[0].children[0].children[1].point).toEqual({ x: 1, y: 0, z: 0 })
    expect(updatedMatrix.children[0].children[1].children[0].point).toEqual({ x: 0, y: 1, z: 0 })
    expect(updatedMatrix.children[0].children[1].children[1].point).toEqual({ x: 1, y: 1, z: 0 })
    expect(updatedMatrix.children[1].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 1 })
    expect(updatedMatrix.children[1].children[0].children[1].point).toEqual({ x: 1, y: 0, z: 1 })
    expect(updatedMatrix.children[1].children[1].children[0].point).toEqual({ x: 0, y: 1, z: 1 })
    expect(updatedMatrix.children[1].children[1].children[1].point).toEqual({ x: 1, y: 1, z: 1 })
  })

  // test that the function throws an error if the provided matrixdoes not have the matrix trait
  test('should throw an error if the provided matrix does not have the "matrix.matrix" trait', () => {
    const testMatrix = matrix({ x: 2, y: 2, z: 2 })
    // remove the matrix trait from the matrix
    delete testMatrix.has['matrix.matrix']
    expect(() => updateMatrixPoints(testMatrix)).toThrow("The provided matrix does not have the 'matrix.matrix' trait.")
  })

  // test that update points will skip any children that do not have the layer, row or column traits
  test('should skip any children that do not have the "matrix.layer", "matrix.row", or "matrix.column" trait', () => {
    const testMatrix = matrix({ x: 2, y: 2, z: 2 })
    // add a child to the matrix that does not have the layer trait
    testMatrix.children.push({ has: {} })
    // update the points for each DomItem in the matrix
    const updatedMatrix = updateMatrixPoints(testMatrix)
    // assert that the points have been updated
    expect(updatedMatrix.children[0].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 0 })
  })
})
