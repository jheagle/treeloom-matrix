/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Coordinate, Point } from './types'

/**
 * Store the point data for an x, y, z Matrix.
 * @param x - The numeric value for X-coordinate
 * @param y - The numeric value for Y-coordinate
 * @param z - The numeric value for Z-coordinate (default to 0 for 2D Matrix)
 */
const point = (x: Coordinate, y: Coordinate, z: Coordinate = 0): Point => ({ x, y, z })

export default point
