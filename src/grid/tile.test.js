/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import tile from './tile'

describe('tile', () => {
  test('should return a tile with empty point object', () => {
    expect(tile()).toEqual({ point: {} })
  })
})
