'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
const point_1 = __importDefault(require('../point/point'))
const traits_1 = require('./traits')
/**
 * Update the points for each DomItem in a matrix.
 * @function
 * @param matrix - Provide a matrix to update the points for.
 * @returns The same matrix, with the point of each column updated
 */
const updateMatrixPoints = matrix => {
  // confirm the matrix has the matrix trait
  if (!matrix.has || !(0, traits_1.hasTrait)(matrix, 'matrix.matrix')) {
    throw new Error("The provided matrix does not have the 'matrix.matrix' trait.")
  }
  // loop through each layer, row, and column in the matrix
  // find z from layer, y from row, and x from column
  // update the point object within the column
  let z = -1
  matrix.children.forEach(layer => {
    if (!(0, traits_1.hasTrait)(layer, 'matrix.layer')) {
      return
    }
    ++z
    let y = -1
    layer.children.forEach(row => {
      if (!(0, traits_1.hasTrait)(row, 'matrix.row')) {
        return
      }
      ++y
      let x = -1
      row.children.forEach(column => {
        if (!(0, traits_1.hasTrait)(column, 'matrix.column')) {
          return
        }
        // update the point object within the column
        column.point = (0, point_1.default)(++x, y, z)
      })
    })
  })
  return matrix
}
exports.default = updateMatrixPoints
