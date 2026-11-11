/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Points and directions in a matrix: create them, compare them and step from one to the next.
 */
import alterCoordinates from './alterCoordinates'
import areEqualPoints from './areEqualPoints'
import direction from './direction'
import getAbsolutePoint from './getAbsolutePoint'
import getFirstAxisOfCoordinate from './getFirstAxisOfCoordinate'
import getHighestAbsoluteCoordinate from './getHighestAbsoluteCoordinate'
import nextCell from './nextCell'
import point from './point'
import pointDifference from './pointDifference'
import prevCell from './prevCell'
import sortAxisCoordinates from './sortAxisCoordinates'

export default {
  alterCoordinates,
  areEqualPoints,
  direction,
  getAbsolutePoint,
  getFirstAxisOfCoordinate,
  getHighestAbsoluteCoordinate,
  nextCell,
  point,
  pointDifference,
  prevCell,
  sortAxisCoordinates
}
