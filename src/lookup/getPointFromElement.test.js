/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import buildMatrix from '../grid/buildMatrix'
import getPointFromElement from './getPointFromElement'
import point from '../point/point'
import jsonDom from 'json-dom'

describe('getPointFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const element = liveMatrix.children[3].children[2].children[1].element
    expect(getPointFromElement(element, liveMatrix)).toEqual(point(1, 2, 3))
  })
})
