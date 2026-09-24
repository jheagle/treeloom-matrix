/**
 * @jest-environment jsdom
 */
import buildMatrix from '../grid/buildMatrix.js'
import getDomItemFromPoint from './getDomItemFromPoint.js'
import point from '../point/point.js'
import jsonDom from 'json-dom'

describe('getDomItemFromPoint', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const domItem = liveMatrix.children[3].children[2].children[1]
    expect(getDomItemFromPoint(point(1, 2, 3), liveMatrix)).toEqual(domItem)
  })
  test('Attempt to get an invalid point', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(1, 1, 1)))
    expect(getDomItemFromPoint(point(1, 2, 3), liveMatrix)).toBe(false)
  })
})
