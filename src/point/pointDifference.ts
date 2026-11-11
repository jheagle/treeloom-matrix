/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from './point'
import { Point } from './types'

/**
 * Based on provided point and another point, get a point with the difference between each axis
 * @param start - The first point to compare
 * @param end - The other point to be compared
 */
const pointDifference = (start: Point, end: Point): Point => point(
  end.x - start.x,
  end.y - start.y,
  end.z - start.z
)

export default pointDifference
