import point from '../point/point.js'

/**
 * Update the points for each DomItem in a matrix.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - Provide a matrix to update the points for.
 * @returns {module:matrixObjects~Matrix}
 */
const updateMatrixPoints = matrix => {
  // confirm the matrix has classname 'matrix'
  if (!matrix.is || matrix.is !== 'matrix') {
    throw new Error("The provided matrix does not have the 'is:matrix'.")
  }

  // loop through each layer, row, and column in the matrix
  // find z from layer, y from row, and x from column
  // update the point object within the column
  let z = -1
  matrix.children.forEach(layer => {
    if (layer.is !== 'layer') {
      return
    }
    ++z
    let y = -1
    layer.children.forEach(row => {
      if (row.is !== 'row') {
        return
      }
      ++y
      let x = -1
      row.children.forEach(column => {
        if (column.is !== 'column') {
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
