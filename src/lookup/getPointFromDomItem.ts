import point from '../point/point'

/**
 * Retrieve the point associated with the provided DomItem.
 * @function
 * @param {DomItem} domItem - Provide a DomItem associated with a point.
 * @param {boolean} useIfExists - Whether to use the existing point if it exists.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromDomItem = (domItem, useIfExists = true) => {
  if (typeof domItem?.parentItem?.parentItem?.parentItem?.children === 'undefined') {
    throw Error('Invalid DomItem or not a DomItem representing a matrix point.')
  }
  if (useIfExists && domItem.point) {
    return domItem.point
  }
  return point(
    Array.from(domItem.parentItem.children).indexOf(domItem),
    Array.from(domItem.parentItem.parentItem.children).indexOf(domItem.parentItem),
    Array.from(domItem.parentItem.parentItem.parentItem.children).indexOf(domItem.parentItem.parentItem)
  )
}

export default getPointFromDomItem
