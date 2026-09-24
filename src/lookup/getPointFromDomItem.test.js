/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix.js'
import getPointFromDomItem from './getPointFromDomItem.js'
import point from '../point/point.js'

describe('getPointFromDomItem', () => {
  test('Retrieve the associated point from a DomItem within a matrix by point', () => {
    const matrix = buildMatrix(point(1, 1, 1))
    const item = matrix.children[0].children[0].children[0]
    const newPoint = point(5, 5, 5)
    item.point = newPoint
    expect(getPointFromDomItem(item)).toEqual(newPoint)
  })
  test('Retrieve the associated point from a DomItem within a matrix by position', () => {
    const matrix = buildMatrix(point(2, 4, 6))
    const item = matrix.children[3].children[2].children[1]
    expect(getPointFromDomItem(item, false)).toEqual(point(1, 2, 3))
  })
  test('Attempt to get a point from an invalid DomItem', () => {
    const matrix = buildMatrix(point(1, 1, 1))
    expect(() => getPointFromDomItem(matrix)).toThrow('Invalid DomItem or not a DomItem representing a matrix point.')
  })
})
