/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Random points and directions within a matrix, for example to place a line of a given length.
 */
import randDirection from './randDirection'
import randDirectionWithInterval from './randDirectionWithInterval'
import randomPoint from './randomPoint'
import randomStart from './randomStart'
import testIntervalFits from './testIntervalFits'

export default {
  randDirection,
  randDirectionWithInterval,
  randomPoint,
  randomStart,
  testIntervalFits
}
