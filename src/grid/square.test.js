/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import square from './square'

describe('square', () => {
  test('grid is 1 deep, and 10 by 10', () => {
    const grid = square({}, 10)
    expect(grid.children.length).toBe(1)
    expect(grid.children[0].children.length).toBe(10)
    expect(grid.children[0].children[0].children.length).toBe(10)
  })
})
