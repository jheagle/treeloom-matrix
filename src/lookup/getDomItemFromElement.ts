import 'core-js/stable'
import getDomItemFromPoint from './getDomItemFromPoint'
import getPointFromElement from './getPointFromElement'
import { Matrix, MatrixColumn } from '../grid/types'

/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @function
 * @param elem - Provide an element having an associated DomItem.
 * @param matrix - The matrix potentially containing the DomItem with Point.
 * @returns The DomItem (a column), or false when the element is not in the matrix
 */
const getDomItemFromElement = (elem: Node, matrix: Matrix): MatrixColumn | false => getDomItemFromPoint(
  getPointFromElement(elem),
  matrix
)

export default getDomItemFromElement
