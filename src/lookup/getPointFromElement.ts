import 'core-js/stable'
import point from '../point/point'
import { Point } from '../point/types'

/**
 * Retrieve the point associated with the provided element.
 * @function
 * @param elem - Provide an element associated with a point.
 */
const getPointFromElement = (elem: Node): Point => {
  if (typeof elem.parentNode?.parentNode?.parentNode?.childNodes === 'undefined') {
    // This seems unlikey to occur because there will be document items as parents
    throw Error('Invalid element or not an element representing a matrix point.')
  }
  // The checks above confirm each of these parents exists
  const row = elem.parentNode as ParentNode & Node
  const layer = row.parentNode as ParentNode & Node
  const matrix = layer.parentNode as ParentNode & Node
  return point(
    Array.from<Node>(row.childNodes).indexOf(elem),
    Array.from<Node>(layer.childNodes).indexOf(row),
    Array.from<Node>(matrix.childNodes).indexOf(layer)
  )
}

export default getPointFromElement
