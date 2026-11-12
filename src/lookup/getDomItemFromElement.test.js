/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import buildMatrix from '../grid/buildMatrix'
import getDomItemFromElement from './getDomItemFromElement'
import point from '../point/point'
import treeloom from 'treeloom'

describe('getDomItemFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = treeloom.renderHtml(buildMatrix(point(2, 4, 6)))
    const item = liveMatrix.children[3].children[2].children[1]
    expect(getDomItemFromElement(item.element, liveMatrix)).toEqual(item)
  })
})
