/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import { Coordinate, Point } from './types'

/**
 * Return the first coordinate number with the highest absolute value.
 * @param pnt - A Point to be assessed.
 */
const getHighestAbsoluteCoordinate = (pnt: Point): Coordinate => siFunciona.reduceObject(pnt, siFunciona.absoluteMax, 0)

export default getHighestAbsoluteCoordinate
