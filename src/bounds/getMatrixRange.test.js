/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import buildMatrix from '../grid/buildMatrix'
import getMatrixRange from './getMatrixRange'

describe('getMatrixRange', () => {
  test('retrieves the lowest and highest points in the matrix', () => {
    const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
    const result = getMatrixRange(matrix)
    expect(result).toHaveLength(2)
    const [lowest, highest] = result
    expect(lowest).toEqual({ x: 0, y: 0, z: 0 })
    expect(highest).toEqual({ x: 2, y: 2, z: 2 })
  })
  test('retrieves the lowest and highest points in a non-cubical matrix', () => {
    const matrix = buildMatrix({ x: 2, y: 3, z: 4 })
    const result = getMatrixRange(matrix)
    expect(result).toHaveLength(2)
    const [lowest, highest] = result
    expect(lowest).toEqual({ x: 0, y: 0, z: 0 })
    expect(highest).toEqual({ x: 1, y: 2, z: 3 })
  })
})
