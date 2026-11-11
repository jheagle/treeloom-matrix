/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import buildMatrix from '../grid/buildMatrix'
import getAxisLengths from './getAxisLengths'
import point from '../point/point'

describe('getAxisLengths', () => {
  test('counts the lenghts of each axis in the matrix and returns as a point object', () => {
    const lengths = point(2, 4, 6)
    const matrix = buildMatrix(lengths)
    expect(getAxisLengths(matrix)).toEqual(lengths)
  })
})
