/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix.js'
import getDomItemFromElement from './getDomItemFromElement.js'
import point from '../point/point.js'
import jsonDom from 'json-dom'

describe('getDomItemFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const item = liveMatrix.children[3].children[2].children[1]
    expect(getDomItemFromElement(item.element, liveMatrix)).toEqual(item)
  })
})
