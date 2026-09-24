/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix.js'
import getPointFromElement from './getPointFromElement.js'
import point from '../point/point.js'
import jsonDom from 'json-dom'

describe('getPointFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const element = liveMatrix.children[3].children[2].children[1].element
    expect(getPointFromElement(element, liveMatrix)).toEqual(point(1, 2, 3))
  })
})
