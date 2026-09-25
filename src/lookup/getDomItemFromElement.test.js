/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix'
import getDomItemFromElement from './getDomItemFromElement'
import point from '../point/point'
import jsonDom from 'json-dom'

describe('getDomItemFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const item = liveMatrix.children[3].children[2].children[1]
    expect(getDomItemFromElement(item.element, liveMatrix)).toEqual(item)
  })
})
