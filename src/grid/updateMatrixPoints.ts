import point from '../point/point'
import { hasTrait } from './traits'
import { Matrix } from './types'

/**
 * Update the points for each DomItem in a matrix.
 * @function
 * @param matrix - Provide a matrix to update the points for.
 * @returns The same matrix, with the point of each column updated
 */
const updateMatrixPoints = (matrix: Matrix): Matrix => {
  // confirm the matrix has the matrix trait
  if (!matrix.has || !hasTrait(matrix, 'matrix.matrix')) {
    throw new Error("The provided matrix does not have the 'matrix.matrix' trait.")
  }

  // loop through each layer, row, and column in the matrix
  // find z from layer, y from row, and x from column
  // update the point object within the column
  let z = -1
  matrix.children.forEach(layer => {
    if (!hasTrait(layer, 'matrix.layer')) {
      return
    }
    ++z
    let y = -1
    layer.children.forEach(row => {
      if (!hasTrait(row, 'matrix.row')) {
        return
      }
      ++y
      let x = -1
      row.children.forEach(column => {
        if (!hasTrait(column, 'matrix.column')) {
          return
        }
        // update the point object within the column
        column.point = point(++x, y, z)
      })
    })
  })

  return matrix
}

export default updateMatrixPoints
