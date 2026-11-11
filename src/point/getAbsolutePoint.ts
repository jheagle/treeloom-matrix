/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import { Point } from './types'

/**
 * Return the point with absolute coordinates.
 * @param pnt - A Point to have coordinates switched to absolute units.
 */
const getAbsolutePoint = (pnt: Point): Point => siFunciona.mapObject(pnt, Math.abs, 0)

export default getAbsolutePoint
