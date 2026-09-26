import point from '../point/point'
import { Point } from '../point/types'
import { Matrix, MatrixColumn, MatrixLayer, MatrixRow } from '../grid/types'

/**
 * Retrieve the point associated with the provided DomItem.
 * @param domItem - Provide a DomItem (a column) associated with a point.
 * @param useIfExists - Whether to use the existing point if it exists.
 */
const getPointFromDomItem = (domItem: MatrixColumn, useIfExists: boolean = true): Point => {
  if (typeof domItem?.parentItem?.parentItem?.parentItem?.children === 'undefined') {
    throw Error('Invalid DomItem or not a DomItem representing a matrix point.')
  }
  if (useIfExists && domItem.point) {
    return domItem.point
  }
  // The check above confirms each of these parents exists
  const row = domItem.parentItem as MatrixRow
  const layer = row.parentItem as MatrixLayer
  const matrix = layer.parentItem as Matrix
  return point(
    Array.from(row.children).indexOf(domItem),
    Array.from(layer.children).indexOf(row),
    Array.from(matrix.children).indexOf(layer)
  )
}

export default getPointFromDomItem
