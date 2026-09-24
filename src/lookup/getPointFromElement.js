import 'core-js/stable'
import point from '../point/point'

/**
 * Retrieve the point associated with the provided element.
 * @function
 * @param {Node|HTMLElement} elem - Provide an element associated with a point.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromElement = elem => {
  if (typeof elem.parentNode?.parentNode?.parentNode?.childNodes === 'undefined') {
    // This seems unlikey to occur because there will be document items as parents
    throw Error('Invalid element or not an element representing a matrix point.')
  }
  return point(
    Array.from(elem.parentNode.childNodes).indexOf(elem),
    Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode),
    Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode)
  )
}

export default getPointFromElement
