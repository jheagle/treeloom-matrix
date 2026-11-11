/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from './point'
import { Direction, Point } from './types'

/**
 * Based on provided point and point direction generate next point.
 * @param pnt - Provide the current / initial point
 * @param dir - Provide the direction to be applied to find the next point
 */
const nextCell = (pnt: Point, dir: Point | Direction): Point => point(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)

export default nextCell
